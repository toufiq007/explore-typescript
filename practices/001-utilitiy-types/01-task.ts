// task one
/**
updateUser নামে একটি function বানাও যেটা Partial<User> নেবে এবং শুধু যেসব property দেওয়া হবে সেগুলো update করবে।
** Real use case:
    Profile update করলে সব field একসাথে আসে না (শুধু email বদলাতে পারে, শুধু name বদলাতে পারে)। তাই Partial দরকার হয়।
 */

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
let userOne: User = {
  name: "limon",
  email: "limon@gmail.com",
  id: 101,
  password: "limo101",
};
function updateUser(user: User, updatedData: Partial<User>) {
  // ekhane new ekta object return korte hobe updated data diye mane updatedData object er vitore jei property ta pathacchi seitai update korbe only baki property gulo as usual thakbe
  if (user.id === updatedData.id) {
    return {
      ...user,
      ...updatedData
    };
  }
  else {
    console.log('please give the right element for updateing the data')
  }
}
let updatedObject = updateUser(userOne, {
  id: 101,
  email: "toufiqlimon@gmail.com",
  name: "hassan",
});
console.log(userOne);
console.log(updatedObject);

export {};
