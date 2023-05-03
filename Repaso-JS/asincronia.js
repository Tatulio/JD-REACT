// ANCHOR -> FETCH y ASYNC - AWAIT

let url = "https://rickandmortyapi.com/api/character"

/* const consulta = fetch(url) // Devuelve una promesa
// uso them() para capturarla, nos devuelve una promesa que debo transformarla a JSON
.then((res) => res.json())
.then((res) => console.log(res.results)) */


const handleData = async() => {
    const consulta = await fetch(url)
    let data = await consulta.json()
    console.log(data.results)
}

handleData()

































