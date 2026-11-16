for (let i:number = 0; i < 5; i++) {    
    if(i===2){
        continue;
    }
    console.log(i);
}

let browsers:string[] = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
for(let i:number = 0; i < browsers.length; i++){
    console.log(browsers[i]);
}

for (let browser of browsers){
    console.log(browser);
}

let retries : number = 3;
while(retries > 0){
    console.log("Retrying...");
    retries--;
}

let count : number = 0;
do{
    console.log("run once..");
    count++;
}while(count < 1);
