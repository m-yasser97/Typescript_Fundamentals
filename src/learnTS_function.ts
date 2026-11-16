//Basic Function
    //Defining Function
    function openDemoShop()
    {
        console.log("Demo Shop is opened");
    }
    //Calling Function
    openDemoShop();

//Function with Parameters
function searchProduct(product:string)
{
    console.log("searching product " + product);
}

searchProduct("honey");

//Function Returning value
function calculateTotal(price:number, tax:number, discount:number = 1)
{
    console.log(price + tax);
    let total_price = price + tax - discount;
    return total_price;
}

let total = calculateTotal(100, 10);
console.log(total);

//Rest Parameters
function calculateCartTotal(... prices:number[])
{
    let total = 0;
    for(let price of prices)
    {
        total += price;
    }
    return total;
}

let total_cart=calculateCartTotal(100, 200, 300);
console.log(total_cart);

//Passing an Array to a Function
function printProducts(... products:string[])
{
    for (let product of products)
    {
        console.log("Product Name "+ product);
    }
    
}

printProducts("honey", "almonds", "cashews");

//Passing an Object to a Function
type product_obj= {name:string, price:number, category:string} 

function printProductProperties(product:product_obj)
{
    console.log(product.name);
}
printProductProperties({
    name:"Organic Juice",
    price:100,
    category:"Beverage"});

//Calling Function inside a Function

function formatProductName(name:string) : string
{
    return name.toUpperCase();
}

function processProduct(name:string) : void
{
    console.log("Processing product");
    let formattedName = formatProductName(name);
    console.log("Formatted name: " + formattedName);
}

processProduct("honey");

//Anonymous Function
let logMessage = function ()
{
    console.log("Test Step Executed Successfully");
}
console.log("new log message", logMessage);

setTimeout(function(){
    console.log("Test Step Executed Successfully");
}, 2000);

//Arrow Function
const formatCategory = (category: string): string => {
    return category.toLowerCase();
}
let actualCategory = "ORGANIC"
if (formatCategory(actualCategory) === "organic")
{
    console.log("Passed");
}

const doublePrice=(price:number):number=>price*2;

//Callback Function
function processProductCallback(name:string, action:Function):void
{
    console.log(name);
    action();
}
processProductCallback("Tea", function(){
    console.log("Processing product");
});

// //callback with arrow function
// processProductCallbackArrow("Tea", () => {
//     console.log("Processing product");
// });

// //callback returning value
// function processprice(price:number, operation:Function):void
// {
//     let result = operation(price);
//     console.log(result);
// }
// processprice(100, function(p:number)
// {
//     return p*0.9;
// });

//callback returning a value from main function
function processprice(price:number, operation:Function):number{
    let result = operation(price);
    return result*2;
}
let callbackPrice=processprice(100, (p:number):number=>{
    return p*0.9;
});
console.log(callbackPrice);


