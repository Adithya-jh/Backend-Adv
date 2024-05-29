import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function useTodo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
      setTodos(res.data.todos);
      console.log(todos);
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodo();
  return (
    <>
      {/* <MyComponent />
      <MyComponent2 /> */}
      <div>
        {todos.map((todo) => {
          <div>
            {todo.title}
            <br />
            {todo.description}
          </div>;
        })}
      </div>
    </>
  );
}

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// const MyComponent = () => {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// };

//class based component
//this is how react was coded before hooks and functional componnets , untill 2019

// class MyComponent2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

export default App;
