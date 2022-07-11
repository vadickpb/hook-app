import { useEffect, useReducer } from "react";
import { todoReducer } from "../06-reducer/todoReducer";

const init = () => {
    return JSON.parse(window.localStorage.getItem('todos') || [])
}

const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = ( todo ) => 
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        })

    const handleDeleteTodo = (id) => 
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    
    const handleToggleTodo = (id) => 
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length

    }

}

export default useTodo