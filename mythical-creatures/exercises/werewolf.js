class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "wolf") {
      this.form = "human";
      this.hungry = false;
      return "Where are I?"
    }
    this.form = "wolf";
    this.hungry = true;
    return 'Aaa-Woooo!';
  }
  eatVictim(victim) {
    if (this.form === 'human') {
      return "No way am I eating Baby, I'd like a burger!";
    }
    victim.alive = false;
    var fullWolf = `Yum, ${victim.name} was delicious.`
    this.form = "human"
    return fullWolf;
  }
}

module.exports = Werewolf;
