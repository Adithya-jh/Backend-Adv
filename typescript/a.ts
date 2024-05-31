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
