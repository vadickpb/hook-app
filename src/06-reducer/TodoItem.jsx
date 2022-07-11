
const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    const {id, description, done} = todo
    return (
        <li  className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center ${done ? 'item-text-todo' : ''} `}
                onClick={() => onToggleTodo(id)}
            >
                {description}
            </span>
            <button 
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteTodo(id)}
            >
                Borrar
            </button>
        </li>
    )
}

export default TodoItem