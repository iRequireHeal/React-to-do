const Task = ({task, deleteTask, toggleReady}) => {
    return (
        <div>
            <div className="itembox">
                <p className="vopros">{task.name}</p>
                <input className="korob" type="checkbox" checked={task.isReady} onChange={() => toggleReady(task.id)}/>
                <button className="deleteButton" onClick={() => deleteTask(task.id)}></button>
            </div>
        </div>
    )
}

export default Task