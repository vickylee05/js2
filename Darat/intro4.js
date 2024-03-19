class intro4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "intro4" });
    }

    preload() {
      this.load.image('intro4', 'assets/intro4.jpg')
  
  }
  
  create () {
      this.intro4 = this.add.image(0, 0, 'intro4').setOrigin(0, 0).setScale(1);
     
      console.log("introduction - controls");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next page");
      this.scene.stop("intro4");
      this.scene.start("intro5");
      }, this );
  
  }
    
  }