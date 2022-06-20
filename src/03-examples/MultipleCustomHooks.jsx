import { useEffect } from "react"
import { useCounter, useFetch } from "../hooks"
import Loading from "./Loading";
import Quote from "./Quote";

const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter();
    const { state } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    // console.log(counter);

    const {data, loading, hasError} = state
    const {quote, author} = !!data && data[0]
    
    if (hasError) {
        <div className="alert alert-danger">Algo fallo</div>
    }

  return (
    <>
        <h2 className="text-center">Breaking bad Quotes</h2>
        <hr/>

        {
            loading 
                ? <Loading />
                
                : <Quote quote={quote} author={author}/>
                

        }

        <button
            onClick={ () => decrement()} 
            className="btn btn-success btn-sm"
            disabled={loading}
            >
            Anterior
        </button>
        <button
            onClick={() => increment()} 
            className="btn btn-primary btn-sm"
            disabled={loading}
            >
                Siguiente
        </button>

    </>
  )
}

export default MultipleCustomHooks