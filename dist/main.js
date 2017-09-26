var game = new Phaser.Game('100', '100', Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

// Class definitions
// TODO: Split up into separate files later on


class Gate {
}

class AndGate extends Gate {

    input(in1, in2) {
        this.in1 = in1;
        this.in2 = in2;

    }

    output() {
        return this.in1 && this.in2;
    }

    /*
    constructor(x,y) {
        super();
        this.sprite = game.add.Sprite(x, y, 'AND-Gate');
    }

    // TODO: This will be redefined on creation, define only once using andGate.prototype.andGateFunction
    this.andGateFunction = function() {
        for input in this.inputConnections {
            this.state = this.state && input.state;
        }
    }*/
}


function preload() {

    game.load.image('AND-Gate', 'assets/AND-Gate-128.png');
    // TODO: Add the sprites
    /*game.load.image('Switch', 'assets/Switch.png')
    game.load.image('LED', 'assets/LED.png')*/

}

var debug;
var debugFlag;
var sprite;
var objectDragged;
var oldPosition;
var newPosition;

function create() {

    // Rescale the game when the user resizes the browser window
    // As found here: http://www.html5gamedevs.com/topic/1638-changing-game-size-to-fit-page/
    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE
    game.scale.parentIsWindow = true;

    debugFlag = false;

    sprite = game.add.sprite(0, 0, 'AND-Gate');
    if (debugFlag) debug = game.add.text(15, 15, 'test1', { fill: '#ffffff' });
    
    sprite.inputEnabled = true;
    
    objectDragged = true;
    
    oldPosition = new Phaser.Point();
    newPosition = new Phaser.Point();
    game.input.activePointer.position.copyTo(oldPosition);
    game.input.activePointer.position.copyTo(newPosition);

    sprite.events.onInputUp.add(placeObject);

}

function placeObject() {
    // TODO: Remove object from list of draggable objects
    if (objectDragged) objectDragged = false;
    else objectDragged = true;
}

function update() {

    if (objectDragged) {
        game.input.activePointer.position.copyTo(newPosition);

        if (!Phaser.Point.equals(newPosition, oldPosition)) {
            // Draw the selected gate centered under the pointer
            sprite.position.x = newPosition.x - sprite.width / 2;
            sprite.position.y = newPosition.y - sprite.height / 2;
            if (debugFlag) debug.text = 'New position: ' + newPosition.x + ', ' + newPosition.y;
        }

        if (game.input.activePointer.leftButton.justReleased)

        newPosition.copyTo(oldPosition);
    }

}

function render() {

}
