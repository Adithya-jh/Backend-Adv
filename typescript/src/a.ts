const x: number = 1;
console.log(x);

function greet(fn: string) {
  console.log('Hello' + fn);
}

greet('World');

function sum(a: number, b: number): number {
  //get 2 numbers as input and it returns a number -> we dont want to explicitly give a return type[its an optional]
  return a + b;
}

sum(2, 3);

//creating a function that takes another function as a input and run it after 1s

function runAfter1s(fn: () => void) {
  //this is how we initialize function -> it returns void[nothing]
  setTimeout(fn, 1000);
}

runAfter1s(function () {
  console.log('HI THERE');
});

//using interface

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; //which means email is optional , user  can have email or not
}

const isLegal = (user: User) => {
  //when we have like a object -> w use interfaces
  if (user.age >= 18) {
    return true;
  }
  return false;
};

isLegal({
  firstName: 'J',
  lastName: 'A',
  age: 20,
});

//using enums: enums allows to do the named constants

type keyType = 'up' | 'down' | 'right' | 'left'; //we can give like this but enums are prefered over this

enum Direction { //definition of enum
  up,
  down,
  right,
  left,
}

const gameWOenums = (direction: keyType) => {
  //not using using enums -> we use types
  console.log(direction);
};

const gameWithENUMS = (direction: Direction) => {
  //using enums
  console.log(direction);
  if (direction == Direction.up) {
  }
};

gameWithENUMS(Direction.up);
gameWithENUMS(Direction.down); //you can give only u have defined
// gameWithENUMS("hdh") -> this gives the error
