//primitive data types
//number
let age: number = 35;
//string
let username: string = "John";
//boolean
let isLoggedIn: boolean = true;
let hasError: boolean = false;

let searchKeywords: string[] = ["apple", "banana", "cherry"];
let quantities: number[] = [10, 20, 30];
//quantities.push("ten");
quantities.push(40);
console.log(quantities);


let user: {
    name: string,
    email: string,
    role: string,
    isLoggedIn: boolean
    age?: number
} = 
{
    name: "Mohamed",
    email: "mohamed@gmail.com",
    role: "admin",
    isLoggedIn: true,
}

let config:{
    baseURL:string, 
    timeout:number
}=
{
    baseURL:"https://qa-cart.com",
    timeout: 5000,
}
console.log(config);

let testUser:{
    name: string,
    role: string[]
} = {
    name: "Mohamed",
    role: ["admin", "user"]
}

