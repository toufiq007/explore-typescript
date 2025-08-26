// in abstract class there is not possible to create a object of abstract class
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  //   this abstract method must be implemented to the parent class
  abstract getInfo(): number;
  //   this method can be overright by child class
  getReelTime(duration: number): void {
    console.log("reel time is 8 seconds");
  }
}
class Instragram extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  getInfo(): number {
    return 5;
  }
  //   can be overighted this method
  getReelTime(duration: number): void {
    console.log(`reel time is ${duration}`);
  }
}
const limon = new Instragram("test", "test");
limon.getReelTime(10);
export {};
