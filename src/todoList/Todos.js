import TaskItem from './TaskItem';

const Todos = ({todos,deleteItem,handleIsDone,updateTodoTitle,triggerEditColumn}) =>(
    <div className="todos">
        {todos.map((item)=>(<TaskItem key={item.id} deleteItem={deleteItem} handleIsDone={handleIsDone} todo={item} updateTodoTitle={updateTodoTitle} triggerEditColumn={triggerEditColumn}/>))}
    </div>
)

export default Todos;