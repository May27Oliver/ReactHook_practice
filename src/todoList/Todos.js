import TaskItem from './TaskItem';

const Todos = ({todos,deleteItem,handleIsDone,triggerEditColumn,handleSave}) =>(
    <div className="todos">
        {todos.map((item)=>(<TaskItem key={item.id} deleteItem={deleteItem} handleSave={handleSave} handleIsDone={handleIsDone} todo={item} triggerEditColumn={triggerEditColumn}/>))}
    </div>
)

export default Todos;