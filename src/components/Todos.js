import { useEffect } from "react";

function Todos({ todos }) {

  useEffect(() => {
    // componentDidMount
    console.log('todos mounted')
    return () => {
      // componentWillUnmount
      console.log('todos unmounted')
    }
  }, [])
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
