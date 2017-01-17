"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.id = Person.getId();
        this.name = name;
    }
    Person.getId = function () {
        return Person.id_counter++;
    };
    return Person;
}());
Person.id_counter = 1;
exports.Person = Person;
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(args) {
        return _super.call(this, args) || this;
    }
    return Hero;
}(Person));
exports.Hero = Hero;
