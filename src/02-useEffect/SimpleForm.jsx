import { useEffect, useState } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Jose',
        email: 'jose@gmail.com'
    }) 

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    useEffect( () => {
        // console.log('desde use effect');
    }, [])

    useEffect( () => {
        // console.log('form changed');
    }, [formState])

    useEffect( () => {
        // console.log('username changed');
    }, [ username ])



    return (

        <>
            <h2>Simple Form</h2>
            <hr/>

            <div className="form-group">
                <input
                    className="form-control mb-3" 
                    name="username"
                    type='text'
                    placeholder="vadick"
                    value={username}
                    onChange={onInputChange} 
                />
                <input 
                    className="form-control"
                    name="email"
                    type='email'
                    placeholder="vadick1@gmail.com"
                    value={email}
                    onChange={onInputChange}
                />
                {
                    username === 'Jose1' ? <Message /> : ''
                }
                
            </div>
        </>
    )
}

export default SimpleForm