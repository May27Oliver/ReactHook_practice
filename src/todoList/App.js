import {useState,useEffect} from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import Todos from './Todos';
import Footer from './Footer'
import {v4 as uuidv4} from 'uuid';
import { getTodos,createTodo, updateTodo, deleteTodo } from '../api/todos'
import './App.css';
 
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
    
    //RESTFUL Api functions
    //新增todo項目
    const handleAddTodo = async() =>{
        if(inputValue.length!== 0){
                const res = await createTodo({
                title:inputValue,
                isDone:false
            });
            setTodos(prevTodos=>[{
                    title:inputValue,
                    isDone:false
            },...prevTodos]);
        }
        setInputValue("")
    }

    //雙向綁定新增工作欄位值
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    //顯示編輯input
    const handleIsDone = (id,callback) => {
        if(callback){//檢查是否為編輯狀態，如為編輯狀態則關閉編輯狀態
            callback();
        }
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id !== id){
                    return todo;
                }else if(todo.id === id && !todo.isEdit){
                    return {...todo,isDone:todo.isDone?false:true}
                }else if(todo.id === id && todo.isEdit){//編輯狀態不給isDone
                    return {...todo,isDone:false}
                }
            })
        );
    }
    
    //刪除todo事項
    const deletTodoItem = (id) => { 
        deleteTodo(id);
        setTodos(todos.filter(item=>item.id!==id));
    }
    
    //開啟關閉edit欄位
    const triggerEditColumn = (id,editStatus) =>{
        setTodos(prevTodos=>
            prevTodos.map(todo => {
                if(todo.id!==id)
                    return todo
                else if(todo.id === id && todo.isDone)
                    return {
                        ...todo,
                        isEdit:editStatus,
                        isDone:false
                    }
                else if(todo.id === id)
                    return {
                        ...todo,
                        isEdit:editStatus
                    }
            })
        );
    }

    //儲存edit變更
    const handleSave = (payload)=>{
        const {id ,title} = payload;
        updateTodo({
            id,
            title,
            isDone:false
        })
        setTodos(prevTodos => 
            prevTodos.map(todo =>{
                if(todo.id !== id)
                    return todo
                else if(todo.id === id)
                    return {...todo,title,isEdit:false}
            })
        )
    }

    return (
        <div className = "app">
            <Header/>
            <AddToDo handleAddTodo={handleAddTodo} inputValue={inputValue} handleChange={handleChange}/>
            <Todos todos={todos} deletTodoItem = {deletTodoItem} handleIsDone={handleIsDone} handleSave={handleSave} triggerEditColumn={triggerEditColumn}/>
            <Footer things = {todos.length}/>
        </div>
    )
}
export default App;