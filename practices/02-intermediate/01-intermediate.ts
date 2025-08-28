
// intermediate tasks


// union types
let id : string | number
id = 10
id = "100"

// Task: একটা function বানাও যা number বা string নেয় এবং string হলে uppercase করবে, number হলে double করবে।
function modValue (value: number | string){
    if (typeof value === "number"){
        return value * value
    }
    return value.toUpperCase()
}
let value = modValue("limon")
// console.log(value)


// Task: Traffic light ("red" | "yellow" | "green") এর জন্য একটা variable বানাও। function দিয়ে বলাও light অনুযায়ী কী করতে হবে।

type Light = "red" | "yellow" | "green"
function checkDirection (light: Light){
    if (light === "red"){
        console.log("stoped all the car")
    }
    else if (light === "green"){
        console.log("now you can move the car")
    }
    else {
        console.log("please stoped for a while")
    }
}
// checkDirection("yellow")



// Task: একই structure এর জন্য type alias আর interface দুটোই বানাও।
type User = {
    name:string
    email:string 
    password:string
}
interface IUser {
    name:string 
    email:string 
    password: string
}

let userOne : User = {
    name:"limon",
    email: "limon@gmail.com",
    password: "limo123"
}
let userTwo : IUser = {
    name : "toufiq",
    email: "toufiq@gmail.com",
    password: "toufi008"
}



// Task: Teacher টাইপ বানাও যেটা Person + Employee একসাথে হবে।

type Person = {
    name: string
}
type Employee = {
    salary: number 
}
type Teacher = Person & Employee & {
    subject:string
}
let teacherOne: Teacher = {
    name : "Tapos",
    subject: "English",
    salary: 10000
}



// Task: একটা generic function বানাও যেটা যেকোনো টাইপের array রিভার্স করে দিবে।
function reverseAnyArray<T>(array: T[]): T[]{
    return array.reverse()
}
let nums = [1,2,3]
let strings = ["limon","toufiq","hasan"]

let reverseNums = reverseAnyArray(nums)
let reverseStrings = reverseAnyArray(strings)
// console.log(reverseStrings)



// Task: এমন function বানাও যেটা price & quantity নেবে, quantity না দিলে default হবে 1।
function showPriceInfo (price:number, quantity:number = 1){
    console.log(`the price of the product is ${price} and the quantity is ${quantity}`)
}
// showPriceInfo(1000,10)




// Task: একটা Book interface বানাও যেখানে id change করা যাবে না, কিন্তু author optional থাকবে।
interface Book {
    readonly id : number 
    name : string 
    author?: string
}
let book1 : Book = {
    id: 101,
    name: "cracking the coding interview",
    author: "john haldon"
}
// book1.id = 102  // that's not possible because it is a readonly value
book1.name = "camila anderson"
book1.name = "learning python"
// console.log(book1.id)



// 

