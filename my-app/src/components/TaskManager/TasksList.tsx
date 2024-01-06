import "./styles.css"
import { Task } from "../../models/taskManager"
import SingleTask from "./SingleTask"

interface Props {
    taskList: Task[]
}

const TasksList : React.FC<Props> = ({taskList}) => {
    return (
        <>
            {taskList.map((val) => {
                return (
                    <SingleTask task={val} key={val.id} />
                )
            })}
        </>
    )
}

export default TasksList