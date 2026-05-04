//Do While Loop
var i = 0;
do{
    i = i + 1;
    console.log(i);
}while(i < 5);

console.log("-----------------------------------------------------------------");


//While Loop
var j = 0;
while(j < 5){
    j = j + 1;
    console.log(j);
}

console.log("***");

let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(n);
    console.log(x);
}

console.log("----------------------------------------------------------------");


//For Loop
for(var i = 0; i < 5; i++){
    console.log("Value of i is: " + i);
}

console.log("----------------------------------------------------------------");


//For/In
var person = {firstName: "Valëza ", lastName: "Maqedonci ", age: "13 "};

var text = '';

var z;

for(z in person){
    text += person[z];
}
console.log(text);

console.log("----------------------------------------------------------------");


//For/Of
var names = ['Reis', 'Nehar', 'Bardh'];

var y;

for(y of names){
    console.log(y);
}


console.log("***");


var txt = "JavaScript";

var l;

for(l of txt){
    console.log(l);
}

console.log("----------------------------------------------------------------");