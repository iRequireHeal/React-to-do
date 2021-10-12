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
    const [taskFilter, setTaskFilter] = useState(taskList)

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

    const[tasks, setTasks] = useState(taskList.map(task => <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>))

    const compleatedFilter = () => {
        setTasks(taskList.map(task => task.isReady === true ?
            <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/> : null))
    }

    const allFilter = () => {
        setTasks(taskList.map(task => <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>))
    }
    const activeFilter = () => {
        setTasks(taskList.map(task => task.isReady === false ?
            <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/> : null))
    }

    return (
        <div className="App">
            <div className="conteiner">
                <h1 className="title">это не тайтл</h1>
                <div className="inputButtons">
                    <input className="taskInput" value={taskName} onChange={(event) => setName(event.target.value)}/>
                    <button className="addButton" onClick={() => addTask()}>ADD</button>
                    <button className="buttons" onClick={() =>allFilter()}>ALL</button>
                    <button className="buttons" onClick={() =>compleatedFilter()}>Compleated()</button>
                    <button className="buttons" onClick={() =>activeFilter()}>Active</button>
                </div>
                <div>{tasks}</div>
            </div>
        </div>
    )
}

export default App;
