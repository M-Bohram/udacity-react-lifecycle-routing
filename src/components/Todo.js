import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Todo = () => {
    const { todoId } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/todos/'+ todoId)
        .then(res => res.json())
        .then(todo => {
          console.log(todo)
        })
        
      }, [])

  return (
    <div>Todo</div>
  )
}

export default Todo