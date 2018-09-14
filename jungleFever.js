var jungleFeverGame = new Kiwi.Game();

var myState = new Kiwi.State("myState");

myState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    //this.addSpriteSheet("characterSprite", "assets/Jungle Asset Pack/Chacter with outline/sprites/idle outline.gif", 150, 117);
    this.addImage('background', "assets/Jungle Asset Pack/parallax background/plx-5.png");
}

myState.create = function () {
    Kiwi.State.prototype.create.call( this );
 
    this.background = new Kiwi.GameObjects.StaticImage( this, this.textures.background, 0, 0 );
    //this.character = new Kiwi.GameObjects.Sprite( this, this.textures.characterSprite, 350, 330 );
    this.leftKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.A );
    this.rightKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.D );
    this.downKey = this.game.input.keyboard.addKey( Kiwi.Input.Keycodes.S );
}

myState.update = function() {
    Kiwi.State.prototype.update.call( this );
}

jungleFeverGame.states.addState( myState );
jungleFeverGame.states.switchState( "myState" );