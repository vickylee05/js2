
class level1 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level1' });
    }

    init(data) {
      this.playerPos = data.playerPos;
  }

    preload() {

        // Step 1, load JSON
 this.load.tilemapTiledJSON("level1", "assets/level1.tmj");

 this.load.spritesheet("Darat", "assets/character/Darat.png", {
    frameWidth: 64,
    frameHeight: 64,
 });

        // Step 2 : Preload any images here
 this.load.image("groceryimg", "assets/buildings/16_Grocery_store_32x32.png")
 this.load.image("shoppingimg", "assets/buildings/9_Shopping_Center_and_Markets_32x32.png")
 this.load.image("villageimg", "assets/buildings/village32x32.png")
 

    } // end of preload //

    create (){

    console.log("animationScene")

    //Step 3 - Create the map from main
let map = this.make.tilemap({ key: "level1"});
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let Grocery_store_32x32Tiles = map.addTilesetImage("16_Grocery_store_32x32", "groceryimg");
    let Shopping_Center_and_Markets_32x32Tiles = map.addTilesetImage("9_Shopping_Center_and_Markets_32x32", "shoppingimg");
    let village32x32Tiles = map.addTilesetImage("village32x32", "villageimg");



    //Step 5  create an array of tiles
    let tilesArray = [
        Grocery_store_32x32Tiles, Shopping_Center_and_Markets_32x32Tiles, village32x32Tiles
    ]

    // Step 6  Load in layers by layers
    this.linesLayer = map.createLayer("lines",tilesArray,0,0);
    this.floorLayer = map.createLayer("floor",tilesArray,0,0);
    this.floor2Layer = map.createLayer("2ndfloor",tilesArray,0,0);
    this.stairsLayer = map.createLayer("stairs",tilesArray,0,0);
    this.rockpathLayer = map.createLayer("rockpath",tilesArray,0,0);
    this.waterLayer = map.createLayer("water",tilesArray,0,0);
    this.bridgeLayer = map.createLayer("bridge",tilesArray,0,0);
    this.fenceLayer = map.createLayer("fence",tilesArray,0,0);
    this.mailboxLayer = map.createLayer("mailbox",tilesArray,0,0);
    this.rockLayer = map.createLayer("rock",tilesArray,0,0);
    this.treesLayer = map.createLayer("trees",tilesArray,0,0);
    this.trees2Layer = map.createLayer("trees2",tilesArray,0,0);
    this.buildingsLayer = map.createLayer("buildings",tilesArray,0,0);
    this.ontreeLayer = map.createLayer("ontree",tilesArray,0,0);
    
    this.physics.world.bounds.width = this.floorLayer.width;
    this.physics.world.bounds.height = this.floorLayer.height;

     // make the camera follow the player
     

     this.anims.create({
        key:'Darat-up',
        frames:this.anims.generateFrameNumbers('Darat',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'Darat-left',
        frames:this.anims.generateFrameNumbers('Darat',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'Darat-down',
        frames:this.anims.generateFrameNumbers('Darat',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'Darat-right',
        frames:this.anims.generateFrameNumbers('Darat',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });

    this.player = this.physics.add.sprite(this.playerPos.x, this.playerPos.y, 'Darat');
    window.player = this.player

    this.cameras.main.startFollow(this.player);
    // this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D");

    this.linesLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.linesLayer);
    // this.floorLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.floorLayer);
    this.floor2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.floor2Layer);
    // this.stairsLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.stairsLayer);
     this.waterLayer.setCollisionByExclusion(-1, true);
     this.physics.add.collider(this.player, this.waterLayer);
    // this.bridgeLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.bridgeLayer);
    this.fenceLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.fenceLayer);
    this.mailboxLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.mailboxLayer);
    // this.rockLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.rockLayer);
    this.treesLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.treesLayer);
    this.trees2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.trees2Layer);
    this.buildingsLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.buildingsLayer);
    this.ontreeLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.ontreeLayer);

    this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.4)

    var level1Down = this.input.keyboard.addKey(49);

    level1Down.on(
      "down",
      function () {
        console.log("1 pressed, jump to level 1");
        this.scene.start("level1");
      },
      this
    );

    var level2Down = this.input.keyboard.addKey(50);

    level2Down.on(
        "down",
        function () {
          console.log("2 pressed, jump to level 2");
          this.scene.start("level2");
        },
        this
      );

      var level3Down = this.input.keyboard.addKey(51);

      level3Down.on(
        "down",
        function () {
          console.log("3 pressed, jump to level 3");
          this.scene.start("level3");
        },
        this
      );
  
      var level4Down = this.input.keyboard.addKey(52);
  
      level4Down.on(
          "down",
          function () {
            console.log("4 pressed, jump to level 4");
            this.scene.start("level4");
          },
          this
        );

    } // end of create //

    update () {

        if (this.keys.A.isDown) {
            this.player.body.setVelocityX(-250);
            this.player.anims.play("Darat-left", true); // walk left
            } else   if (this.keys.D.isDown) {
                
            this.player.body.setVelocityX(250);
            this.player.anims.play("Darat-right", true);
            } else if (this.keys.W.isDown) {

            this.player.body.setVelocityY(-250);
            this.player.anims.play("Darat-up", true);
            //console.log('up');
            } else   if (this.keys.S.isDown) {

            this.player.body.setVelocityY(250);
            this.player.anims.play("Darat-down", true);
            //console.log('down');
            } else {
            this.player.anims.stop();
            this.player.body.setVelocity(0, 0);
            }

            if (
                this.player.x > 1062 &&
                this.player.x < 1081 &&
                this.player.y > 268 &&
                this.player.y < 525 
              ) {
                console.log("Door1");
                this.level2();
              }

            if (
                this.player.x > 167 &&
                this.player.x < 199 &&
                this.player.y > 950 &&
                this.player.y < 1070 
              ) {
                console.log("Door4");
                this.level3();
              }

            }
            // end of update // 

            level2(player, tile) {
                console.log("level2 function");
                this.scene.start("level2",);
              }

              level3(player, tile) {
                console.log("level3 function");
                this.scene.start("level3",);
              }


}