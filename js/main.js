var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
    
    game.load.baseURL = 'http://i.imgur.com/';
    game.load.crossOrigin = 'anonymous';
    game.load.image('AND-Gate', 'm0LOxHc.png');

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
    // oldPosition = game.input.activePointer.position();

}

function listener() {
    
    text.text = "Click registered!";
    
}

function update() {

    if (andGateSelected) {
        
        /*
        newPosition = game.input.activePointer.position();
        
        if (!newPosition.equals(newPosition, oldPosition)) {
            text.text = newPosition.toString();
            oldPosition = newPosition;
        }
        */
        
        if (game.input.activePointer.leftButton.justReleased()) {
            text.text = 'Ha!';
        }
    }

}

function render() {

}
