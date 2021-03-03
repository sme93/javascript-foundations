var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    var statue = new Statue(person.name);

    if (this.statues.length < 3) {
      this.statues.push(statue);
    }

    if (this.statues.length > 3) {
      var removedElement = this.statues.shift();
      var person = new Person(removedElement.name);
      console.log(removedElement);
      //console.log(person);
      //console.log(this.statues.length);
      // console.log(this.statues);
       return person;
    }

  }

}








module.exports = Medusa;
