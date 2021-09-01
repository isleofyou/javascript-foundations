class Dragon {

  constructor(name, rider) {
      this.name = name,
      this.rider = rider,
      this.hungry = true,
      this.hunger = 0
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.hunger++;
    if (this.hunger > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
