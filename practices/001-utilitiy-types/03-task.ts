// task three
/**
    Task 3: Pick<T, K> – Show Limited User Info
    👉 Problem:
    একটি API user data পাঠাবে, কিন্তু frontend-এ শুধু id আর name দেখাবে।

    একটি getPublicProfile(user: Pick<User, "id" | "name">) function বানাও।
    👉 Real use case:
    সব sensitive data frontend-এ পাঠানো হয় না। যেমন password, email বাদ দিয়ে শুধু public data পাঠানো হয়।
 */

type User = {
  name: string;
  email: string;
  password: string;
};

const userFromApi:User = {
  name: "limon",
  email: "limon@gmail.com",
  password: "sisiboss",
}
const getPublicProfile = (data: Pick<User, "name" | "email">) => {
  // here return the public data only.That data comes form the backend side
  return {
    ...data,
  };
};
// i understand this line je ami only duita property pathate partese
// let getprofileData = getPublicProfile({name:"limon",email:"limon@gmail.com"})

// but confisued ami toh alada ekta object o pathate pari jeitate extra property thakte pare like password

// so jodi ekta object define kore pathai tokhn error dey na ,,kintu jodi call korar somoy {} baniye property add korte jai tokhn kintu error dey
let getprofileData = getPublicProfile({
  name: "limon",
  email: "limon@gmail.com",
  //   password: "sisiboss" // here i can't give an extra property like this
});
console.log(getprofileData);


export {}