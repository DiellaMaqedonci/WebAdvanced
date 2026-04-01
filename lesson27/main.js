function showMessage() {
    alert("This message is inside the function");
}
showMessage();


function sum(number1,number2) {
    return number1 + number2;
}
console.log(sum(25, 5));


function toCelsius(f){
    return (5/9) * (f-32);
}
console.log("54 Fahrenheit is equal to " + toCelsius(54) + " Celcius");


function dsFunction(){
    var localVar = "Digital School";
    alert(localVar)
}
dsFunction();


function toSeconds(min){
    return (min) * 60;
}
console.log("10 minutes is equal to " + toSeconds(10) + " Seconds");

//Objects
var car = {
    name: "Mercedes",
    color: "Black",
    year: 2020,
    kilometers: 0,
    startEngine: function(){
        alert("Vrooom!")
    },
    
    get getKilometers(){
        return this.kilometers;
    },

    set setKilometers(km){
        this.kilometers = km;
    }
}
alert(car.name);
car.startEngine();

console.log(car.getKilometers);
car.kilometers = 100;
console.log(car.getKilometers);


var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";


computer.type = function(){
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};


alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);


//Konstruktori
function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}


var computer1 = new Computer("MacBook Pro", "M1 8core", "8GB", "5600M GPU");
var computer2 = new Computer("Acer", "Intel core i3", "4GB", "Integrated");