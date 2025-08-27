
// 🔹 Enums কি?

// Enum (Enumeration) হলো TypeScript এর একটা special data type যেটা predefined constant values represent করে।

// সহজ কথায়, এটা হলো named constants এর একটা গ্রুপ।

// একধরনের variable কিন্তু একাধিক fixed values এর মধ্যে থেকে choose করতে পারে।


// example one
enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

function move (dir:Direction){
    if (dir === Direction.UP){
        console.log("you go to up")
    }
    else if (dir === Direction.DOWN){
        console.log("you go to down")
    }
    else if (dir === Direction.LEFT){
        console.log("you go to left")
    }
    else {
        console.log("you go to right")
    }
}

// move(Direction.UP)


enum UserRole {
    admin = "ADMIN",
    user = "USER",
    farmer = "FARMER"
}
function userAction (user: UserRole){
    if (user === UserRole.admin){
        console.log("you have all kinds of access")
    }
    else if (user === UserRole.farmer){
        console.log("you have only access to modify your store")
    }
    else if (user === UserRole.user){
        console.log("you don't have any admin access")
    }
}
// ei function call korar somoy tumi enum theke data ene dekhabe like UserRole.admin
userAction(UserRole.admin)
userAction(UserRole.user)
userAction(UserRole.farmer)



// same kaj ta toh eivabe union diyeu kora jay
type UserRole2 = "admin" | "farmer" | "user"
function userAction2 (user:UserRole2){
    if (user === "admin"){
        console.log("you have all kinds of access")
    }
    else if (user === "farmer"){
        console.log("you have only access to modify your store")
    }
    else if (user === "user"){
        console.log("you don't have any admin access")
    }
}
userAction2("admin")

