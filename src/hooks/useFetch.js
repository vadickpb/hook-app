import { useEffect, useState } from "react"


export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false
    })

    useEffect( () => {
        const getFetch = async() => {

            setState({
                ...state,
                loading: true
            })

            try {
                const res = await fetch(url)
                const data = await res.json()
        
                setState({
                    data: data,
                    loading: false,
                    hasError: false
                })
                
            } catch (error) {
                setState({
                    ...state,
                    hasError: error
                })
            }
        }
        getFetch();

    }, [url])

    return {
        state
    }

    
}