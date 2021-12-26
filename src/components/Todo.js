import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

function Todo(props) {
    const { todoId } = useParams()
    const [todo, setTodo] = useState(null)

    console.log(props)

    useEffect(() => {
        fetch(`http://localhost:5000/todos/${todoId}`)
         .then(res => res.json())
         .then(todo => setTodo(todo))
    }, [])

    return (
        <div>
          { todo === null ? <p>Loading...</p> : <p>{todo.title}</p>}
        </div>
    )
}

export default Todo
