import {useState,useEffect} from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import Todos from './Todos';
import Footer from './Footer'
import {v4 as uuidv4} from 'uuid';
import { getTodos } from '../api/todos'
import './App.css';

// let defaultTodos = [
//     {
//         id:uuidv4(),
//         title:'Learn React',
//         isDone:true,
//         isEdit:false
//     },
//     {
//         id:uuidv4(),
//         title:'React hook',
//         isDone:false,
//         isEdit:false
//     },
// ];
// console.log('defaultTodos',defaultTodos); 
let defaultTodos=[];
const App = () => {
    let [todos,setTodos] = useState(defaultTodos);//todoList array
    let [inputValue,setInputValue] = useState('');//input欄位的值 
    useEffect(()=>{
        const fetchData = async ()=>{
            defaultTodos = await getTodos();
            setTodos(defaultTodos);
        }
        fetchData();
    },[]);  
    
    //新增todo項目
    const handleAddTodo = (e) =>{
        setTodos(prevTodos=>[{
                id:uuidv4(),
                title:inputValue,
                isDone:false
            },...prevTodos]);
        setInputValue("")
    }

    //雙向綁定新增工作欄位值
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    //顯示編輯input
    const handleIsDone = (todos,callback) => {
        if(callback){//檢查是否為編輯狀態，如為編輯狀態則關閉編輯狀態
            callback();
        }
        todos.isDone = !todos.isDone;
        setTodos(prevTodos=>[...prevTodos]);
    }
    
    //刪除todo事項
    const deletTodoItem = (id) => { 
        setTodos(todos.filter(item=>item.id!==id));
    }
    
    //開啟關閉edit欄位
    const triggerEditColumn = (id) =>{
        setTodos(prevTodos=>{
            return prevTodos.map(todo=>{
                if(todo.id!==id)
                    return todo
                else if(todo.id === id && todo.isDone)
                    return {
                        ...todo,
                        isEdit:!todo.isEdit,
                        isDone:false
                    }
                else if(todo.id === id)
                    return {
                        ...todo,
                        isEdit:!todo.isEdit
                    }
            })
        });
    }

    //變更todo title
    const updateTodoTitle = (callback)=>{
        if(callback)
            callback();
        setTodos(todos);
    }
    return (
        <div className = "app">
            <Header/>
            <AddToDo handleAddTodo={handleAddTodo} inputValue={inputValue} handleChange={handleChange}/>
            <Todos todos={todos} deleteItem = {deletTodoItem} handleIsDone={handleIsDone} updateTodoTitle = {updateTodoTitle} triggerEditColumn={triggerEditColumn}/>
            <Footer things = {todos.length}/>
        </div>
    )
}
export default App;