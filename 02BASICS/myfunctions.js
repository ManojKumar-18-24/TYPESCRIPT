"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(7);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Manoj");
function signUpUser(name, email, isPaid) {
}
signUpUser("1", "2", true);
var getHello = function (s) {
    return "hello";
};
var heros = ["rc", "bhaai", "toyger"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
}); //better syntax
function consoleError(errmsg) {
    console.log(errmsg);
}
function fail(msg) {
    throw new Error(msg);
}
