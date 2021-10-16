import './InputButtons.css';
import {useState} from "react";

const InputButtons = ({setTaskList, taskList, filteredTasks}) => {

    const [taskName, setName] = useState("kukara4a");

    const addTask = () => {
        setTaskList([...taskList, {
            name: taskName,
            id: taskList.length + 1,
            isReady: false
        }])
    }

    const filterTasks = (filter) => {
        switch (filter) {
            case "ALL":
                return filteredTasks = taskList
                break
            case "Compleated":
                return filteredTasks = [...taskList.filter((task) => task.isReady)]
                break
            case "Active":
                return filteredTasks = [...taskList.filter((task) => !task.isReady)]
                break
        }
    }

    return (
        <div className="inputButtons">
            <input className="taskInput" value={taskName} onChange={(event) => setName(event.target.value)}/>
            <button className="addButton" onClick={() => addTask()}>ADD</button>
            <button className="button" onClick={() => filterTasks("ALL")}>ALL</button>
            <button className="button" onClick={() => filterTasks("Compleated")}>Compleated</button>
            <button className="button" onClick={() => filterTasks("Active")}>Active</button>
        </div>
    )
}

export default InputButtons