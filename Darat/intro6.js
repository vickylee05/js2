class intro6 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "intro6" });
    }

    preload() {
      this.load.image('intro6', 'assets/intro6.jpg')
  
  }
  
    create () {
      this.intro6 = this.add.image(0, 0, 'intro6').setOrigin(0, 0).setScale(1);
     
      console.log("menupage - intro6");
      //let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      // spaceDown.on('down'), function(){
      // console.log("Spacebar pressed, go to next page");
      // spaceDown.on('down'), function(){
      // // this.scene.stop("intro6");
      // // this.scene.start("level1")
        let playerPos = {};
        playerPos.x = 420
        playerPos.y = 1213
            this.scene.start("level1",{playerPos: playerPos});
      //       }, this };
      //     } this ; 
          spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to next page");
            this.scene.start("level1");
            }, this );
        
        }
          
        }     


    