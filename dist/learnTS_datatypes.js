"use strict";
//primitive data types
//number
let age = 35;
//string
let username = "John";
//boolean
let isLoggedIn = true;
let hasError = false;
let searchKeywords = ["apple", "banana", "cherry"];
let quantities = [10, 20, 30];
//quantities.push("ten");
quantities.push(40);
console.log(quantities);
let user = {
    name: "Mohamed",
    email: "mohamed@gmail.com",
    role: "admin",
    isLoggedIn: true,
};
let config = {
    baseURL: "https://qa-cart.com",
    timeout: 5000,
};
console.log(config);
let testUser = {
    name: "Mohamed",
    role: ["admin", "user"]
};
