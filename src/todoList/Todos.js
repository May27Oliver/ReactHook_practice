import {useState} from 'react';
import TaskItem from './TaskItem';

const Todos = ({todos,deleteItem,handleIsDone,updateTodoTitle}) =>(
    <div className="todos">
        {todos.map((item,index)=>(<TaskItem index={index} pk={item.id} key={item.id} isDone={item.isDone} deleteItem={deleteItem} handleIsDone={handleIsDone} todo={item} updateTodoTitle={updateTodoTitle}/>))}
    </div>
)

export default Todos;