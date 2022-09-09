var a;
a = function (a, b) {
    return function () { return "aa"; };
};
var e = function (a, b) {
    return function () { return "aaa"; };
};
// let b: Array<Array<string>> = [];
var b = [["dfdf"], [5], [["dslkfjs", "sdkjf"]]];
b.push([["sd"]]);
var c;
var d;
d = {
    name: "sds",
    age: 5,
    email: "dskj"
};
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return User;
}());
d = new User("daniel", 55, "dsfak@dsfksdjfa.com");
var g;
g = d;
g = {
    name: "danile",
    age: 55,
    email: "sdkljsd@kfjds"
};
g = new User("danile", 55, "dskjsdk");
var z;
var x1 = {
    value: "string only"
};
var x2 = {
    value: {
        name: "must be of type user",
        age: 55,
        email: "dskfjsd"
    }
};
