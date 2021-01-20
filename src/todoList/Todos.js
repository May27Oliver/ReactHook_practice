import {useState} from 'react';
import TaskItem from './TaskItem';

const Todos = ({todos,deleteItem}) =>(
    <div className="todos">
        {todos.map((item,index)=>(<TaskItem index={index} pk={item.id} key={item.id} title={item.title} isDone={item.isDone} deleteItem={deleteItem}/>))}
    </div>
)

export default Todos;