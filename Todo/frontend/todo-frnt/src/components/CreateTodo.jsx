import { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <br />
      <input
        id="desc"
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDesc(value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: desc,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(async function (res) {
            const json = await res.json();
            alert('Todo added');
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

// export default CreateTodo;
