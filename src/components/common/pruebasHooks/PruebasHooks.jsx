// rafce - fafc
import {useState} from "react"
const PruebasHooks = () => {
    
    const [contador , setContador] = useState(0)


    
    return (
    <div>
        <h4>{contador}</h4>
    </div>
    )
}

export default PruebasHooks