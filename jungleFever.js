var scaleFactor = 3;
var backgroundSpeed = 1;
var backgroundSpeedFactor = .01;

var gameOptions = {
    width: 1152,
    height: 648
};

var jungleFeverGame = new Kiwi.Game('content', 'jungleFeverGame', null, gameOptions);

var myState = new Kiwi.State("myState");
myState.transform.scale = 3;

myState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
    // background
    this.addImage('background1', "assets/Jungle Asset Pack/parallax background/plx-1.png");
    this.addImage('background2', "assets/Jungle Asset Pack/parallax background/plx-2.png");
    this.addImage('background3', "assets/Jungle Asset Pack/parallax background/plx-3.png");
    this.addImage('background4', "assets/Jungle Asset Pack/parallax background/plx-4.png");
    this.addImage('background5', "assets/Jungle Asset Pack/parallax background/plx-5.png");

    this.addSpriteSheet("characterSprite", "assets/Jungle Asset Pack/Chacter with outline/sprites/character.png", 23, 35);
}

myState.create = function () {
    Kiwi.State.prototype.create.call(this);
    
    //backgrounds
    this.background1 = new Kiwi.GameObjects.StaticImage(this, this.textures.background1, 0, 0);
    this.background2_1 = new Kiwi.GameObjects.StaticImage(this, this.textures.background2, 0, 0);
    this.background2_2 = new Kiwi.GameObjects.StaticImage(this, this.textures.background2, this.textures.background2.width-1, 0);
    this.background3_1 = new Kiwi.GameObjects.StaticImage(this, this.textures.background3, 0, 0);
    this.background3_2 = new Kiwi.GameObjects.StaticImage(this, this.textures.background3, this.textures.background3.width-1, 0);
    this.background4_1 = new Kiwi.GameObjects.StaticImage(this, this.textures.background4, 0, 0);
    this.background4_2 = new Kiwi.GameObjects.StaticImage(this, this.textures.background4, this.textures.background4.width-1, 0);
    this.background5_1 = new Kiwi.GameObjects.StaticImage(this, this.textures.background5, 0, 0);
    this.background5_2 = new Kiwi.GameObjects.StaticImage(this, this.textures.background5, this.textures.background5.width-1, 0);
    
    /*
    this.character = new Kiwi.GameObjects.Sprite(this, this.textures.characterSprite, 0, 0);
    this.character.transform.x = this.character.width;
    this.character.transform.y = this.background1.height - this.character.height;
    this.character.animation.add("idle", [0,1,2,3,4,5,6,7,8,9,10,11], .1, true);
    this.character.animation.add("run", [12,13,14,15,16,17,18], .1, true);
    this.character.animation.play( "run" );
    */

    console.log(myState);

    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.A);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.D);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.S);

    this.addChild(this.background1);
    this.addChild(this.background2_1);
    this.addChild(this.background2_2);
    this.addChild(this.background3_1);
    this.addChild(this.background3_2);
    this.addChild(this.background4_1);
    this.addChild(this.background4_2);
    this.addChild(this.background5_1);
    this.addChild(this.background5_2);
    //this.addChild(this.character);
}

myState.update = function () {
    Kiwi.State.prototype.update.call(this);

    this.background2_1.transform.x -= backgroundSpeed + backgroundSpeedFactor * 0;
    this.background3_1.transform.x -= backgroundSpeed + backgroundSpeedFactor * 1;
    this.background4_1.transform.x -= backgroundSpeed + backgroundSpeedFactor * 2;
    this.background5_1.transform.x -= backgroundSpeed + backgroundSpeedFactor * 3;

    this.background2_2.transform.x -= backgroundSpeed + backgroundSpeedFactor * 0;
    this.background3_2.transform.x -= backgroundSpeed + backgroundSpeedFactor * 1;
    this.background4_2.transform.x -= backgroundSpeed + backgroundSpeedFactor * 2;
    this.background5_2.transform.x -= backgroundSpeed + backgroundSpeedFactor * 3;

    this.setBackgroundBack(this.background2_1, this.background2_2);
    this.setBackgroundBack(this.background2_2, this.background2_1);
    
    this.setBackgroundBack(this.background3_1, this.background3_2);
    this.setBackgroundBack(this.background3_2, this.background3_1);

    this.setBackgroundBack(this.background4_1, this.background4_2);
    this.setBackgroundBack(this.background4_2, this.background4_1);
    
    this.setBackgroundBack(this.background5_1, this.background5_2);
    this.setBackgroundBack(this.background5_2, this.background5_1);
    
}

myState.setBackgroundBack = function (background1, background2) {
    if( Math.abs(background1.x) > background1.width){
        background1.transform.x = background2.x + background2.width;
    }
}

jungleFeverGame.states.addState(myState);
jungleFeverGame.states.switchState("myState");