// objects
type UserType = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};
const user = {
  name: "limon",
  age: 20,
  email: "t.limon2342@gmail.com",
  isActive: false,
};

// takes a usertype parater in function argument
const createUser = (user: UserType) => {};


// return a user type object from an function
const loginUser = (user: UserType): UserType => {
  const loginUser: UserType = {
    name: "limon",
    age: 20,
    email: "limon@gmail.com",
    isActive: false,
  };
  return loginUser;
};

createUser(user);
loginUser(user)



// weird behavior of the javascript is still present in the typescript file


export {};
