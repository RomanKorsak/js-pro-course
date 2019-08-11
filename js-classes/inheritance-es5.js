function Car(name, model, year, color, maxSpeed, fuelCapacit = 60, fuelConsumption = 10){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacit = fuelCapacit;
    this.fuelConsumption = fuelConsumption;
}
Car.prototype.getFullName = function(){
    console.log(this.name + " " + this.model);
}
Car.prototype.getAge = function(){
    console.log(2019 - this.year);
}
Car.prototype.changeColor = function(newColor){
    if(this.color === newColor){
        console.log("Машина уже имеет такой цвет!")
    }else{
        console.log("Цвет машины изменён на " + newColor);
        this.color = newColor;
    }
}
Car.prototype.calculateWay = function(kilometers, fuel){
    if(fuel < 10){
        console.log("Низкий уровень топлива! Нужно заправиться!")
    }
    console.log("Минимальное время нахождения в пути (часов) = " + kilometers / this.maxSpeed);

    var enoughFuelOrNot = (((kilometers/100) * this.fuelConsumption)-fuel); //формула достаточно ли топлива для поездки
    var numOfRefuel = (((kilometers/100) * this.fuelConsumption)-fuel)/this.fuelCapacit; //формула кол-ва заправок
    
    if(enoughFuelOrNot <= 0){
        console.log("Заправляться не нужно!")
    }
    else if(numOfRefuel){
        console.log("В пути Вам нужно будет заправиться " + Math.ceil(numOfRefuel) + " раз(а)!");
    }
}

//BMW FACTORY
function BMW(name, model, year, color, maxSpeed, fuelCapacit = 60, fuelConsumption = 10, modelOfEngine){
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption);
    this.modelOfEngine = modelOfEngine;
}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = Car;

BMW.prototype.whatModelOfEngineYouGot = function(){
    console.log("I got " + this.modelOfEngine + " engine!");
}


//Mercedes FACTORY
function Mercedes(name, model, year, color, maxSpeed, fuelCapacit = 60, fuelConsumption = 10, modification = "Long"){
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption)
    this.modification = modification;
}
Mercedes.prototype = Object.create(Car.prototype);
Mercedes.prototype.constructor = Car;

Mercedes.prototype.whatIsYourModification = function(){
    console.log("My modification is " + this.modification + " !");
}


// Audi FACTORY
function Audi(name, model, year, color, maxSpeed, fuelCapacit = 60, fuelConsumption = 10, quattro = 'Yes'){
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption)
    this.quattro = quattro;
}
Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Car;

Audi.prototype.quattroOrNot = function(){
    console.log(this.quattro + '!');
}


//testing
let bmw = new BMW('BMW', 'm5', 2019, 'SAN MARINO BLAU', 250, 90, 32, 'V8');
let mercedes = new Mercedes('Mercedes', 's600', 2017, 'black', 250, 90, 35, 'Long');
let audi = new Audi('Audi', 'rs7', 2018, 'grey', 250, 85, 25, 'Yes');

console.log(bmw);
console.log(mercedes);
console.log(audi);