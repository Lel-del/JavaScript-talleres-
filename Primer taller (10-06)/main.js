console.log ("Mini sistema de compra en consola.")
console.log ("Una tienda necesita calcular el valor total de una compra. Para hacerlo, debes crear un programa en JavaScript que guarde datos de un producto, calcule subtotal, descuento y total, y muestre la información de forma clara en la consola del navegador.")
//------------------------//
console.log ("Productos totales:")
let productos2 = ["Teclado", "Monitor", "Disco"];
console.log(productos2.length);
// -----------------------//

const catalog = [
    {
        nombre: "Teclado",
        precio: 24000,
        stock: 3,
        descuento: 10000,
        disponibilidad: true
    },
    {
        nombre: "Monitor",
        precio: 65000,
        stock: 5,
        descuento: 10000,
        disponibilidad: true

    },
    {
        nombre: "Disco",
        precio: 32000,
        stock: 12,
        descuento: 10000,
        disponibilidad: true
    }
]

catalog.forEach((elemento) => {
    console.log(elemento);
});

console.log ("Producto seleccionado: Teclado.")

//---------------------------//

let teclado = "  Teclado Gamer  ";
let precioteclado = 24000;
let stockteclado = 3;
let descuentoteclado = 10000;

//---------------------------//


let subtotal = precioteclado * stockteclado;
console.log ("Subtotal de la compra:") 
console.log (subtotal)

let total = subtotal - descuentoteclado;
console.log ("Total a pagar:")
console.log (total)

//---------------------------//
console.log("--------------------")
let nomteclado = teclado.trim()
console.log(nomteclado)

let upperteclado= teclado.toUpperCase()
console.log(upperteclado)

let tienefrase = teclado.includes("Gamer") 
console.log(tienefrase)