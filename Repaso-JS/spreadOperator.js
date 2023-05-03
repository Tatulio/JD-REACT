// ANCHOR -- SPREAD OPERATOR

let usuario = {
    nombre:"Pepe",
    mail: "pepito@gmail.com"
}

let usuarioConID = {
    id: 2,
    ...usuario
}

//Uno los dos objetos en uno solo
// { id: 2, usuario: { nombre: 'Pepe', mail: 'pepito@gmail.com' } } 
// ...{ id: 2, nombre: 'Pepe', mail: 'pepito@gmail.com' }
console.log(usuarioConID)


// SPREAD ARRAY

let numeros = [1, 2, 3]

let numerosNuevos = [...numeros]

// Para no modificar la variable numeros y solo editar la de numerosNuevos

numerosNuevos.push(15)
console.log(numeros)
console.log(numerosNuevos)





















