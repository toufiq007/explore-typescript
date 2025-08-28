// intermediate tasks
// union types
var id;
id = 10;
id = "100";
// Task: একটা function বানাও যা number বা string নেয় এবং string হলে uppercase করবে, number হলে double করবে।
function modValue(value) {
    if (typeof value === "number") {
        return value * value;
    }
    return value.toUpperCase();
}
var value = modValue("limon");
function checkDirection(light) {
    if (light === "red") {
        console.log("stoped all the car");
    }
    else if (light === "green") {
        console.log("now you can move the car");
    }
    else {
        console.log("please stoped for a while");
    }
}
var userOne = {
    name: "limon",
    email: "limon@gmail.com",
    password: "limo123"
};
var userTwo = {
    name: "toufiq",
    email: "toufiq@gmail.com",
    password: "toufi008"
};
var teacherOne = {
    name: "Tapos",
    subject: "English",
    salary: 10000
};
// Task: একটা generic function বানাও যেটা যেকোনো টাইপের array রিভার্স করে দিবে।
function reverseAnyArray(array) {
    return array.reverse();
}
var nums = [1, 2, 3];
var strings = ["limon", "toufiq", "hasan"];
var reverseNums = reverseAnyArray(nums);
var reverseStrings = reverseAnyArray(strings);
// console.log(reverseStrings)
// Task: এমন function বানাও যেটা price & quantity নেবে, quantity না দিলে default হবে 1।
function showPriceInfo(price, quantity) {
    if (quantity === void 0) { quantity = 1; }
    console.log("the price of the product is ".concat(price, " and the quantity is ").concat(quantity));
}
var book1 = {
    id: 101,
    name: "cracking the coding interview",
    author: "john haldon"
};
console.log(book1.id);
