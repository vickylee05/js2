
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scene: [preloadScene,intro1,intro2,intro3,intro4,intro5,intro6,level1,level2,level3]


};

let game = new Phaser.Game(config);