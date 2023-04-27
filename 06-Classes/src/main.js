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
var Coder = /** @class */ (function () {
    function Coder(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    return Coder;
}());
// or we can use visibility modifiers o avoid duplication
var Coder2 = /** @class */ (function () {
    function Coder2(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // Dont forget to add visual modifiers to methods
    Coder2.prototype.getAge = function () {
        return "Hello, I'm ".concat(this.age);
    };
    return Coder2;
}());
var Name = new Coder2('Ryan', 'Rock', 42, 'Typescript');
console.log(Name.getAge());
// We can extend from anther class, and we dont need to include data types for the extended properties
var WebDev = /** @class */ (function (_super) {
    __extends(WebDev, _super);
    function WebDev(computer, name, music, age, lang) {
        var _this = _super.call(this, name, music, age, lang) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    WebDev.prototype.getLang = function () {
        return "I write ".concat(this.lang);
    };
    return WebDev;
}(Coder2));
var Sarah = new WebDev('Mac', 'Sarah', 'Lofi', 25, 'Typescript');
console.log(Sarah.getLang());
var Guitarist = /** @class */ (function () {
    function Guitarist(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    Guitarist.prototype.plays = function (action) {
        return "".concat(this.name, " ").concat(action, " the ").concat(this.instrument);
    };
    return Guitarist;
}());
var Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.plays('strums'));
