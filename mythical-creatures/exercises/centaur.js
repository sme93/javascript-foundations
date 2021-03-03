class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.runAndShoot = 0;
  }
  shootBow() {
    if (this.runAndShoot <= 3) {
      this.runAndShoot++
    }
    if (this.runAndShoot === 3) {
      this.cranky = true;
    }
    if (this.cranky === true || this.layingDown === true) {
      return "NO!"
    }

    return 'Twang!!!'
  }

  run() {
    if (this.runAndShoot <= 3) {
      this.runAndShoot++
    }
    if (this.runAndShoot === 3) {
      this.cranky = true;
    }
    if (this.cranky === true || this.layingDown === true) {
      return "NO!";
    }

    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing) {
      return "NO!";
    }
    if (this.layingDown) {
      this.cranky = false;
      return "ZZZZ"
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp( ) {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion( ) {
    if (this.layingDown === true) {
      return "Not while I'm laying down!"
    }
    this.cranky = false;

  }
}






module.exports = Centaur;
