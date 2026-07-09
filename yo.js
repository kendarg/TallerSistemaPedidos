//! Ayuda de IA
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
function mMostrar (){
let contador = 1;
lista = [];

for(let mesero in menu){
    console.log(`\n --- ${mesero}`);
    menu[mesero].forEach(platos => {
    if(platos.disponible){
        console.log(`${contador}) ${platos.nombre} > $${platos.precio}`);
        lista.push(platos);
        contador++;
    }else {
        console.log(`X) No Disponible ${platos.nombre}`);
    }
    }); 
}
}
console.log(`Bienvenido al restaurante\n======  REALK     ======\n Nuestro menú del día es: `);
mMostrar();

while(v){
    console.log(`\n¿Qué desea hacer? \n1) Agregar producto al pedido \n2)Eliminar del Pedido  \n3) Finalizar pedido y ver cuenta `);
    let Usuario = Number(prompt(`>`));
    switch(Usuario){
        case 1:
            console.log(`\nPor favor, ingresa el número del producto que deseas agregar al pedido:`);
            let numero = Number(prompt(`>`));
            let numeroReal = numero -1;

            if(numeroReal >= 0 && numeroReal < lista.length){
                let Seleccion = lista[numeroReal];

                if(Seleccion.cantidad > 0){
                    pedido.push(Seleccion);
                    Seleccion.cantidad--;
                    console.log(`\n Sea agragado "${Seleccion.nombre}" al pedido`);
                    console.log(`Quedan ${Seleccion.cantidad} unidades disponibles`);
                }else if(Seleccion.cantidad >= 0){
                    console.log(`\nERROR Ese numero de opcion no existe.`);
                    Seleccion.disponible = false;
                }
            }
            break;
        case 2:
            console.log(`\nPor favor, ingresa el número del producto que deseas eliminar del pedido:`);
            let numero1 = Number(prompt(`>`));
            numeroR = numero1 -1;
            if(numeroR >= 0 && numeroR < lista.length){
                let Seleccion = lista[numeroR];
                if(Seleccion.cantidad > 0){
                    pedido.pop(Seleccion);
                    Seleccion.pedido++;
                    console.log(`\n Sea eliminado "${Seleccion.nombre}" del pedido`);
                }else{
                    console.log(`\nERROR Esa opccion no se encuentra en el pedido.`);
                }
            }
            break;
        case 3:
            console.log(`\nProcesando su cuenta...`);
            v = false;
            break;
        default:
            break
    }

}

function mCuenta(){
    console.log(`\n --- Imprimiendo Factura ------`);
    let total = 0;

    pedido.forEach(platos=>{
        console.log(`> ${platos.nombre}: $${platos.precio}`);
        total += platos.precio;
        
    });
    let totalIva = total * 1.19;
    console.log(`Subtotal: $${total}`);
    console.log(`Total  con IVA: $${totalIva.toFixed(2)}`);
    
}
if(pedido.length > 0){
    mCuenta();
}else{
    console.log("No agregaste ningún producto a tu pedido. ¡Vuelve pronto!");

}