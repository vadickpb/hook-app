import { memo } from "react";


const Small = memo(({value}) =>{
    console.log('me acabo de dibujar');

    return (
        <small>{value}</small>
    )
})

export default Small