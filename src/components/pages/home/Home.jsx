import Navbar from "../../common/navbar/Navbar"
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks"
import {useState} from "react"

export const Home = () => {
    const [contador , setContador] = useState(0)  
    return (
    <>      
        <Navbar />
        <PruebasHooks contador={contador} setContador={setContador} />
    </>
    )
}