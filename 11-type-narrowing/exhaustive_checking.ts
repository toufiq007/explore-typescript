// very very important topics

// exhaustiveness checking
// it means must be a exhaustive never type in the switch case it means if new case arised either declare it otherwise gives error

interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}
interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Rectangle | Square;

function printArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.length * shape.width;

    case "square":
      return shape.side * shape.side;

    default:
      const _defaultforshape : never = shape 
      return _defaultforshape
  }
}
