// eslint-disable-next-line react/prop-types
import {Draggable} from "react-beautiful-dnd";
import Task from "./Task.jsx";

function TasksList({tasks}) {
    return <>
        {/* eslint-disable-next-line react/prop-types */}
        {tasks.map((task, index) => <Task key={task.id} id={task.id} title={task.title} index={index}/>
        )}
    </>;
}

export default TasksList;