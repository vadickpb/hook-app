import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const AboutPage = () => {
    const {user} = useContext(UserContext)

    return (
        <>
            <h1>AboutPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}

export default AboutPage