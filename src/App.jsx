import './App.css'
import initData from './data.jsx'
import {useState} from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TasksList from "./TasksList.jsx";

function App() {
    const [data, setData] = useState(initData)

    const onDragEnd = result => {
        const {destination, source, draggableId} = result
        if (destination && destination.droppableId) {
            if (source.droppableId === destination.droppableId) {
                const list = data[source.droppableId]
                list.splice(destination.index, 0, list.splice(source.index, 1)[0]);
            } else {
                const sourceList = data[source.droppableId]
                const destinationList = data[destination.droppableId]
                const removedElement = sourceList.splice(source.index, 1)[0];
                destinationList.splice(destination.index, 0, removedElement)
                console.log(removedElement)
            }
        }
    }

    return (
        <div className={'container m-auto grid grid-cols-3 gap-10 p-10'}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={'to-do-tasks-list shadow-stone-300 shadow-md p-2'}>
                    <h3 className={'border-b-stone-400 border-b pb-3 mb-5 font-bold text-2xl'}>To Do!</h3>
                    <Droppable droppableId={'tasks'}>
                        {(provided) => {
                            return <ul ref={provided.innerRef}
                                       {...provided.droppableProps}>
                                <TasksList tasks={data.tasks}/>
                                {provided.placeholder}
                            </ul>
                        }}

                    </Droppable>
                </div>
                <div className={'doing-tasks-list shadow-stone-300 shadow-md p-2'}>
                    <h3 className={'border-b-stone-400 border-b pb-3 mb-5 font-bold text-2xl'}>Doing!</h3>
                    <Droppable droppableId={'doings'}>
                        {(provided) => {
                            return <ul ref={provided.innerRef}
                                       {...provided.droppableProps}>
                                <TasksList tasks={data.doings}/>
                                {provided.placeholder}
                            </ul>
                        }}
                    </Droppable>
                </div>
                <div className={'done-tasks-list shadow-stone-300 shadow-md p-2'}>
                    <h3 className={'border-b-stone-400 border-b pb-3 mb-5 font-bold text-2xl'}>Done!</h3>
                    <Droppable droppableId={'dones'}>
                        {(provided) => {
                            return <ul ref={provided.innerRef}
                                       {...provided.droppableProps}>
                                <TasksList tasks={data.dones}/>
                                {provided.placeholder}
                            </ul>
                        }}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    )
}

export default App
