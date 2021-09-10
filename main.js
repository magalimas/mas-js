// DESAFIO 2 

let ingreso = prompt('Para ingresar, introduzca palabra clave');
let numero = parseInt(prompt('Introduzca el numero que le enviamos al registrarse'));


//INTRODUCIR PALABRA Y NUMERO CLAVE

if ( (ingreso == 'coder' || ingreso == 'coderhouse') && (numero >= 50 && numero < 65)) {
    alert("Palabra y numero clave correcto, continuemos."); 
} else {
    alert("Algo estás haciendo mal. Intentelo de nuevo más tarde");
}

// INTRODUCIR FRUTA MAS GRANDE

let fruta = prompt('Introduzca una de las frutas más grandes del mundo');

if (fruta == 'sandia' || fruta == 'anana' || fruta == 'melon') {
    alert('¡Perfecto!')
} else if (fruta == 'mango') {
    alert('Incorrecto');
} else if (fruta == '') {
    alert('Usted debía completar el campo');
} else {
    console.log('No cumple con lo requerido.');
}

// INTRODUCIR AÑO ACTUAL

let pregunta = parseInt(prompt('Para finalizar, introduzca en que año se encuentra'));

if (pregunta != 2021) {
    console.log('Es un posible robort');
} else {
    console.log('Es un humano');
}




 //DESAFIO 1 

//let nombre = prompt ('Escriba su nombre');
//alert('Bienvenido' + " " + nombre);
//let fav = prompt ('Introduzca su numero favorito');
//let numero = parseInt(fav);
//let diez = 10;
//console.log(numero + diez);
//let pais = prompt ('Introduzca su pais');
//let barrio = prompt ('Introduzca su barrio');
//alert('Tu vives en ' + pais + ", " + barrio); 