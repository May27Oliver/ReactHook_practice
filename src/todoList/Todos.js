import TaskItem from './TaskItem';

const Todos = ({todos,deletTodoItem,handleIsDone,triggerEditColumn,handleSave}) =>(
    <div className="todos">
        {todos.map((item)=>(<TaskItem key={item.id} pk={item.id} deletTodoItem={deletTodoItem} handleSave={handleSave} handleIsDone={handleIsDone} todo={item} triggerEditColumn={triggerEditColumn}/>))}
    </div>
)

export default Todos;