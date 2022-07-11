import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

    const handleSetUser = () => {
        setUser({
            id:123,
            name: 'Vadick',
            age: 34
        })
    }
    return (
        <>
            <h1>LoginPage: {user?.name}</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
                className='btn btn-primary'
                onClick={handleSetUser}
            >
                Agregar User
            </button>
        </>
    )
}

export default LoginPage