class Skier {
  constructor(name, skillLevel) {
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = skillLevel;
    this.nextSlope = "green circle"
  }

  takeLesson() {
    this.skillLevel++;
  }

  pickSlope() {
    if (this.skillLevel >= 3 && this.skillLevel < 4) {
      this.nextSlope = "blue square";
    }
    if (this.skillLevel >= 4) {
      this.nextSlope = "black diamond";
    }
  }
}


module.exports = Skier;
