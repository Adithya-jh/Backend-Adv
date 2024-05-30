import axios from 'axios';
import { useEffect, useState } from 'react';

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
      console.log(todos);
    });
  }, []);

  return { todos, loading };
}
