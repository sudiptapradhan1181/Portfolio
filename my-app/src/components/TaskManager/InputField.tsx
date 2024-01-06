import React, {useRef} from "react";
import "./styles.css"

interface Props {
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>,
    handleAddTask: (task: string) => void
}

const InputField: React.FC<Props> = ({task, setTask, handleAddTask}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="formElement" onSubmit={(e) => {
            e.preventDefault()
            inputRef.current?.blur()
            handleAddTask(task)
            setTask('')
        }}>
            <input 
                type="text"
                placeholder="Enter a Task"
                className="inputElement" 
                value={task}
                onChange={e => setTask(e.target.value)}
                ref={inputRef}
            />
            <button className="buttonElement" type="submit">Go</button>
        </form>
    )
}

export default InputField