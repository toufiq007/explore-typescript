/**
    required type
 */

type User = {
  id: number;
  name?: string;
  email: string;
  password?: string;
};

function requiredData(user: Required<User>) {
  console.log("all fileds are required");
}

// all fields must be provided because parameter type is required
requiredData({
  id: 202,
  name:"limon",
  email: "limon@gmail.com",
  password: "sisisboss",
});

export {}