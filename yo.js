//! Este lo hago con ayuda de ia
const prompt = require('prompt-sync')();
let pedido = [];

let lista = [];
let v = true;


let menu = {
    Fuerte:[
        {nombre: "Lomo Salteado", precio: 22000, categoria: "Carne" , disponible: false, cantidad: 5},
        {nombre: "Salmon a la Parrilla", precio: 28000, categoria: "Mariscos" , disponible: true, cantidad: 5 },
        {nombre: "Risotto de Chanpiñones", precio: 20000, categoria: "Vegetariano" , disponible: false, cantidad: 5 },
        {nombre: "Pollo al Curry", precio: 38000, categoria: "Pollo" , disponible: true, cantidad: 5},
    ],
    Bebidas:[
        {nombre: "Coca-Cola", precio: 10000, categoria: "Gaseosas" , disponible: true, cantidad: 5 },
        {nombre: "Corona", precio: 12000, categoria: "Alcohol" , disponible: false, cantidad: 5},
        {nombre: "Jugo de Lulo", precio: 12000, categoria: "Jugo" , disponible: true, cantidad: 5},
        {nombre: "Pepsi", precio: 10000, categoria: "Gaseosas" , disponible: false, cantidad: 5 },
    ],
    Postre:[
        {nombre: "Volvan de Chocolate", precio: 18000, categoria: "Chocolate" , disponible: true, cantidad: 5 },
        {nombre: "Cheesecake de Frutos Rojos", precio: 38000, categoria: "tortas" , disponible: false, cantidad: 5 },
        {nombre: "Tiramisú Tradicional", precio: 38000, categoria: "Cafe" , disponible: false, cantidad: 5},
        {nombre: "Flan de Coco", precio: 38000, categoria: "Casero" , disponible: true, cantidad: 5},
    ],
    Principal:[
        {nombre: "Ceviche Clasico", precio: 38000, categoria: "Mariscos" , disponible: true, cantidad: 5 },
        {nombre: "Tacos de Birria", precio: 20000, categoria: "Mexicana" , disponible: true, cantidad: 5},
        {nombre: "Bruschetta de Tomate", precio: 38000, categoria: "Italiana" , disponible: false, cantidad: 5 },
        {nombre: "Rollitos Primavera", precio: 38000, categoria: "Asiatica" , disponible: true, cantidad: 5},
    ]
};
function menuv(){
    let contador = 1;
    lista = [];
    for(let mesero in menu){
        console.log(`\n --- ${mesero.toUpperCase()} ---`);
        menu[mesero].forEach(plato => {
            if(plato.disponible){
                console.log(`${contador}) ${plato.nombre} -$${plato.precio}`);
                lista.push(plato);
                contador++;
            }else {
                console.log(`X) No Disponible ${plato.nombre}`);
            }
        });
    }
}


console.log(`Bien venido a el restaurante\n======  REALK     ======\n Nuestro menu del dia es: `);
menuv();

while(v){
    console.log(`Que desea hacer \n1)Pedir producto \n2)Finalizar y ver cuenta \n3) Ver menu`);
    let Resp = Number(prompt(`>`));
    switch(Resp){
        case 1 :
        console.log(`\n Por favor ingrese el numero del producto que deseas agregar al pedido: `);
        let numeroEl = Number(prompt(`>`));
        let indiceR = numeroEl -1;

        if (indiceR >= 0 && indiceR < lista.length){
            let seleccion = lista[indiceR];

            if(seleccion.cantidad > 0){
                pedido.push(seleccion);
                seleccion.cantidad--;
                console.log(`\n Se agrego "${seleccion.nombre}" al pedido`);
                console.log(`(Quedan ${seleccion.cantidad} unidades disponibles)`);
            }else{
                console.log(`\n El Producto no se tiene en el momento`);
            }
            }else{
                console.log(`\n Opcion no valida`);
            }
        break;
        case 2:
        console.log(`Procesando cuenta.`);
        v = false;
        break;
        case 3:
        menuv();
        break;
        default:
        console.log("Opción inválida.");
        break;
    }
}
function cuenta() {
    console.log(`\n --- Factura ---`);
    let total = 0;
    
    pedido.forEach(plato =>{
        console.log(`> ${plato.nombre}: $${plato.precio}`);
        total += plato.precio;
    });

    let totalConIva = total * 1.19;
    console.log(`Subtotal: $${total}`);
    console.log(`Total (con IVA 19%): $${totalConIva.toFixed(2)}`);
}
if(pedido.length>0){
    cuenta();
}else{
    console.log(`No se agrego nada`);
    
}