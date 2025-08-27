// generic class in typescript

interface Database {
  connectionString: string;
  userName: string;
  password: string;
}

// takes two generic types of arguments
function anotherFunction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return {
    valueOne,
    valueTwo,
  };
}

// first case
// anotherFunction(2, {
//   connectionString: "fskfsdakfaf",
//   userName: "limon",
//   password: "limo001",
// });

// second case
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// this is our generic class which can takes both quiz or course
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "react", type: "online quiz" });
console.log(quizCart.cart);
