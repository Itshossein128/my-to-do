import {Draggable} from "react-beautiful-dnd";
import DraggableTask from "./DraggableTask.jsx";

function Task({id, title, index}) {
    console.log(typeof(id))
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => {
                return <li className={'p-4 shadow-sm shadow-stone-300 mt-3'}
                           ref={provided.innerRef}
                           {...provided.draggableProps}
                           {...provided.dragHandleProps}
                >
                    <DraggableTask title={title}/>
                </li>
            }}
        </Draggable>
    );
}

export default Task;