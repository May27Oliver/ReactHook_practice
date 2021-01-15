import {useState} from 'react';

const TaskItem = ()=>(
    <div className="task-item">
        <div className="task-item-checked">
            <span className="icon icon-checked">
            {/* icon-check-circle */}
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#ff6600" fill-rule="evenodd"
                    d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9">
                    </path>
                </svg>
            </span>
        </div>
    
        <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
            <input className="task-item-body-input" type="text" placeholder="新增工作" />
        </div>
        <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
        </div>
    </div>
)

export default TaskItem;