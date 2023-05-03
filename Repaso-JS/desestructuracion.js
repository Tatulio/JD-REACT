// Desestructurar Objetos y Arreglos

let mascota= {
    nombre: "Jack",
    edad: 2,
    raza: "Perro"
}

const {nombre, edad, raza} = mascota


console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.raza)
console.log("-------------------")
console.log(mascota)
console.log(nombre)
console.log(edad)
console.log(raza)
console.log("-------------------")
// Desestructurar Array

const mascotasArray = ["Jack","Rojo","Lola"]

const [m1 , m2 , m3] = mascotasArray
// const [  ,   , m3] = mascotasArray -- Puedo omitir las partes que no me sirven dejando espacio vacio
console.log(mascotasArray[0])
console.log(mascotasArray[1])
console.log(mascotasArray[2])
console.log("-------------------")
console.log(m1)
console.log(m3)
console.log(m2)










