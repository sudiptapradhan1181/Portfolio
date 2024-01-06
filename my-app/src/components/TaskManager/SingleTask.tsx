import "./styles.css"
import { Task } from "../../models/taskManager"

interface Props {
    task: Task
}

const SingleTask : React.FC<Props> = ({task}) => {
    return (
        <div>{task.name}</div>
    )
}

export default SingleTask