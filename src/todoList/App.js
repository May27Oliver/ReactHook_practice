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
        isDone:true
    },
    {
        id:uuidv4(),
        title:'React hook',
        isDone:false
    },
];

const App = () => {
    let [todos,setTodos] = useState(defaultTodos);//todoList array
    let [inputValue,setInputValue] = useState('');//input欄位的值

    // getTodos().then(data=>console.log(data));
    
    //新增todo項目
    const handleAddTodo = (e) =>{
        setTodos(prevTodos=>{
            return [{
                id:uuidv4(),
                title:inputValue,
                isDone:false
            },...prevTodos]
        });
        setInputValue("")
    }

    //雙向綁定新增工作欄位值
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    //顯示編輯input
    const handleIsDone = (todos) => {
        todos.isDone = !todos.isDone;
        setTodos(prevTodos=>{
            return [
                ...prevTodos
            ]
        });
    }
    
    //刪除todo事項
    const deletTodoItem = (id) => { 
        setTodos(todos.filter(item=>item.id!==id));
    }
    
    //變更todo title
    const updateTodoTitle = (callback)=>{
        if(callback){
            callback();
        }
        setTodos(todos);
    }
    return (
        <div className = "app">
            <Header/>
            <AddToDo handleAddTodo={handleAddTodo} inputValue={inputValue} handleChange={handleChange}/>
            <Todos todos={todos} deleteItem = {deletTodoItem} handleIsDone={handleIsDone} updateTodoTitle={updateTodoTitle}/>
            <Footer things = {todos.length}/>
        </div>
    )
}
export default App;