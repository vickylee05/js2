class level2 extends Phaser.Scene {
  constructor() {
    super({ key: "level2" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level2", "assets/level2.tmj");

    this.load.spritesheet("Darat", "assets/character/Darat.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    // Step 2 : Preload any images here
    this.load.image(
      "groceryimg",
      "assets/buildings/16_Grocery_store_32x32.png"
    );
    this.load.image(
      "roombuilderimg",
      "assets/wallnfloor/Room_Builder_32x32.png"
    );
    this.load.image("trimsndoorsimg", "assets/wallnfloor/trimsanddoors.png");
  } // end of preload //

  create() {
    console.log("animationScene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level2" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let Grocery_store_32x32Tiles = map.addTilesetImage(
      "16_Grocery_store_32x32",
      "groceryimg"
    );
    let Room_Builder_32x32Tiles = map.addTilesetImage(
      "Room_Builder_32x32",
      "roombuilderimg"
    );
    let trimsanddoorsTiles = map.addTilesetImage(
      "trimsanddoors",
      "trimsndoorsimg"
    );

    //Step 5  create an array of tiles
    let tilesArray = [
      Grocery_store_32x32Tiles,
      Room_Builder_32x32Tiles,
      trimsanddoorsTiles,
    ];

    // Step 6  Load in layers by layers
    this.spaceLayer = map.createLayer("space", tilesArray, 0, 0);
    this.floorLayer = map.createLayer("floor", tilesArray, 0, 0);
    this.bordersLayer = map.createLayer("borders", tilesArray, 0, 0);
    this.basketLayer = map.createLayer("basket", tilesArray, 0, 0);
    this.bottomLayer = map.createLayer("bottom", tilesArray, 0, 0);
    this.topLayer = map.createLayer("top", tilesArray, 0, 0);
    this.fridgeLayer = map.createLayer("fridge", tilesArray, 0, 0);
    this.thingsinLayer = map.createLayer("thingsin", tilesArray, 0, 0);


    this.physics.world.bounds.width = this.floorLayer.width;
    this.physics.world.bounds.height = this.floorLayer.height;

    // make the camera follow the player

    this.anims.create({
      key: "Darat-up",
      frames: this.anims.generateFrameNumbers("Darat", {
        start: 105,
        end: 112,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Darat-left",
      frames: this.anims.generateFrameNumbers("Darat", {
        start: 118,
        end: 125,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Darat-down",
      frames: this.anims.generateFrameNumbers("Darat", {
        start: 131,
        end: 138,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "Darat-right",
      frames: this.anims.generateFrameNumbers("Darat", {
        start: 144,
        end: 151,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.player = this.physics.add.sprite(786, 243, "Darat");
    window.player = this.player;

    this.cameras.main.startFollow(this.player);
    // this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D");

    this.spaceLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.spaceLayer);
    this.floorLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.floorLayer);
    this.bordersLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.bordersLayer);
    this.basketLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.basketLayer);
    // this.cartLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.cartLayer);
    this.bottomLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.bottomLayer);
    this.topLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.topLayer);
    this.fridgeLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.fridgeLayer);
    this.thingsinLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.thingsinLayer);
    // this.thingsonLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player, this.thingsonLayer);

    this.player.body.setSize(this.player.width * 0.2, this.player.height * 0.2).setOffset(25,50)

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

  update() {
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
      } // end of update //

      if (
        this.player.x > 790 &&
        this.player.y > 198 &&
        this.player.y < 260 
      ) {
        console.log("Door2");
        this.level1();
      }

    }
    // end of update // 

    level1(player, tile) {
        console.log("level1 function");
        let playerPos = {};
        playerPos.x = 1070
        playerPos.y = 540
            this.scene.start("level1",{playerPos: playerPos});
  }
}
