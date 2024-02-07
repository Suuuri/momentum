const calcultor1 = {
    name: "Jiwon's Calculator",
    plus: function plus(a, b){
        console.log(a + b);
    },
    minus: function minus(a, b){
        console.log(a - b);
    },
    divide: function divide(a, b){
        console.log(a / b);
    },
    multiply: function multiply(a, b){
        console.log(a * b);
    },
    powerof: function powerof(a, b){
        console.log(a ** b);
    },
};

calcultor1.plus(5, 1);
calcultor1.minus(3, 2);
calcultor1.divide(4, 7);
calcultor1.multiply(5, 2);
calcultor1.powerof(2, 8);

console.log("***************************************************************");

const calcultor2 = {
    name: "Jiwon's Calculator",
    plus: function plus(a, b){
        return a + b;
    },
    minus: function minus(a, b){
        return a - b;
    },
    divide: function divide(a, b){
        return a / b;
    },
    multiply: function multiply(a, b){
        return a * b;
    },
    powerof: function powerof(a, b){
        return a ** b;
    },
};

const plusResult = calcultor2.plus(2, 3);
console.log(plusResult); 

const minusResult = calcultor2.minus(3, 2);
console.log(minusResult);

const divResult = calcultor2.divide(6, 2);
console.log(divResult);

const multiResult = calcultor2.multiply(2, 3);
console.log(multiResult);

const powerOfResult = calcultor2.powerof(2, 3);
console.log(powerOfResult);




const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);



const age1 = parseInt(prompt("How old are you?"));

if(isNaN(age1) || age1 < 0){
    console.log("Please write a real positive number.");
} else if (age1 < 18){
    console.log("you are too young.");
} else if(age1 >= 18 && age1 <= 50) {
    console.log("you can drink!");
} else if (age1 >= 51 && age1 <= 80){
    console.log("you should exercise");
} else if(age1 === 100){
    console.log("wow you are wise!");
} else if(age > 80) {
    console.log("you can do whatever you want.")
} 

