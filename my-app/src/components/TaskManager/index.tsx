import React, {useState, useEffect} from "react"
import { Task } from "../../models/taskManager"
import InputField from "./InputField"
import TasksList from "./TasksList"
import "./styles.css"

const TaskManager:React.FC = () => {
    const [task, setTask] = useState<string>("")
    const [taskList, setTaskList] = useState<Task[]>([])

    const handleAddTask = (taskName: string) => {
        setTaskList([...taskList, {
            id: Date.now(),
            name: taskName,
            isDone: false
        }])
    }

    useEffect(() => {
        console.log(taskList)
    },[taskList])

    return (
        <div className="container">
            <div className="title">Task Manager</div>
            <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
            <TasksList taskList = {taskList} />
        </div>
    )
}

export default TaskManager