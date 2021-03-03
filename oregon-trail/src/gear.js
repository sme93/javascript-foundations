class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }
  checkForValidity() {
    var validTypes = ["food", "ammunition", "clothes"]
    if (validTypes.includes(this.type)) {
      return "Great, we'll need lots of ammunition!";
    }
      return "I don`t think a mp3 player will help us."

  }
}

module.exports = Gear;
