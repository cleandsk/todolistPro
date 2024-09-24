import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { deleteTodo } from '../actions'

function TaskList() {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    return (
        <div className="taskList">
            <div className="display-tasks">
            <h3>Your Tasks: </h3>
            <ul className="tasks">
                {tasks.map((task) =>(
                    <li className="task" key={task.id}>
                        {task.text}
                        <button
                        className="delete-btn"
                        onClick={() => handleDelete(task.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
               
            </ul>
            </div> 


        </div>
    )
    
}

export default TaskList