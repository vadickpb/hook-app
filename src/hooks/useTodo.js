import { useEffect, useReducer } from "react";

const useTodo = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage('todos') || [])
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = ( todo ) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Delete Todo',
            payload: id
        })
    }

}

export default useTodo