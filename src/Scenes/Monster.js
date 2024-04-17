class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        //my.sprite.this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.legLeft = this.add.sprite(this.bodyX - 50, this.bodyY + 130, "monsterParts", "leg_blueC.png");
        my.sprite.legLeft.setFlipX(true);
        my.sprite.legRight = this.add.sprite(this.bodyX + 50, this.bodyY + 130, "monsterParts", "leg_darkD.png");

        my.sprite.armLeft = this.add.sprite(this.bodyX - 100, this.bodyY + 100, "monsterParts", "arm_greenD.png");
        my.sprite.armLeft.setFlipX(true);
        my.sprite.armRight = this.add.sprite(this.bodyX + 100, this.bodyY + 100, "monsterParts", "arm_yellowA.png");

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 10, "monsterParts", "eye_blue.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthE.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;


        my.sprite.antennaLeft = this.add.sprite(this.bodyX - 20, this.bodyY - 100, "monsterParts", "detail_red_antenna_large.png");
        my.sprite.antennaLeft.setFlipX(true);
        my.sprite.antennaRight = this.add.sprite(this.bodyX + 20, this.bodyY - 100, "monsterParts", "detail_blue_antenna_large.png");

        this.input.keyboard.on("keydown-S", this.smile, this);
        this.input.keyboard.on("keydown-F", this.fangs, this);
        this.input.keyboard.on("keydown-A", this.move_left, this);
        this.input.keyboard.on("keydown-D", this.move_right, this);

        
    }

    smile() {
        let my = this.my;
        my.sprite.fangs.visible = false;
        my.sprite.smile.visible = true;
    }

    fangs() {
        let my = this.my;
        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = true;
    }

    move_left() {
        let my = this.my;
        for (const i in my.sprite) {
            my.sprite[i].x -= 5;
        }
    }

    move_right() {
        let my = this.my;
        for (const i in my.sprite) {
            my.sprite[i].x += 5;
        }
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability



       
    }

}