/**

    5. Record

👉 Role based permissions map করো।
 */

type Role = "admin" | "viewer" | "editor";

type accessObj = {
  type: string;
  access: string;
};

let permissions: Record<Role, accessObj> = {
  admin: {
    type: "admin user",
    access: "admin can do anything",
  },
  editor: {
    type: "editor user",
    access: "editor can only edit the file",
  },
  viewer: {
    type: "viewer",
    access: "viewer can only read the file",
  },
};

function getPermissions(role:Role){
    return permissions[role]
}
let pers = getPermissions("admin")
console.log(pers)

export {}