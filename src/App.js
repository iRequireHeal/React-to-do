import './App.css';
import {useState, useEffect} from "react";
import Task from "./components/Task/Task";
import Title from "./components/Title/Title"
import InputButtons from "./components/InputButtons/InputButtons"

function App() {
    const [taskList, setTaskList] = useState([
        {id: 0, name: "ti sobaka?", isReady: false},
        {id: 1, name: "a mojet ti suraka?", isReady: true},
        {id: 2, name: "ili ti monako?", isReady: false}
    ]);

    let filteredTasks = taskList;

    debugger
    return (
        <div className="App">
            <div className="conteiner">
                <Title></Title>
                <InputButtons setTaskList={setTaskList} taskList={taskList} filteredTasks={filteredTasks}/>
                {filteredTasks.map(task => <Task task={task} taskList={taskList} setTaskList={setTaskList}/>)}
            </div>
        </div>
    )
}

export default App;
