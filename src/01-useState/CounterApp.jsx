import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const CounterApp = () => {
    

    const { counter, increment, decrement, reset } = useCounter()

    

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => increment(2)} className='btn btn-primary'> + 1</button>
            <button onClick={reset} className='btn btn-primary'>Reset</button>
            <button onClick={() => decrement(2)} className='btn btn-primary'> - 1</button>
        </>
    )
}

export default CounterApp