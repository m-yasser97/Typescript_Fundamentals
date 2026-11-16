//getting length of a string
let productTitle = "Organic Almonds";
console.log(productTitle.length);
if(productTitle.length > 0){
    console.log("Product title is displayed");
}

//Changing case of a string
let searchText = "Organic Almonds";
console.log(searchText.toLowerCase());
console.log(searchText.toUpperCase());

let expected = "organic almonds";
let actual = "Organic Almonds";

if(actual.toLowerCase() === expected.toLowerCase()){
    console.log("Product is verified");
}

//checking if a string contains a text
let url = "https://www.qa-cart.com/my-account";
console.log(url.includes("account"));

//Extracting part of a string
let orderMessage = "Your order #1234567890 has been placed";
//orderMessage.substring(11, 21);
console.log(orderMessage.substring(11, 21));
console.log(orderMessage.slice(5));
console.log(orderMessage.slice(-5));

//Replacing Texts
let product: string = "Organic-Almonds";
console.log("replaced text", product.replace("-", " "));

//Splitting a string
let categories: string = "Electronics,Clothing,Books";
let categoryArray=categories.split(",");
console.log(categoryArray);

//Removing Extra spaces
let username1 = "   admin   ";
console.log("username1", username1.trim());

//Accessing characters in a string
let word = "test";
console.log(word[0]);

//Template Strings
let product1 = "Organice Almonds";
let price: number = 25;
console.log(`Product: ${product1}, Price: ${price}`);

//Using Backslash () in Strings
let message = "User said \"Login failed\"";
let message2 = 'user said "Login failed"';
console.log(message);
console.log(message2);