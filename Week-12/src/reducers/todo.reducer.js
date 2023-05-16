export const initialState = {
    count: 2,
    todos: [
        {
            id: 1,
            text: "First To-do",
            completed: true
        },
        {
            id: 2,
            text: "Second To-do",
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            const newTodo = { id: state.count++, text: action.text, completed: false }
            return {

                count: state.count++,
                todos: [...state.todos, newTodo]

            }
        };
        case "COMPLETE": {
            const findId = state.todos.findIndex(t => t.id === action.id);
            const todo = Object.assign({}, state.todos[findId]);
            todo.complete = action.completed;
            const todos = Object.assign([], state.todos);
            todos.splice(findId, 1, todo);
            return {
                count: state.count,
                todos
            }

        }
        case "DELETE": {
            const findId = state.todos.findIndex(t => t.id === action.id);
            const todos = Object.assign([], state.todos);
            todos.splice(findId, 1);
            return {
                count: state.count,
                todos
            }
        }
        default:
            break;
    }
}