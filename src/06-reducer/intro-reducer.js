
const initialState = [{
    id: 1,
    todo: 'instalar baranda',
    done: false
}]

const todoReducer = (state = initialState, action = {}) => {
    
    if (action.type === 'ADD_TODO') {

        return [...state, action.payload
        ]

    }

    return initialState
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'limpiar la cocina',
    done: false
}
const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo
}


todos = todoReducer(todos, addTodoAction)

console.log({state: todos});

