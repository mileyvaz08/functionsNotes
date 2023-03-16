//Parameters are placeholder variables that allow
//us to reuse functions

//Ex. 1: Without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();

//Ex. 2; With Parameter
function printText(text){  //text is a parameter
    console.log(text);
}

printText("I love Ellie");
printText("I love autumn and kylene so muchchch");


//Return statements provide values to the rest of
//the program. Returned values can be used by other
//parts of the code. Console.log values cannot be
//used by other lines of code.

//Example 3: Without Return
function double(num){
    console.log(num*2);
}

double(2);
double(7);

//Ex. 4: With Return
function triple(num){
    return (num*3);
}

// console.log(triple(7));
let answer = triple(12);
answer -=2;
console.log(answer);

//Ex.5 Another return
function loseLife(lives){
    return (lives - 1);
}
let totalLives = 10;
totalLives = loseLife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding (value of variable) is visible.
//Global scope;created outside all {} and accessible everywhere
//Local scope;created inside a specific {} and only accessible inside those {}

//Example 6: Different scopes

let x = 10; //global x
if (true){
    let y= 20; //local y
    let z= 30; //local z
    console.log(x+y+z);
}
console.log(x); //Y AND Z ARE NOT ACCESSIBLE OUTSIDE {}

//Example 7: no naming conflict
function half(n){
    return (n/2);
}

let n = 10; //global n
console.log(half(100));
console.log(n); //since there is no {} or function call, use global n
