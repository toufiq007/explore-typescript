"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
        this._coursecount = 1;
        this.email = email;
        this.password = password;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple  ".concat(this.email, " and course count ").concat(this._coursecount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        //   getter
        get: function () {
            return this._coursecount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        // setter
        set: function (newCourseCount) {
            this._coursecount = newCourseCount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u1 = new User("limon@gmail.com", "sisisboss");
var first_count = u1.getCourseCount;
console.log(first_count);
u1.setCourseCount = 10;
first_count = u1.getCourseCount;
console.log(first_count);
