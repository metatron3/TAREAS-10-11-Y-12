let topping;
let precio;
let precioFinal;
let helado = 100

 topping = prompt("selecione un topping")

if (topping == "oreo") {
    precio = 10;
    console.log("toppin es de oreo");
}
else if (topping == "kitkat") {
    precio = 15;
    console.log("topping es dekitkat");
}
else if (topping == "kinder") {
    precio = 25;
    console.log("topping es de kimder");
}else {
    precio = 0;
    console.log("No tenemos este topping")
}

precioFinal = helado + precio; 
console.log("el helado cuesta $" + precioFinal)
