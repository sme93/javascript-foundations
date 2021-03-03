var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name =  name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    }
    this.snowman = undefined;
  }

  gatherMaterials(material, increaseValue) {
      this.materials[material] += increaseValue;
  }

  buildASnowman() {
    var instanceOfSnowman = {
      coal: this.materials.coal,
      carrots: this.materials.carrots,
      snowballs: this.materials.snowballs,
      buttons: this.materials.buttons,
    }
    this.snowman = new Snowman(instanceOfSnowman);

    return this.snowman;
  }

  placeMagicHat() {
    //console.log(this.snowman);
    if (this.snowman.magicHat) {
    return `Woah, this snowman is coming to life!`
  } else {
    return `I guess I didn\'t build it correctly.`
  }

  }
}

module.exports = Human;
