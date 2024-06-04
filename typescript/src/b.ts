//common use case with express with status codes

// const app = express();
import express from 'express'; //use imports in express
const app = express();

enum ResponseStatus {
  success = 200,
  notfound = 404,
  error = 500,
}

app.get('/', (res: any, req: any) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.notfound).json({}); //easily updatable
  }

  res.json({});
});

//GENERICS -> IMP
// generics enables you to create component that work with any datatype while still providing compile time type safety

function identity<T>(arg: T) {
  // by this we make it generic
  //here the arg could take string or number ,-> but on compile time it dont know whether it is string or number
  return arg;
}

let output1 = identity<string>('dd');
let output2 = identity<number>(2);

output1.toUpperCase();
