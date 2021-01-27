import {useState} from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import Todos from './Todos';
import Footer from './Footer'
import {v4 as uuidv4} from 'uuid';
import { getTodos } from '../api/todos'
import './App.css';

let defaultTodos = [
    {
        id:uuidv4(),
        title:'Learn React',
        isDone:false
    },
    {
        id:uuidv4(),
        title:'React hook',
        isDone:false
    },
];

const TodoApp = () => {
    let [todos,setTodos] = useState(defaultTodos);
    let [inputValue,setInputValue] = useState('');

    getTodos().then(data=>console.log(data));

    const handleAddTodo = (e) =>{
        defaultTodos = [{
            id:uuidv4(),
            title:inputValue,
            isDone:false
        },...defaultTodos]
        setTodos(defaultTodos);
        setInputValue("")
    }

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const deletTodoItem = (id) => { 
        console.log(todos.filter(item=>item.id!==id))
        setTodos(todos.filter(item=>item.id!==id));
    }
    return (
        <div className = "app">
            <Header/>
            <AddToDo handleAddTodo={handleAddTodo} inputValue={inputValue} handleChange={handleChange}/>
            <Todos todos={todos} deleteItem = {deletTodoItem}/>
            <Footer things = {todos.length}/>
        </div>
    )
}
export default App;