import TodoItem from "./TodoItem"

const TodoList = ( {todos, onDeleteTodo, onToggleTodo} ) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    // Todo Item
                    <TodoItem key={todo.id} todo = {todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
                ))
            }
        </ul>
    )
}

export default TodoList