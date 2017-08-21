var game = new Phaser.Game('100', '100', Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('AND-Gate', 'assets/AND-Gate-128.png');

}

var text;
var andGateSelected;
var oldPosition;
var newPosition;

function create() {

    var sprite = game.add.sprite(0, 0, 'AND-Gate');
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
            // TODO: Draw logic gate sprite centered on pointer position
            text.text = 'New position: ' + newPosition.x + ', ' + newPosition.y;
        }

        newPosition.copyTo(oldPosition);
    }

}

function render() {

}
