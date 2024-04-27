import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import { ToDoPage } from './ToDoPage'
import { EditTodo } from './EditTodo'
uuidv4()
export const ToDoWrapper = () => {
  const [todos,setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos,{id:uuidv4(),task: todo, completed: false,isEditing:false}])
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}:todo));
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const EditToDoForm = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }
  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
        todo.isEditing? (<EditTodo editTodo={editTask} task={todo} />):(  <ToDoPage task ={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} EditToDoForm={EditToDoForm}/>)
       
      ))}
      
    </>
  )
}
