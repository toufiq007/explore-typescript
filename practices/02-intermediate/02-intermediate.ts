/**
    1. Discriminated Union
    API থেকে data এলে, type অনুযায়ী আলাদাভাবে handle করা শিখো।
 */

type ApiResponse =
  | { status: "success"; data: string }
  | { status: "pending"; data: null }
  | { status: "error"; error: "something went wrong" }
  | { status: "unauthorized"; message: "you are unauthorized error" };

function checkResponse(res: ApiResponse) {
  switch (res.status) {
    case "pending":
      console.log("pending...");
      return;
    case "error":
      console.log("error occured");
      return;
    case "success":
      console.log("success case");
      return;
    case "unauthorized":
      console.log("unauthorized error");
      return;
    // exhaustive type checking
    default:
      const _exhaustiveCheck: never = res;
      throw new Error(`Unhandled case: ${JSON.stringify(res)}`);
  }
}


// 6. Utility Types
type User = {
    name:string
    age: number
}
type OptionalUser = Partial<User>
type RequiredUser = Required<User>
type UserId = Pick<User, "name" | "age">

let optUser : OptionalUser = {
    
}
let reqUser : RequiredUser = {
    name:"limon",
    age:10
}
let userId : UserId = {
    age:10,
    name:"limon"
}


// Partial --> sob gulo property kei optional kore dey
// Required --> sob gulo property kei required kore dey
// Pick --> ekta type object theke ektai property required kore dey --> ekhane union type o deuya jabe


