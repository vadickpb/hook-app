// import { useEffect, useState } from "react"
import {useForm} from "../hooks/useForm";

const FormWithCustomHook = () => {

    const { formState, onInputChange, onReset } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formState;

    return (

        <>
            <h2>Simple Form</h2>
            <hr />

            <div className="form-group">
                <input
                    className="form-control mb-3"
                    name="username"
                    type='text'
                    placeholder="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    className="form-control"
                    name="email"
                    type='email'
                    placeholder="email"
                    value={email}
                    onChange={onInputChange}
                />

                <input
                    className="form-control mt-3"
                    name="password"
                    type='password'
                    placeholder="password"
                    value={password}
                    onChange={onInputChange}
                />
                
                <button 
                    className="btn btn-danger"
                    onClick={onReset}
                >
                    Reset
                </button>

            </div>
        </>
    )
}

export default FormWithCustomHook