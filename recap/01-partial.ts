/**
1. Partial

👉 ধরো User type আছে। এখন একটি function বানাও যেটা শুধু update করা field গুলো নেবে।
    Partial<User> --> generic hisebe Type ke ney
 */
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
function udpatedData(user: User, updatedObj: Partial<User>) {
  return {
    ...user,
    ...updatedObj,
  };
}
let userData: User = {
  name: "limon",
  id: 21212,
  email: "limon@gmail.com",
  password: "issis",
};
let updated = udpatedData(userData, { email: "toufiq@gmail.com" });
console.log(updated)


export {}