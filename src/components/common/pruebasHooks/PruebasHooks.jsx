// rafce - fafc
import {useState, useEffect} from "react"

const PruebasHooks = ({contador, setContador}) => {
    
    const [img, setImg] = useState("")

    let arr = [
        "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png",
        "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png",
        "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png"]

    useEffect(() => {
        setImg(arr[contador])
    },[contador])

    return (
    <div>
        <h4>{contador}</h4>
        <button onClick={()=> {setContador(contador +1)}}>Aumentar</button>
        <button onClick={()=> {setContador(contador -1)}}>Disminuir</button>
        <button onClick={()=> {setContador(0)}}>Reiniciar</button>

        {/* <button onClick={() => setImg("https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png")}>Traer Imagen</button> */}
        {/* <button onClick={() => setImg("")}>Quitar Imagen</button> */}
        <img src={img} alt="" />
    </div>
    )
}

export default PruebasHooks