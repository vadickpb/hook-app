import { useForm } from "../hooks/useForm"

const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onReset} = useForm({
        description: '',
    })


    const onSubmitForm = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onReset();
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                className="form-control"
                placeholder="¿Que hay que hacer?"
                type="text"
                name="description"
                value={description}
                onChange= {onInputChange}
            />
            <button type="submit"
                className="btn btn-outline-info"
            >
                    Agregar
            </button>

        </form>
    )
}

export default TodoAdd