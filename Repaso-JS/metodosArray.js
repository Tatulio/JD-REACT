// MAP - FILTER - FIND
console.log("----------------MAP----------------")

let numeros = [ 2, 3 ,4 ]

let numerosMapeados = numeros.map( (elemento, indice)=> elemento + indice );
// 2 + 0 / 3 + 1 / 4 + 2 = [2, 4, 6]
console.log(numerosMapeados)


console.log("--------------FILTER------------------")

let productos = [
    {
        nombre: "PC",
        precio: 200
    },
    {
        nombre: "TV",
        precio: 150
    },
    {
        nombre: "Telefono",
        precio: 100
    }
]

let productosFiltrados = productos.filter( (elemento, indicie) => elemento.precio <= 150 )
console.log(productosFiltrados)
//Devuelve un arreglo con lo filtrado

console.log("--------------FIND------------------")
// Devuelve el elemento tal cual es. Siempre se queda con la primera coincidencia 
let productoSeleccionado = productos.find( (elemento, indicie) => elemento.precio === 150 )
console.log(productoSeleccionado)



