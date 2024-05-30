import { useEffect, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import './App.css';

//isOnline custom hook

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
  });

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

//mouse pointer hook

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

function App() {
  // const { todos, loading } = useTodo();
  const online = useIsOnline();
  const mousePointer = useMousePointer();

  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  //so whenever a debounced value is changed then fetch from the server
  useEffect(() => {
    fetch('');
  }, [debouncedValue]);

  // if (loading) {
  //   return (
  //     <>
  //       <div>Loading....</div>
  //     </>
  //   );
  // }
  return (
    <>
      {/* <MyComponent />
      <MyComponent2 /> */}
      <div>
        {/* {todos.map((todo) => {
          <div>
            {todo.title}
            <br />
            {todo.description}
          </div>;
        })} */}
        {online ? <>yOU ARE ONLINE</> : <>ONPE</>}
        <br />
        Your mouse position is {mousePointer.x} {mousePointer.y}
        <br />
        <br />
        <br />
        <>
          DEBOUNCED VALUE IS {debouncedValue}
          <input type="text" onChange={(e) => setValue(e.target.value)} />
        </>
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
