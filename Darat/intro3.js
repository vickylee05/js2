class intro3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "intro3" });
    }

    preload() {
      this.load.image('intro3', 'assets/intro3.jpg')
  
  }
  
  create () {
      this.intro3 = this.add.image(0, 0, 'intro3').setOrigin(0, 0).setScale(1);
     
      console.log("introduction - intructions");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next page");
      this.scene.stop("intro3");
      this.scene.start("intro4");
      }, this );
  
  }
    
  }