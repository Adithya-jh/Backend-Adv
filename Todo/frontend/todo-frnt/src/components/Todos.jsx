export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h2>{todo.title}</h2>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? 'Completed' : 'Not Completed'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
