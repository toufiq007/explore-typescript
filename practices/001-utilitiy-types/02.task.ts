// task two
/**
    একটি function validateSignup(data: Required<SignupData>) বানাও যেটা নিশ্চিত করবে সব ফিল্ড আসবেই।
    *?
    Real use case:
    Signup form-এ সব ফিল্ড must দিতে হয়। Optional থাকলেও backend এ validate করতে চাইলে Required কাজে লাগে।
 */

// duivabe kora jabe firstly make every property form the signupData type is required
// secondly if the condition some properties may be optional then in function argument explicitly make the all the properties required by Required<SignUpData> type. this will make every property must be required then pass the data in the function parameter

type SignUpData = {
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  username?: string;
};
function validateSignup(data: Required<SignUpData>) {
  if (data) {
    console.log(
      "i confirmed that every property form the SignUpData type is required now otherwise you don't run the file "
    );
  }
}
validateSignup({
  email: "limon@gmail.com",
  name: "Limon",
  password: "sisisboss",
  profilePic: "htttp://localhost:3000/api/profile-pic",
  username: "limo009",
});

