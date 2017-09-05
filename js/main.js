var game = new Phaser.Game('100', '100', Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

// Class definitions
// TODO: Split up into separate files later on

/*
class LogicObject {

    var state;
    var sprite;

    constructor() {
        this.state = false;
        this.sprite = null;
    }

}

class Gate extends LogicObject {

    var inputConnections;

	constructor() {
        super();
        this.inputConnections = [];
	}

    this.addInputConnection = function(connection) {
        inputConnections.push(connection);
    }
} 

class AndGate extends Gate {
    
    constructor(x,y) {
        super();
        this.sprite = game.add.Sprite(x, y, 'AND-Gate');
    }

    // TODO: This will be redefined on creation, define only once using andGate.prototype.andGateFunction
    this.andGateFunction = function() {
        for input in this.inputConnections {
            this.state = this.state && input.state;
        }
    }
}

class Connection extends LogicObject {

    var input;
    var output;

    constructor(inputObject, outputObject) {
        super();
        this.sprite = game.add.Sprite()
        
        this.input = inputObject;
        this.output = outputObject;
    }

    this.updateState = function() {
        this.state = inputObject.state;
    }

}

class Switch extends LogicObject {

    constructor() {
        super();
        this.sprite = game.add.Sprite(x, y, 'Switch');
    }

}
*/
function preload() {

    game.load.image('AND-Gate', 'assets/AND-Gate-128.png');
    // TODO: Add the sprites
    game.load.image('Switch', 'assets/Switch.png')
    game.load.image('LED', 'assets/LED.png')

}

var debug;
var debugFlag;
var sprite;
var andGateSelected;
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
    
    andGateSelected = true;
    
    oldPosition = new Phaser.Point();
    newPosition = new Phaser.Point();
    game.input.activePointer.position.copyTo(oldPosition);
    game.input.activePointer.position.copyTo(newPosition);

    sprite.events.onInputUp.add(placeObject, this);

}

function placeObject() {
    if (andGateSelected) andGateSelected = false;
    else andGateSelected = true;
}

function update() {

    if (andGateSelected) {
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
