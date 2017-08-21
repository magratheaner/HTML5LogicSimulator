var game = new Phaser.Game('100', '100', Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('AND-Gate', 'assets/AND-Gate-128.png');

}

var text;
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

    sprite = game.add.sprite(0, 0, 'AND-Gate');
    text = game.add.text(250, 16, 'test1', { fill: '#ffffff' });
    
    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(listener, this);
    
    andGateSelected = true;
    
    oldPosition = new Phaser.Point();
    newPosition = new Phaser.Point();
    game.input.activePointer.position.copyTo(oldPosition);
    game.input.activePointer.position.copyTo(newPosition);

}

function listener() {
    
    text.text = 'Click registered!';
    
}

function update() {

    if (andGateSelected) {
        game.input.activePointer.position.copyTo(newPosition);

        if (!Phaser.Point.equals(newPosition, oldPosition)) {
            // Draw the selected gate centered under the pointer
            sprite.position.x = newPosition.x - sprite.width / 2;
            sprite.position.y = newPosition.y - sprite.height / 2;
            text.text = 'New position: ' + newPosition.x + ', ' + newPosition.y;
        }

        newPosition.copyTo(oldPosition);
    }

}

function render() {

}
