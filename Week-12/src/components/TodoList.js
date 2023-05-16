import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialState, reducer } from '../reducers/todo.reducer';
import Todo from './Todo';

const TodoList = () => {
    const [text, setText] = useState('');
    const [todos, setTodo] = useReducer(reducer, initialState);
    const deleteTodo = (id) => {
        setTodo({ type: "DELETE", id })
    }
    const completeTodo = id => {
        setIsCompleted(event.target.checked);
    }
    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                    className="form-control border-white bg-transparent text-white"
                    placeholder="Add a new todo..."
                />
                <button
                    className="btn btn-primary"
                    disabled={!text}
                    onClick={() => { setTodo({ type: "ADD", text }) }}
                >
                    Add
                </button>
            </div>
            <ul>
                {
                    todos.todos.map(todo => (<Todo key={`todo-${todo.id}`}{...todo} deleteTodo={deleteTodo} />))
                }

            </ul>
        </div>
    )
}

export default TodoList