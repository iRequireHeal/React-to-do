import './Task.css';

const Task = ({task, setTaskList, taskList}) => {

    const toggleReady = (id) => {
        setTaskList(taskList.map(selectedTask => selectedTask.id === id ? {
            ...selectedTask,
            isReady: !selectedTask.isReady
        } : selectedTask))
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter(selectedTask => selectedTask.id !== id))
    }

    return (
        <div>
            <div className="itembox">
                <p className="taskName">{task.name}</p>
                <input className="taskCheckbox" type="checkbox" checked={task.isReady} onChange={() => toggleReady(task.id)}/>
                <button className="deleteButton" onClick={() => deleteTask(task.id)}></button>
            </div>
        </div>
    )
}

export default Task