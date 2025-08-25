type UserType = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

const createUser = (user: UserType) => {};
const userObj = {
  name: "limon",
  age: 10,
  email: "limon@gmail.com",
  isActive: true,
};
createUser(userObj);
