import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo title="HI" description="hi" />
    </>
  );
}

interface TodoProps {
  title: string;
  description: string;
  age?: boolean;
}

function Todo(props: TodoProps) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}

//using types:

type User = {
  firstname: string;
  lastname: string;
  age: number;
};

//types allows us to do unions  , can define 2 types to an input

function greet(id: number | string) {
  id = '';
  id = 3; //id could be number or string
}

type numstrType = number | string;

function numstr(numst: numstrType) {
  // can have both num and str as type -> types allows us to do this , but interface cant
  numst = 3;
  numst = 'hi';
}

greet(2);
numstr('');

//types allows to do intersections:

type Employee = {
  name: string;
  age: number;
};

type Manager = {
  name: string;
  dept: string;
};

type TeamLead = Employee & Manager; // it has both the types

const teamLead: TeamLead = {
  name: 'Bob',
  age: 30,
  dept: 'IT',
};

export default App;
