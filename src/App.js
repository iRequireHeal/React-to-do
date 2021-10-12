import './App.css';
import {useState, useEffect} from "react";
import Task from "./components/Task";

function App() {
    const [taskName, setName] = useState("kukara4a");
    const [taskList, setTaskList] = useState([
        {id: 0, name: "ti sobaka?", isReady: false},
        {id: 1, name: "a mojet ti suraka?", isReady: true},
        {id: 2, name: "ili ti monako?", isReady: false}
    ]);

    const SHOW_ALL = "SHOW_ALL"
    const COMPLETED_TASKS = "COMPLETED_TASKS"
    const ACTIVE_TASKS = "ACTIVE_TASKS"

    const [taskFilter, setTaskFilter] = useState(SHOW_ALL)

    const toggleReady = (id) => {
        setTaskList(taskList.map(selectedTask => selectedTask.id === id ? {
            ...selectedTask,
            isReady: !selectedTask.isReady
        } : selectedTask))
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter(selectedTask => selectedTask.id !== id))
    }

    const addTask = () => {
        setTaskList([...taskList, {
            name: taskName,
            id: taskList.length + 1,
            isReady: false
        }])
    }

    const [tasks, setTasks] = useState(taskList.map(task => <Task task={task} deleteTask={deleteTask}
                                                                  toggleReady={toggleReady}/>))

    const renderTasks = () => {
        switch (taskFilter) {
            case SHOW_ALL:
                return taskList.map(task =>  <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>)
                break
            case COMPLETED_TASKS:
                return  taskList.filter(task => task.isReady === true).map(task => <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>)
                break
            case ACTIVE_TASKS:
                return  taskList.filter(task => task.isReady === false).map(task => <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>)
                break
        }
    }

    return (
        <div className="App">
            <div className="conteiner">
                <h1 className="title">это не тайтл</h1>
                <div className="inputButtons">
                    <input className="taskInput" value={taskName} onChange={(event) => setName(event.target.value)}/>
                    <button className="addButton" onClick={() => addTask()}>ADD</button>
                    <button className="buttons" onClick={() =>setTaskFilter(SHOW_ALL)}>ALL</button>
                    <button className="buttons" onClick={() =>setTaskFilter(COMPLETED_TASKS)}>Compleated()</button>
                    <button className="buttons" onClick={() =>setTaskFilter(ACTIVE_TASKS)}>Active</button>
                </div>
                <div>{renderTasks()}</div>
            </div>
        </div>
    )
}

export default App;
