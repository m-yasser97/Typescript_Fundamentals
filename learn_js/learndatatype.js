//primitive data types
//number
let age = 35;
//string
let name = "John";
//boolean
let isLoggedIn = true;
let hasError = false;

let searchKeywords = ["apple", "banana", "cherry"];
let quantities = [10, 20, 30];
quantities.push("ten");
console.log(quantities);

let user = {
    name: "Mohamed",
    email: "mohamed@gmail.com",
    role: "admin",
    isLoggedIn: true
}

console.log("username", user.name);
user.age = 36;
console.log("age", user.age);
user.age = "thirty six";
console.log("age", user.age);


