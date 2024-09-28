import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo';
import './App.css'


function App() {
  const [todos,setTodo] = useState([]);
     
 fetch("http://localhost:3000/todos").then(async function(res){
  const json = await res.json();
  setTodo(json.todos);

 }) 
  console.log(todos);

  return (
    <>
      <div>
       <CreateTodo></CreateTodo>
       <Todo todos={todos}></Todo>
      
      </div>
     
    </>
  )
}

export default App
