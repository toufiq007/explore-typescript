// generic class in typescript
// takes two generic types of arguments
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne: valueOne,
        valueTwo: valueTwo,
    };
}
// this is our generic class which can takes both quiz or course
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
var quizCart = new Sellable();
quizCart.addToCart({ name: "react", type: "online quiz" });
console.log(quizCart.cart);
