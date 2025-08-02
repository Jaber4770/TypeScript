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



function multiply(a: number, b: number) {
    return a * b;
}

console.log(multiply(5, 5));


let c: string;
c = "3";

let d: number;
d = 5;

let array: number[] = [];
array.push(3, 4, 5, 6);
console.log(array);

let multitype: (number | string)[] = [];
multitype.push(4, 'lsdfj');
console.log(multitype);


let value: string | number;
value = 4;
value = 'dlf';

// object
let obbject: object;
obbject = {
    name: 'jack',
    age: 11
}

let obbjject: {
    name: string,
    age: number,
    programmer: boolean
}

obbjject = {
    name: 'jack',
    age: 5,
    programmer: false,
}

console.log(obbjject);

let abc: any;
abc = 5;


// function

const myFuncc = (a: string, b: string, c: string = "C") => {
    console.log("hello", a, b, c);
}
myFuncc('A', "B");

const returnFunc = (a: number, b: number): number => {
    return a * b;
}
console.log(returnFunc(5, 5));

// type aliases

type stringOrNum = string | number;
type userDetails = { name: string, age: number };

const userDetails = (id: stringOrNum, user: userDetails) => {
    console.log(`user id is:${id}, name is:${user.name} and age is ${user.age}`);
}

userDetails(5, { name: 'jack', age: 24 })

const sayHello = (user: userDetails) => {
    console.log(`hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
}

sayHello({ name: "jack", age: 24 });


// function signature
let userrDetails: (id: number | string, userInfo: {
    name: string,
    id: number
}) =>void ;

userrDetails = (id: number | string, userInfo: {
    name: string,
    id: number
}) => {
    console.log(`${userInfo.name} er id holo ${userInfo.id}`);
}

console.log(userrDetails(575430, { name: 'jack', id: 575430 }));

// class----------------------------------------------

import {Player} from './player.js'

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
console.log(mashrafi);

// generic

const addID = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

const user = addID({
    name: 'Mashrafi',
    age: 40,
    country: "Bangladesh"
});

console.log(user.name);
console.log(user.country);



// Enums
enum responsType { success, failure, unauthenticated, forbidden };

interface APIresponse<T>{
    status: number,
    type: responsType,
    data: T
}

const rresponse1: APIresponse<string> = {
    status: 200,
    type: responsType.success,
    data: 'this is test data....'
}

console.log(rresponse1)

// TS Tupes
// tuples is a concept and  to keep the data type serial constant.

let a = [21, 34, 'ldjfsl', { ts: "js" }];
let b: [number, string, object] = [4, 'dlfsl', { ts: 'ts mane typescript' }];

// b[2] = 5;