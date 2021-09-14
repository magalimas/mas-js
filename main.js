// DESAFIO 3

//PRIMER EJEMPLO CON FOR (SORTEO IPHONE)

let ingresarCodigo = parseInt(prompt('ingresa el numero para ver si te ganaste el iphone! Tienes un intento'));

for (let i = 1; i <= 150; i++) {
    if (ingresarCodigo == 73) {
    alert('¡Felicitaciones! Te has ganado el iphone');
    break;
  }
  console.log('Usuario ingreso' + ': ' + 'número ' + ingresarCodigo);
}

//OTRO EJEMPLO CON FOR (DIFERENCIA EDADES)

let edadHijo = parseInt(prompt('Quieres saber cuantos años tenía tu madre cuando te tuvo? Bien, primero, ingresa tu edad'));
let edadPadre = parseInt(prompt('Ahora ingrese edad de su madre'));

for (let edad = 10; edad <=105; edad++) {
    let edadFinal = edadPadre - edadHijo;
    alert('Tu madre tenía ' + edadFinal + ' años');
    break;
}

//OTRO EJEMPLO CON FOR (TURNO)

let fecha = parseInt(prompt('Ingrese la fecha de hoy. Ejemplo: 6'));
const ultimoDia = 30;

for (let desde = 1; desde <= ultimoDia; desde++) {
    let ingreseTurno = prompt('Turnos disponibles hasta el 30 de septiembre. Introduzca que día quiere el turno (ejemplo: 15)');
    let diasRestantes = ingreseTurno - fecha;

    console.log('Faltan ' + diasRestantes + ' dias para el turno');
    break;
}


// EJEMPLO WHILE

let creador = prompt('Introduzca el nombre de la creadora de este sitio');

while (creador != 'no se') {
    if (creador == 'Magali') {
        let apellido = prompt('Ahora introduzca el apellido');
        switch (apellido) {
            case 'Mas':
                alert('Correcto. Bienvenido');
                break;
    
            case 'MAS':
                alert('Solo se aceptan mayúsculas en la primer letra.'); 
                break;
                
            default:
                alert('Incorrecto');
                break;
        }
    } else {
        alert('Acceso denegado. Posible robot.');
        break;
    }

    apellido = prompt('Última chance. Introduzca el apellido');
    break;
    console.log(apellido);
}


// OTRO EJEMPLO PARA MI 

/* let pais = prompt("Indique en que país habita");

while(pais != '' ) {
    console.log('Pais ingresado ' + ': ' + pais);
    let horario = prompt('Ingrese horario. Ejemplo 16:44');
    console.log(horario);
    alert('Actualmente estas en ' + pais + ' y son aproximadamente las ' + horario);
    break;
} */
















/*
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

let nombre = prompt ('Escriba su nombre');
alert('Bienvenido' + " " + nombre);
let fav = prompt ('Introduzca su numero favorito');
let numero = parseInt(fav);
let diez = 10;
console.log(numero + diez);
let pais = prompt ('Introduzca su pais');
let barrio = prompt ('Introduzca su barrio');
alert('Tu vives en ' + pais + ", " + barrio); 
*/