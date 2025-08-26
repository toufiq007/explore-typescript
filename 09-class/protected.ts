
// protected hoile sob class ei accessible jodi inherit kore
// private hoile sudhu class er vitorei access kora jabe

class Car {
  protected origin: string = "JAPAN";
  constructor(public name: string, public model: string) {
    this.name = name;
    this.model = model;
  }
}
class HONDA extends Car {
  printInfo() {
    console.log(this.origin);
  }
}
    