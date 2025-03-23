import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import {useState} from "react"

function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits',
    'Learn React'
  ])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }
  
  return (
    <>
     <TodoInput handleAddTodos={handleAddTodos}/>
     <TodoList todos={todos}/>
    </>
  )
}

export default App
