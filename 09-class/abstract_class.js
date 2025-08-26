"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// in abstract class there is not possible to create a object of abstract class
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function (duration) {
        console.log('reel time is 8 seconds');
    };
    return TakePhoto;
}());
var Instragram = /** @class */ (function (_super) {
    __extends(Instragram, _super);
    function Instragram(cameraMode, filter) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        return _this;
    }
    Instragram.prototype.getInfo = function () {
        return 5;
    };
    Instragram.prototype.getReelTime = function (duration) {
        console.log("reel time is ".concat(duration));
    };
    return Instragram;
}(TakePhoto));
var limon = new Instragram("test", "test");
limon.getReelTime(10);
