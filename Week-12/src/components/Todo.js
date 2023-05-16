import React, { useState, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialState, reducer } from '../reducers/todo.reducer';
import './Todo.css'

const Todo = ({ id, text, completed, deleteTodo }) => {
    const [isCompleted, setIsCompleted] = useState(completed);
    const [todos, setTodo] = useReducer(reducer, initialState);
    return (
        <li
            key={id}
            className={`list-group-item d-flex margin-around justify-content-between align-items-center ${completed ? 'completed' : ''
                }`}
        >
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`checkbox-${id}`}
                    checked={isCompleted}
                    onChange={(event) => { setTodo({ type: "COMPLETE", id, completed: event.target.checked });  }}

                />
                <label
                    className="custom-control-label"
                    htmlFor={`checkbox-${id}`}
                >
                    <span
                        className={`text-white padding ${isCompleted ? 'text-decoration-line-through' : ''
                            }`}
                    >
                        {text}
                    </span>
                </label>
            </div>
            <div>
                <button
                    onClick={() => { deleteTodo(id) }}
                    className="btn btn-danger ml-2"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Todo