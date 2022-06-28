import { useRef } from "react"

const FocusScreen = () => {

    const inputEl = useRef()

    const onClick = () => {
        inputEl.current.select();
    }

    return (
        <>
            <input
                ref={inputEl}
                className="form-control"
                placeholder="name"
            />
            <button 
                className="btn btn-primary mt-3"
                onClick={onClick}
            >
                Focus
            </button>
        </>
    )
}

export default FocusScreen