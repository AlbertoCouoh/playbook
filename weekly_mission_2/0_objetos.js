// 1. Objeto vacio
const empyObj  = {}

console.log(`1. Objeto vacio`)
console.log(empyObj)
console.log("________________________")

//2. Objeto con propiedades
const propObj = {
    name: "Juan",
    edad: 23
}

console.log(`2. Objeto con propiedades`)
console.log(propObj)
console.log("________________________")

//3. Objeto con propiedades diferentes
const propObj1 = {
    name: "Juan",
    edad: 23,
    mascotas: [
        "Nito",
        "Bobby"
    ],
    dirreccion: {
        estado: "yucatan",
        ciudad: "tzmn",
        calle: "centro"
    }
}

console.log(`3. Objeto con propiedades diferentes`)
console.log(propObj1)
console.log("________________________")

//4. Objeto con metodos

const metObj = {
    name: "Juan",
    
    saludar: function() {
        console.log(`${this.name} te saluda !!!...`);
    }
}

console.log(`4. Objeto con metodos`)
console.log(metObj)
metObj.saludar()
console.log("________________________")

//5. Objeto con que reciba parametros

const paramObj = {
    name: "Juan",
    
    saludar: function(name2) {
        console.log(`Hola ${name2}, te saluda ${this.name} !!!...`);
    }
}

console.log(`5. Objeto que recibe parametros`)
console.log(metObj)
paramObj.saludar("Carlos")
console.log("________________________")