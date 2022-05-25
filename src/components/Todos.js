import { useState, useEffect } from 'react'

const Todos = ({ todos }) => {
  const[ todos2, setTodos2] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/todos')
    .then(res => res.json())
    .then(todos => {
      setTodos2(todos)
      console.log(todos)
    })
    return () => {
      //...
      console.log('component will unmount')
    }
  }, [])

  return (
    <ul>
        {todos2.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
}

export default Todos