import clsx from 'clsx';
import {useEffect} from 'react';

const AddToDo = ({handleAddTodo,inputValue,handleChange}) => {
    // useEffect(()=>{
    //     document.getElementById('add-todo-input').addEventListener('keypress',(e)=>{
    //         if(e.keyCode === 13){
    //           handleAddTodo(e);  
    //         }
    //     })
    // },[])
    return (
        <div className={clsx("add-todo",{active:inputValue.length > 0})}>
            <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
            <div className="add-todo-input">
                <input 
                    id="add-todo-input"
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="新增工作"
                />
            </div>
            <div className="add-todo-action">
                <button className="btn-reset btn-add" onClick={handleAddTodo}> 新增 </button>
            </div>
        </div>
    )
}

export default AddToDo;