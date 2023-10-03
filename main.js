const productos = [

{nombre: "Antik Rojos" precio: 599}
{nombre: "Antik Clasicos" precio: 755}
{nombre: "Antik Azules" precio: 659}
{nombre: "Antik R3" precio: 399}
];

let carrito = []

let seleccion = prompt("¡Hola! ¿Deseas algúno de nuestros productos?")
while(seleccion != "si" && seleccion != "no"){
    alert("¡Por favor ingresa si o no!")
    seleccion = prompt("¡Hola! ¿Desea comprar algo? ¿Si o No?")
}

if(seleccion == "si"){
    alert("¡A continuación encontrarás nuestra lista de productos!")
let todoslosProductos = productos.map(producto) ==> producto.nombre + " " + producto.precio + "$"}