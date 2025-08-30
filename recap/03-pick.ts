/**
    3. Pick

👉 ধরো তুমি শুধুমাত্র public profile পাঠাবে। Pick<User, "id" | "name"> ব্যবহার করে object বানাও।
 */

 type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

function pickSomething(user:Pick<User, "email"| "name">){
    // rectricted user only take email and name and other property should not be taken
    return {
         email:user.email,
         name: user.name
    }
}
let user = pickSomething({email:"limon@gmail.com",name:"limon"})
console.log(user)
