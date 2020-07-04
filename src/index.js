/**
 * Create the class Caclculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

// create a class calculator
// --> 3 methods : ***
// creating a class
// creating a property set by default in the constructor
// creating 3 methods

const equals = document.querySelector("#calculator .eval");

// create the calculator class
class Calculator {
  constructor() {
    // default empty memory array
    this._memory = [];
  }

  history(value) {
    // Setting the euqlas method value in history
    this._memory.push(value);
  }

  equals(value) {
    // 1st it calculates what is inside screen
    // Get the screen value
    const result = eval(value);
    // 2hd it sets the value in the memory array
    this.history(result);
  }
  clear() {
    this._memory = [];
  }
  giveLastResult() {
    // Get the last item so that i can store it
    return this._memory[this._memory.length - 1];
  }
}

// fetch the screen value -->
// attach a listener to the equals button -->

const myCalculator = new Calculator();
const calculatorScreen = document.querySelector("#calculator .screen");

// LISTEN TO THE EQUAL CLICK
equals.addEventListener("click", function() {
  /*myCalculator.equals();*/
  const calculatorScreenValue = calculatorScreen.innerHTML;
  myCalculator.equals(calculatorScreenValue);
  const lastResult = myCalculator.giveLastResult();
  calculatorScreen.innerHTML = lastResult;
});

// Print the input value when i enter inputs

// executing the history method of myCalculator when equals is clicked

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/

function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach(key => {
  if (key.innerText !== "=") {
    key.addEventListener("click", e => print(e.target.innerText));
  }
});

document.querySelector("#calculator .clear").addEventListener("click", () => {
  calculatorScreen.innerHTML = "";
  myCalculator.clear();
});

/*
class Student {
  constructor(name, lastname) {
    this._name = name;
    this._lastname = lastname;
    this._age = 0;
  }
}

/*const obj1 = {
  name: "aria",
  lastname: "gr"
};

const obj2 = {
  name: "felix",
  lastname: "dortmund"
};

const obj3 = {
  name: "alfredo",
  lastname: "pasta"
};

const obj1 = new Student("aria", "gr");
const obj2 = new Student("felix", "dortmund");
const obj3 = new Student("alfredo", "pasta");
const objArray = [obj1, obj2, obj3];

for (var value of objArray) {
  if (value._name === "felix" && value._lastname === "dortmund")
    console.log(value);
  else continue;
}
*/

/*function concatenatesNames(firstname, lastname) {
  return firstname + " " + lastname;
}*/

// We use a return, when the function is making a process and you want to store the result of that process
