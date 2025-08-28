// learning omit
/**
    kono property bad deuyar jonno omit use kora hoy
 */

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
type PublicUser = Omit<User, "password">;

let userOne: PublicUser = {
  id: 101,
  name: "Limon",
  email: "limo@gmail.com",
  // password:"lssls" // because password field is ommited here
};

// example two
// make a product interface
interface Product {
  id: number;
  name: string;
  price: number;
  costPrice: number;
}
type PublicProduct = Omit<Product, "costPrice">;

function showProduct(product: PublicProduct) {
  console.log(product.id);
  console.log(product.name);
  console.log(product.price);
}
showProduct({ id: 101, name: "thinkpad t450s", price: 599 });
