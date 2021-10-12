function Task(task, onChangeHandler){
    <div>
        <div className="itembox">
            <p className="vopros">{task.task}</p>
            <input className="korob" type="checkbox" onChange={onChangeHandler}/>
            <button className="deleteButton"
                    onClick={() => setTaskList(taskList.filter(selectedTask => selectedTask.id !== tsk.id))}></button>
        </div>
    </div>
}