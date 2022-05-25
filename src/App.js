import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Todo from './components/Todo'
import NotFound from './components/NotFound'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'


const App = () => {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  // const [currentComp, setCurrentComp] = useState("todoform")

  const onAddTodo = (todoTitle) => {
    setTodos([...todos, { id , title: todoTitle}])
    setId(id + 1)
  }

  // const handleComponentChange = (comp) => {
  //   setCurrentComp(comp)
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Link to=""><button>Todos</button></Link>
        <Link to="todoform"><button>TodoForm</button></Link>
        <Routes>
          <Route path="/" element={<Todos todos={todos} />} />
          <Route path="/todos/:todoId" element={<Todo />} />
          <Route path="/todoform" element={<TodoForm onAddTodo={onAddTodo} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* { currentComp === "todos" && <Todos todos={todos} /> }
        { currentComp === "todoform" && <TodoForm onAddTodo={onAddTodo} /> } */}
      </div>
    </BrowserRouter>
  );
};

export default App;
