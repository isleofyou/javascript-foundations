class Magician {
  constructor({name, assistant, clothing}){
this.name = `The Great ${name}`;
this.assistant = assistant;
if (clothing === undefined){
this.favoriteAccessory = "top hat";
} else this.favoriteAccessory = clothing;
  }
  performIncantation (phrase){
    return `${phrase}!`.toUpperCase();
  }
perfromTrick(){
  if (this.favoriteAccessory === 'top hat'){
    return "PULL RABBIT FROM TOP HAT";
  }
}
}

module.exports = Magician;
