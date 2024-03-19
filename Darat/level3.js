
class level3 extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'level3' });
    }

    preload() {

        // Step 1, load JSON
 this.load.tilemapTiledJSON("level3", "assets/level3.tmj");

 this.load.spritesheet("Darat", "assets/character/Darat.png",
 this.load.spritesheet("Darat", "assets/character/Daren.png", {
    frameWidth: 64,
    frameHeight: 64,
 }));

        // Step 2 : Preload any images here
 this.load.image("kitchenimg", "assets/items/12_Kitchen_32x32.png")
 this.load.image("foodimg", "assets/items/food.png")
 this.load.image("Darenimg", "assets/character/Daren.png")
 this.load.image("roombuilderimg", "assets/wallnfloor/Room_Builder_32x32.png")
 this.load.image("trimsndoorsimg", "assets/wallnfloor/trimsanddoors.png")

    } // end of preload //

    create (){

    console.log("animationScene")

    //Step 3 - Create the map from main
let map = this.make.tilemap({ key: "level3"});
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let Kitchen_32x32Tiles = map.addTilesetImage("12_Kitchen_32x32", "kitchenimg");
    let DarenTiles = map.addTilesetImage("Daren", "Darenimg");
    let foodTiles = map.addTilesetImage("food", "foodimg");
    let Room_Builder_32x32Tiles = map.addTilesetImage("Room_Builder_32x32", "roombuilderimg");
    let trimsanddoorsTiles = map.addTilesetImage("trimsanddoors", "trimsndoorsimg");


    //Step 5  create an array of tiles
    let tilesArray = [
        Kitchen_32x32Tiles, DarenTiles, foodTiles, Room_Builder_32x32Tiles, trimsanddoorsTiles
    ]

    // Step 6  Load in layers by layers
    this.outsideLayer = map.createLayer("outside",tilesArray,0,0);
    this.floorLayer = map.createLayer("floor",tilesArray,0,0);
    this.carpetLayer = map.createLayer("carpet",tilesArray,0,0);
    this.bordersLayer = map.createLayer("borders",tilesArray,0,0);
    this.windowLayer = map.createLayer("window",tilesArray,0,0);
    this.deco1Layer = map.createLayer("deco1",tilesArray,0,0);
    this.deco2Layer = map.createLayer("deco2",tilesArray,0,0);
    this.deco3Layer = map.createLayer("deco3",tilesArray,0,0);

    
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

    this.player = this.physics.add.sprite(357, 472, 'Darat');
    window.player = this.player

    this.cameras.main.startFollow(this.player);
    // this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D");

    // this.outsideLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.outsideLayer);
    // // this.floorLayer.setCollisionByExclusion(-1, true);
    // // this.physics.add.collider(this.player, this.floorLayer);
    // // this.carpetLayer.setCollisionByExclusion(-1, true);
    // // this.physics.add.collider(this.player, this.carpetLayer);
    this.bordersLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.bordersLayer);
    // // this.windowLayer.setCollisionByExclusion(-1, true);
    // // this.physics.add.collider(this.player, this.windowLayer);
    this.deco1Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.deco1Layer);
    this.deco2Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.deco2Layer);
    this.deco3Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.deco3Layer);

    this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.2)

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
            }// end of update // 

                if (
                    this.player.y > 509 &&
                    this.player.x > 306 &&
                    this.player.x < 402 
              ) {
                console.log("Door3");
                this.level1();
              }
        
            }
            // end of update // 
        
            level1(player, tile) {
                console.log("level1 function");
                let playerPos = {};
                playerPos.x = 183
                playerPos.y = 1080
                    this.scene.start("level1",{playerPos: playerPos});
          }



}