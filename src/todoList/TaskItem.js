import {useState} from 'react';
import clsx from 'clsx';

const TaskItem = ({pk,deletTodoItem,handleIsDone,todo,triggerEditColumn,handleSave})=>{
    const [tempTitle,setTempTitle] = useState(todo.title);
    //雙向綁定title的即時修正
    const handleEditChange=(e)=>{
        setTempTitle(e.target.value);
    }

    //因為不希望isDone的項目名稱被修改，所以做個判斷是否再修改狀態的判斷
    const checkIsDoneCantModify = () => {
        if(todo.isEdit){//如果select啟動，代表修改模式正出現，isDone必須關閉修改模式
            triggerEditColumn(todo,false)
        }
    }
    const handleKeyDown= e =>{
        if(e.keyCode=== 13 && tempTitle.length!== 0)
            handleSave({id:todo.id,title:tempTitle});
        else if(e.keyCode === 27){
            triggerEditColumn(todo.id,false)
            setTempTitle(todo.title)
        }
    }
    return (
        <div className={clsx("task-item",{done:todo.isDone,edit:todo.isEdit})}>
            {/* task-item 要有done 和 edit兩個判斷 */}
            <div className="task-item-checked">
                <span className="icon icon-checked" onDoubleClick={()=>handleIsDone(todo.id,checkIsDoneCantModify)}>
                {/* icon-check-circle */}
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ff6600" fillRule="evenodd"
                        d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9">
                        </path>
                    </svg>
                </span>
            </div>
        
            <div className="task-item-body">
                <span className="task-item-body-text" onDoubleClick={()=>{
                    triggerEditColumn(todo.id,true)
                }}>{todo.title}</span>
                <input className="task-item-body-input" type="text" placeholder="新增工作" 
                    value={tempTitle} 
                    onChange={handleEditChange}
                    onDoubleClick={()=>triggerEditColumn(todo.id,false)}
                    onKeyDown={(e)=>handleKeyDown(e)}
                />
            </div>
            <div className="task-item-action">
                <button className="btn-reset btn-destroy icon" onClick={()=>deletTodoItem(pk)}> </button>
            </div>
        </div>
    )
}

export default TaskItem;