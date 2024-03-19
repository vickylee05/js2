class intro5 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "intro5" });
    }

    preload() {
      this.load.image('intro5', 'assets/intro5.jpg')
  
  }
  
  create () {
      this.intro5 = this.add.image(0, 0, 'intro5').setOrigin(0, 0).setScale(1);
     
      console.log("introduction - collects1");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next page");
      this.scene.stop("intro5");
      this.scene.start("intro6");
      }, this );
  
  }
    
  }