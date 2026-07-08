const prompt = require('prompt-sync')();
let pedido =[];

let lista = [];
let contador=1;
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
console.log(`Bien venido a el restaurante\n======  REALK     ======\n Nuestro menu del dia es: `);

for (let mesero in menu) {
    console.log(`\n--- ${mesero.toUpperCase()} ---`);
    
    menu[mesero].forEach(plato => {
        if (plato.disponible) {
            console.log(`${contador}) ${plato.nombre} - $${plato.precio}`);
            lista.push(plato);
            contador++;
        } else {
            console.log(`X) NO DISPONIBLE ${plato.nombre}`);
        }
    });
}
while(v){
console.log(`\nQue desea Pedir el día de hoy \n1) Sí, ordenar \n2) No, gracias \n3) Ver nuevamente el menu`);
let Resp = Number(prompt(`>`));
switch(Resp) {
    case 1:
        console.log(`\nPor favor, ingresa el bumero del producto que deseas agregar al pedido:`);
        let numeroElegido = Number(prompt(`>`));
        let indiceReal = numeroElegido - 1;
        if (indiceReal >= 0 && indiceReal < lista.length) {
            
            let productoSeleccionado = lista[indiceReal];
            pedido.push(productoSeleccionado);
            productoSeleccionado.cantidad--;
            console.log(`\nSe agrego "${productoSeleccionado.nombre}" al pedido.`);
            console.log(`(Quedan ${productoSeleccionado.cantidad} unidades disponibles)`);

        } else {
            console.log(`\n[ERROR] Ese numero de opcion no existe.`);
        }
        break;

    case 2:
        console.log(`Claro, comprendo. Gracias por venir.`);
        break;

    case 3:
        for (let mesero in menu) {
    console.log(`\n--- ${mesero.toUpperCase()} ---`);
    
    menu[mesero].forEach(plato => {
        if (plato.disponible) {
            console.log(`${contador}) ${plato.nombre} - $${plato.precio}`);
            lista.push(plato);
            contador++;
        } else {
            console.log(`X) [NO DISPONIBLE] ${plato.nombre}`);
        }
    });
}
break;
    default:
        console.log("Opcion invalida.");
        break;
}
}

function mostrarCuentaFinal() {
    console.log("====== PEDIDO ======");
    let total = 0;
    pedido.forEach(plato => {
        console.log(`> ${plato.nombre}: $${plato.precio}`);
        total += plato.precio;
        totalConIva = total * 0.19 + total;
    });
    
    console.log(`Total: $${totalConIva}`);

}

if (pedido.length > 0) {
    mostrarCuentaFinal();
}






