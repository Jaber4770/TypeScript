console.log('Hello World!');
const country = "Bangladesh";
console.log(country);
const func = () => console.log("arrow func");
console.log(func());
console.log("hello");
let playerName = "Jack";
console.log(playerName);
// playerName = 234;
console.log(playerName);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 5));
let c;
c = "3";
let d;
d = 5;
let array = [];
array.push(3, 4, 5, 6);
console.log(array);
let multitype = [];
multitype.push(4, 'lsdfj');
console.log(multitype);
let value;
value = 4;
value = 'dlf';
// object
let obbject;
obbject = {
    name: 'jack',
    age: 11
};
let obbjject;
obbjject = {
    name: 'jack',
    age: 5,
    programmer: false,
};
console.log(obbjject);
let abc;
abc = 5;
// function
const myFuncc = (a, b, c = "C") => {
    console.log("hello", a, b, c);
};
myFuncc('A', "B");
const returnFunc = (a, b) => {
    return a * b;
};
console.log(returnFunc(5, 5));
const userDetails = (id, user) => {
    console.log(`user id is:${id}, name is:${user.name} and age is ${user.age}`);
};
userDetails(5, { name: 'jack', age: 24 });
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
sayHello({ name: "jack", age: 24 });
// function signature
let userrDetails;
userrDetails = (id, userInfo) => {
    console.log(`${userInfo.name} er id holo ${userInfo.id}`);
};
console.log(userrDetails(575430, { name: 'jack', id: 575430 }));
// class----------------------------------------------
import { Player } from './player.js';
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
console.log(mashrafi);
// generic
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = addID({
    name: 'Mashrafi',
    age: 40,
    country: "Bangladesh"
});
console.log(user.name);
console.log(user.country);
//# sourceMappingURL=script.js.map