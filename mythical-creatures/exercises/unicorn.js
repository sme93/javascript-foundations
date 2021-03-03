class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }
  isWhite() {
    if (this.color === "white") {
      return true;
    }
    
    return false;
  }
  says(word) {
    return `**;* ${word} *;**`
  }
}


module.exports = Unicorn;


//1. read the test
//2. ask self if its going to fail and why
//3. run the test
//4. make it pass
