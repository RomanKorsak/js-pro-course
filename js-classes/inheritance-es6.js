class Car{
    constructor(name, model, year, color, maxSpeed, fuelCapacit = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacit = fuelCapacit;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName(){
        console.log(this.name + " " + this.model);
    }
    getAge(){
        let Year = new Date().getFullYear()
        console.log(Year - this.year);
    }
    newAge(value){
        this.year = value;
    }

    changeColor(newColor){
        if(this.color === newColor){
            console.log("Машина уже имеет такой цвет!")
        }else{
            console.log("Цвет машины изменён на " + newColor);
            this.color = newColor;
        }
    }
    calculateWay(kilometers, fuel){
        if(fuel < 10){
            console.log("Низкий уровень топлива! Нужно заправиться!")
        }
        console.log("Минимальное время нахождения в пути (часов) = " + kilometers / this.maxSpeed);
    
        let enoughFuelOrNot = (((kilometers/100) * this.fuelConsumption)-fuel); //формула достаточно ли топлива для поездки
        let numOfRefuel = (((kilometers/100) * this.fuelConsumption)-fuel)/this.fuelCapacit; //формула кол-ва заправок
        
        if(enoughFuelOrNot <= 0){
            console.log("Заправляться не нужно!")
        }
        else if(numOfRefuel){
            console.log("В пути Вам нужно будет заправиться " + Math.ceil(numOfRefuel) + " раз(а)!");
        }
    }
}


//BMW FACTORY
class BMWFactory extends Car {
    constructor (name, model, year, color, maxSpeed, modelOfEngine, fuelCapacit = 60, fuelConsumption = 10){     //(model, engine, year)
    super(name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption);
    this.modelOfEngine = modelOfEngine;
    }
    whatModelOfEngineYouGot(){
        console.log("I got " + this.modelOfEngine + " engine!");
    }
}



//Mercedes FACTORY
class MercedesFactory extends Car{
    constructor(name, model, year, color, maxSpeed, modification, fuelCapacit = 60, fuelConsumption = 10){
    super(name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption);
    this.modification = modification;
    }
    whatIsYourModification(){
        console.log("My modification is " + this.modification + " !");
    }
}


// Audi FACTORY
class AudiFactory extends Car{
    constructor (name, model, year, color, maxSpeed, leatherSeats, colorOfLeatherSeats, fuelCapacit = 60, fuelConsumption = 10){
    super(name, model, year, color, maxSpeed, fuelCapacit, fuelConsumption);
    this.leatherSeats = leatherSeats;
    this.colorOfLeatherSeats = colorOfLeatherSeats;
    }
    whatIsYourColorOfLeatherSeats(){
        console.log("Color of my leather seats is " + this.colorOfLeatherSeats + " !");
    }
}



//testing
let newCar = new Car('Lexus', 'LC600', 'black', 2018, 250, 90, 25);  //создаём через Car
let bmw = new BMWFactory('BMW', 'M5', 2017, 'black', 280, 'V8', 85, 18);// через BMW
let mercedes = new MercedesFactory('Mercedes-Benz', 'S500', 2018, 'gray', 250, 'Long', 90, 21); // через Mercedes
let audi = new AudiFactory('Audi', 'A6', 2015, 'blue', 260, 'yes', 'brown', 65, 12); // через Audi

console.log(newCar);
console.log(bmw);
console.log(mercedes);
console.log(audi);