import './App.css';
import {useState} from "react";
import Task from "./components/Task";

function App() {
    const [taskName, setName] = useState("kukara4a");
    const [taskList, setTaskList] = useState([
        {id: 0, name: "ti suka?", isReady: false},
        {id: 1, name: "a mojet ti sucara?", isReady: true},
        {id: 2, name: "ili ti suchenok?", isReady: false}
    ]);

    const toggleReady = (id) => {
        setTaskList(taskList.map(selectedTask => selectedTask.id === id ? {
            ...selectedTask,
            isReady: !selectedTask.isReady
        } : selectedTask))
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter(selectedTask => selectedTask.id !== id))
    }

    const tasks = taskList.map(task => <Task task={task} deleteTask={deleteTask} toggleReady={toggleReady}/>)


    return (
        <div className="App">
            <div className="conteiner">
                <h1 className="title">это не тайтл</h1>
                <div className="inputButtons">
                    <input className="taskInput" value={taskName} onChange={(event) => setName(event.target.value)}/>
                    <button className="addButton" onClick={() => setTaskList([...taskList, {
                        name: taskName,
                        id: taskList.length + 1,
                        isReady: false
                    }])}>ADD
                    </button>
                    <button className="buttons">ALL</button>
                    <button className="buttons">Compleated</button>
                    <button className="buttons">Active</button>
                </div>
                <div>{tasks}</div>
            </div>
        </div>
    )
}

export default App;
