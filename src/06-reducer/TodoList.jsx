import TodoItem from "./TodoItem"

const TodoList = ( {todos, onDeleteTodo} ) => {
    return (
        <ul className="list-group">

            {
                todos.map(todo => (
                    // Todo Item
                   <TodoItem key={todo.id} todo = {todo} onDeleteTodo={onDeleteTodo} />
                ))
            }
        </ul>
    )
}

export default TodoList