var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    if (this.statues.length >= 3){
      var unStonedPerson = new Person(this.statues[0].name);
      this.statues.shift();
      var stonedPerson = new Statue(victim.name)
      this.statues.push(stonedPerson)
      unStonedPerson.mood = 'relieved';
      return unStonedPerson;
    }
    var stonedPerson = new Statue(victim.name)
    this.statues.push(stonedPerson);
  }
}

module.exports = Medusa;
