import {useEffect, useState} from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"




export default function App() {
  //create form
  //create className for form  
  //make className for row
  //put label inside row and add input
  //link up label on the input using htmlFor
  //add in button to add things, with className
  // add in header with className
  //can only return one element at the top level in a component,however you can use a no tag open and closing bracket to solve it
  //render out list with ul,li,label and input
  //add button for deleting items
  //add use state to make things interactive, takes a default value, import it
  //returns an array, first param is value of item and second param is function for updating value
  //useState is immutable
  //to change value, have to call function(setNewItem) and pass a value to update to a new value by rerendering entire component
  //update value of input when it changes by going into input and saying the value of input is whatver the new item is
  //add eventlistner into input, onChange makes it that every time a key is clicked it is called, call setnewitem using e.target.value which  gets value of new input and settting it as new item value
  //add another eventlistener(handlesubmit) onto form, create new function. e.preventDefualt prevents page from refreshing
  //create a new todo using another piece of state
  //have to pass function on setTodos to modify existing data
  //loop through todos and render them using map
  //use todos.map to return array and return an li element
  //use todo.title and add check propery in input to completed
  //if you are returning an array of elements in react, each element at the top level neeeds a key property in case something needs to be modified
  //setNewItem to empty arrray sp search bar clears after something is added
  //add onChange= { e => toggleTodo(todo.id, e.target.checked to input, and create function to determmine if item is currenlty checked
  //update todos to change id that passes in function toggleTodo to be completed
  //use currentTodos and map to check if its the todo that is currenlty trying to toggle and if todo.id is equal to current id then its the one to change
  // return todo if ids dont match
  // to add delete button do similar thing, use filter to check with todos you have or havent done
  //add onCLick eventlistener and delete function to delete button 
  //to identify if theres no todos, do something called short circuiting, {todos.length === 0 && "No Todos"}
  //break different parts into react components
  //move form into new jsx window
  //move over handesubmit functon bc it includes it
  //move over useSTate for new todo items and import it 
 // import Newtodoform into app.jsx
  //create function to add todo into app because todo state is there
  // then call addtodo function into handlesubmit
  // check to see if new item in NTF has a value
  // props allow you to pass info to custom components
  //pass addtodo prop to NEwtodoform with onSubmit
  //add props object to NTF function and props.submit which gices us what we pass in onSubmit
  //move unordered list into own component Todolist
  //render Todolist component in place of unordered list
  //get all todos in TodoList component
  //add todos into rendered TodoLIst
  //add todos to rendered TodoLIst
  //break part of TodoList component into another component,TodoItem
  //pass in completed,id, and title into TodoItem
  //remove todo from completed and title param in input
  //return TodoItem inside of TodoList Component
  //TodoItem takes in all props of todo, and pass them a key because it is being rendered in an array
  //to clean up props, pass all props of todo with {...todo}
  //pASS TOGGLETodo and deleteTodo into TodoItem component and in todos.map
  //pass down toddleTodo and deleteTodo into rendered TodoList 
  // add listner so everything is stored using hook useEffect
  // useEffect says run the function every time the object in arrays change
  //code goes to local storage and setItemto json.stringify
  //useEffect says any time todos change its called
  //to get info from ,localstorage call usestate
  //get localvalue and do if statement to see if theres a value
  //lhooks have to be called at top of function 

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS", )
    if (localValue == null) return []

    return JSON.parse(localValue)
  })



  useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo (title) {
    setTodos ((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }



  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <NewTodoForm onSubmit= {addTodo}/>
  <h1 className= "header"> Todo List</h1>
  <TodoList todos = {todos} toggleTodo= {toggleTodo} deleteTodo= {deleteTodo}/>
  </>
  )
}