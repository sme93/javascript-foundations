const Direwolf = require("./direwolf.js");

class Stark {
  constructor(stark = {}) {
    this.name = stark.name || "Stark";
    this.location = stark.area || "Winterfell";
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe === false) {
    return "Winter is Coming"
    }
    return "The North Remembers"
  }
  callDirewolf(name) {  
    var wolf = new Direwolf(name, this.location);
    wolf.protect(this);
    return wolf;
  }
}








module.exports = Stark;
