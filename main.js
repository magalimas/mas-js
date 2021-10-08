//DESAFIO 10

const productos = [
    { id: 1, producto: 'Venecia', tamaño: 'chico', aroma: 'Verbena', precio: 450},
    { id: 2, producto: 'Afrodita', tamaño: 'chico', aroma: 'Frutos rojos', precio: 450},
    { id: 3, producto: 'Florinda', tamaño: 'mediano', aroma: 'Jazmin', precio: 700},
    { id: 4, producto: 'Artemisa', tamaño: 'mediano', aroma: 'Mango y peonias', precio: 700},
    { id: 5, producto: 'Pandora', tamaño: 'mediano', aroma: 'Rosas', precio: 700},
    { id: 6, producto: 'Olinda', tamaño: 'grande', aroma: 'Jazmin y kiwi', precio: 1200},
    { id: 7, producto: 'Kaia', tamaño: 'grande', aroma: 'Sandia y pepino', precio: 1200},
    { id: 8, producto: 'Milan', tamaño: 'grande', aroma: 'Lavanda', precio: 1200},
];


//ARMANDO CARDS PARA MOSTRARLO

const contenedorGrid = document.getElementById('idContenedorGrid');
const barraBusqueda = document.getElementById('barraBusqueda');

const armadoCard = (velas) => {
	return `<div class='card'>
            <div class='tituloCard'>
                <h2>${velas.producto}</h2>
                <p class='fotoInvisible'>Foto Vela</p>
                <button onclick='carroAgregado()' class="btnCarrito">Agregar al carrito</button>
            </div>
            <div class='textoCard'>
                <p>Aroma: ${velas.aroma}</p>
                <p>Tamaño: ${velas.tamaño}</p>
                <h3>$${velas.precio}</h3>
            </div>
        </div>`;
};

//ARMANDO LA BUSQUEDA DE PRODUCTOS POR SI NO HAY

const armarFiltro = (productos, contenedorCards) => {
	contenedorCards.innerHTML = '';
	if (productos.length > 0) {
		for (const velas of productos) {
			const productosExistentes = armadoCard(velas);

			contenedorCards.innerHTML += productosExistentes;
		}
	} else {
		contenedorCards.innerHTML = `<p>Lo lamentamos. En este momento el producto que busca no esta disponible.</p>`;
	}
};

armarFiltro(productos, contenedorGrid)

// EMPEZAR A FILTRAR PRODUCTOS POR LA BARRA DE BUSQUEDA

const filtrarVelas = () => {
	const barraBusquedaValue = barraBusqueda.value;

	const velasFiltradas = productos.filter((velas) => {
		const productNombreLowerCase = velas.producto.toLowerCase();
		const productAromaLowerCase = velas.aroma.toLowerCase();

		const resultadoFiltro =
			productNombreLowerCase.includes(barraBusquedaValue.toLowerCase()) ||
			productAromaLowerCase.includes(barraBusquedaValue.toLowerCase());

		return resultadoFiltro;
	});

	armarFiltro(velasFiltradas, contenedorGrid);
};

barraBusqueda.addEventListener('keyup', filtrarVelas);


//MOSTRAR AL USUARIO QUE PRODUCTO AGREGO AL CARRITO

  let usuarioAgrego = document.createElement('h2');
  let contador = 1;

function carroAgregado () {
    for (const vela of productos) {
    usuarioAgrego.innerHTML = `<h2> Ha agregado ${contador} producto al carrito.</h2>`;
   document.body.appendChild(usuarioAgrego);
    }
    
};

//PRIMER FORMULARIO: USUARIO INTRODUCE NOMBRE Y MUESTRA 

let nombreUsuario = document.getElementById('formulario');
let usuarioEscribio = document.createElement('h2');

nombreUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
    usuarioEscribio.innerHTML += `<h3 class="enviado">Nombre enviado con exito.</h3> `;
    document.body.appendChild(usuarioEscribio);
});

localStorage.setItem('usuario', JSON.stringify('nombres'));


//PREGUNTA TIENE CODIGO DE DESCUENTO(SI: APARECE INPUT)

const descuento = document.getElementById('btnSi');
const nuevoElemento = document.getElementById('descuento');
let descuentoSi = document.createElement('h2');

descuento.addEventListener('click', () => {
    const nuevo = `
    <div>
      <p class="listaIzq">Escribelo</p>
      <input type="text">
      <input type="submit" value="enviar">
    </div>`

    nuevoElemento.innerHTML = nuevo;
});

nuevoElemento.onkeydown = () => {
    descuentoSi.innerHTML = '<h3 class="enviado">No hay cupones disponibles en este momento.</h3> ';

    document.body.appendChild(descuentoSi);
 }













/*

// DESAFIO 9

// LISTA DE PRODUCTOS

const productos = [
    { id: 1, producto: 'Venecia', tamaño: 'chico', aroma: 'Verbena', precio: 450},
    { id: 2, producto: 'Afrodita', tamaño: 'chico', aroma: 'Frutos rojos', precio: 450},
    { id: 3, producto: 'Florinda', tamaño: 'mediano', aroma: 'Jazmin', precio: 700},
    { id: 4, producto: 'Artemisa', tamaño: 'mediano', aroma: 'Mango y peonias', precio: 700},
    { id: 5, producto: 'Pandora', tamaño: 'mediano', aroma: 'Rosas', precio: 700},
    { id: 6, producto: 'Olinda', tamaño: 'grande', aroma: 'Jazmin y kiwi', precio: 1200},
    { id: 7, producto: 'Kaia', tamaño: 'grande', aroma: 'Sandia y pepino', precio: 1200},
    { id: 8, producto: 'Milan', tamaño: 'grande', aroma: 'Lavanda', precio: 1200},
];
	

//MOSTRAR AL USUARIO LISTA 

for (const velas of productos) {
    let agregandoHTML = document.createElement('div');
    let agregandoBtnHTML = document.createElement('div');
    agregandoHTML.classList.add('estiloProductos');
    agregandoBtnHTML.classList.add('btnCarritoPadre')
    agregandoHTML.innerHTML = `<h2>img : ${fotos[0]}</h2> <h2 class="tituloVela">Vela ${velas.id} :</h2><h3>Nombre: ${velas.producto}</h3><h3>Aroma: ${velas.aroma}</h3><h3>Tamaño: ${velas.tamaño}</h3><h3>Precio: $${velas.precio}</h3>`;
  agregandoBtnHTML.innerHTML = `<button class="btnCarrito">Agregar al carrito</button>`;

  //MOSTRAR AL USUARIO QUE PRODUCTO AGREGO AL CARRITO

  let usuarioAgrego = document.createElement('h2');
  let contador = 1;

  agregandoBtnHTML.onclick = () => {
    usuarioAgrego.innerHTML += `<h2> Ha agregado ${contador} producto ${velas.producto}  al carrito.</h2>`;
   document.body.appendChild(usuarioAgrego);
   contador++;
}
  document.body.appendChild(agregandoHTML);
  document.body.appendChild(agregandoBtnHTML);
}

//PRIMER FORMULARIO: USUARIO INTRODUCE NOMBRE Y MUESTRA 

let nombreUsuario = document.getElementById('formulario');
let usuarioEscribio = document.createElement('h2');

nombreUsuario.addEventListener('submit', (e) => {
    e.preventDefault();
    usuarioEscribio.innerHTML += `Nombre enviado con exito. `;
    document.body.appendChild(usuarioEscribio);
});

//PREGUNTA TIENE CODIGO DE DESCUENTO(SI: APARECE INPUT)

const descuento = document.getElementById('btnSi');
const nuevoElemento = document.getElementById('descuento');
let descuentoSi = document.createElement('h2');

descuento.addEventListener('click', () => {
    const nuevo = `
    <div>
      <p>Escribelo</p>
      <input type="text">
      <input type="submit" value="enviar">
    </div>`

    nuevoElemento.innerHTML = nuevo;
});

nuevoElemento.onkeydown = () => {
    descuentoSi.innerHTML = 'No hay cupones disponibles en este momento. ';

    document.body.appendChild(descuentoSi);
 }



// DESAFÍO 8
const msjeEntrada = prompt('¡BIENVENIDOS/A!\n ¿Quiere suscribirse y estar al tanto de nuestras novedades?\nIngrese SI o NO'); 
if (msjeEntrada == 'SI' || msjeEntrada == 'Si' || msjeEntrada == 'si' ) {
    const ingreseMail = prompt('Por favor, ingrese su mail');
    const guardar = localStorage.getItem('ingreseMail');
    localStorage.setItem('mails', ingreseMail);
} 
let creandoSection = document.createElement("section");
let creandoTitulo = document.createElement("h1");
creandoTitulo.textContent = 'VELAS TANA';
creandoTitulo.classList.add('titulo');
creandoSection.appendChild(creandoTitulo);
document.body.appendChild(creandoSection);
const productos = [
    { id: 1, producto: 'Vela Venecia', tamaño: '(Diametro) 8 cm', aroma: 'Verbena', precio: 450},
    { id: 2, producto: 'Vela Afrodita', tamaño: '(xs) 6 x 5', aroma: 'Frutos rojos', precio: 590},
    { id: 3, producto: 'Vela Florinda', tamaño: '(s) 7 x 7', aroma: 'Jazmin', precio: 70},
    { id: 4, producto: 'Vela Artemisa', tamaño: '(m) 8 x 10', aroma: 'Mango y peonias', precio: 900},
    { id: 5, producto: 'Vela Pandora', tamaño: '(m) 8 x 12', aroma: 'Rosas', precio: 1300},
    { id: 6, producto: 'Vela Olinda', tamaño: '(l) 8 x 15 ', aroma: 'Jazmin y kiwi', precio: 1600},
    { id: 7, producto: 'Vela Kaia', tamaño: '(xl) 13 x 8', aroma: 'Sandia y pepino', precio: 185},
    { id: 8, producto: 'Vela Milan', tamaño: '(xxl) 14 x 14', aroma: 'Lavanda', precio: 143},
];
for (const velas of productos) {
    let agregandoHTML = document.createElement('div');
    agregandoHTML.classList.add('estiloProductos');
    agregandoHTML.innerHTML = `<h2 class="ides">ID: ${velas.id} - </h2><h2 class="velas">Vela: ${velas.producto} - </h2><h2 class="aromas">Aroma: ${velas.aroma} - </h2> <h2 class="tamaño">Tamaño: ${velas.tamaño}</h2><h2 class="precio"> - Precio: $${velas.precio}</h2>`;
    document.body.appendChild(agregandoHTML);
}
// DESAFIOS 6
let carro = 0;
let respuesta = 'si';
const ingresarCantidad = '¿Cuantas velas deseas? (Ejemplo: 2)';
let sumandoIva = carro * 0.21;
let precioFinal = sumandoIva + carro;
const productos = [
    { id: 1, producto: 'Vela Venecia', tamaño: '(Diametro) 8 cm', aroma: 'Verbena', precio: 450, stock: 50 },
    { id: 2, producto: 'Vela Afrodita', tamaño: '(xs) 6 x 5', aroma: 'Frutos rojos', precio: 590, stock: 35 },
    { id: 3, producto: 'Vela Florinda', tamaño: '(s) 7 x 7', aroma: 'Jazmin', precio: 700, stock: 0 },
    { id: 4, producto: 'Vela Artemisa', tamaño: '(m) 8 x 10', aroma: 'Mango y peonias', precio: 900, stock: 10 },
    { id: 5, producto: 'Vela Pandora', tamaño: '(m) 8 x 12', aroma: 'Rosas', precio: 1300, stock: 60 },
    { id: 6, producto: 'Vela Olinda', tamaño: '(l) 8 x 15 ', aroma: 'Jazmin y kiwi', precio: 1600, stock: 80 },
    { id: 7, producto: 'Vela Kaia', tamaño: '(xl) 13 x 8', aroma: 'Sandia y pepino', precio: 1850, stock: 5 },
    { id: 8, producto: 'Vela Milan', tamaño: '(xxl) 14 x 14', aroma: 'Lavanda', precio: 1430, stock: 2 },
];
productos.sort((a, b) => {
    if (a.precio == b.precio) {
      return 0;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 1;
  });
  console.log(productos);
//STOCK
const isStock = (cantidades, stock) =>{
    if(cantidades > stock){
        alert(`¡Ups! No hay stock suficiente, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
} 
//MUESTRA TAMAÑOS Y PRECIOS VELAS
const mostrarTamañoYPrecio = () =>{
    let listaTamaños = 'EN ESTE MOMENTO LOS TAMAÑOS DISPONIBLES SON:\n';
    productos.forEach((productoVela)=> { 
        listaTamaños += '\n' + productoVela.id + '-' +' Tamaño: ' + productoVela.tamaño + ' => Precio sin IVA: ' + '$' + productoVela.precio + '\n';
      });
      listaTamaños +=  '\n' +(productos.length + 1) + '-Salir' + '\n o bien escriba ACEPTAR para ver nuestra lista de productos disponibles';
      let tamañoIngresado = parseInt(prompt(listaTamaños));
      return tamañoIngresado;
};
//MUESTRA LISTA DE VELAS + AROMAS

const listaVelas = () => {
    let mostrarVelas = 'Elegí la vela que más te guste! (Ejemplo: 2)\nEn este momento las velas disponibles son:\n';
    productos.forEach((velaNombres) => {
      mostrarVelas += '\n' + velaNombres.id + '-' + velaNombres.producto + ' - Tamaño: ' + velaNombres.tamaño + ' - Aroma: ' + velaNombres.aroma + '\n'; });
    mostrarVelas += '\n' + (productos.length + 1) + '-Salir';
    let velaIngresada = parseInt(prompt(mostrarVelas));
    console.log('Vela elegida por el usuario nº : ' + velaIngresada);
};
// POSIBLE AUMENTO  
const aumento = productos.map(product=>product.precio +=80);
console.log('El próximo aumento subiría a :' + aumento);
// SUMA CANTIDADES + STOCK
const sumarProductos = (usuarioIngresa, cantidades) => {
    const usuarioIngreso = productos.find(product=>product.id === usuarioIngresa); 
    if(isStock(cantidades, usuarioIngreso.stock)){
        carro += (cantidades * usuarioIngreso.precio);
        productos[usuarioIngresa-1].stock -= cantidades;
        alert(`${usuarioIngreso.producto} fue agregado a la cuenta`);
        sumarProductos(usuarioIngresa, cantidadIngresada);
    }
}
do{
    let usuarioIngresa = mostrarTamañoYPrecio();
    if(usuarioIngresa === productos.length + 1) break;
    listaVelas();
    let cantidadIngresada = parseInt(prompt(ingresarCantidad));
    respuesta = prompt('¿Desea agregar mas productos a la cuenta? (SI o NO)');
    console.log('Usuario quiere : ' + cantidadIngresada + ' velas.');
}while(respuesta === 'Si' || respuesta === 'si' || respuesta === 'SI');  
// CARRITO DE COMPRAS
if( carro > 0 ){
    alert('Su compra tiene un total de' + carro +  'y la totalidad de su compra incluyendo IVA es de ' + precioFinal);
} 
alert('¡Gracias por su visita!');
// DESAFIO 5
alert('Bienvenidos a Velas Tana');
const msjeEntrada = parseInt(prompt(`Esta es nuestra lista de velas disponible:
•Venecia
•Afrodita
•Florinda
•Artemisa
•Pandora
•Olinda
•Kaia
•Milan

ESCRIBA ACEPTAR PARA CONTINUAR Y CONOCER NUESTROS AROMAS DISPONIBLES.
`));
alert(`Nuestros aromas en stock:
•Jazmin
•Frutos rojos
•Sandía y pepino
•Lavanda
•Papaya
•Pomelo
•Rosas
•Mango y peonias
PRESIONE ACEPTAR PARA CONTINUAR CON LA COMPRA.
`);
class Velas {
    constructor(nombre, aroma, tamaño, precio) {
        this.nombre = nombre.toUpperCase();
        this.aroma = aroma;
        this.tamaño = tamaño;
        this.precio = parseInt(500);
        this.precioEnvio = parseInt(400);
    }
    totalConIva() {
        return `
        El precio con iva es de $ ${(this.precio + this.precioEnvio) * 1.21} 
        ¡Ya casi finalizamos! Precione aceptar`;
    }
    infoTotal() {
        return `
        Vela:  ${this.nombre} 
        Aroma: ${this.aroma} 
        Tamaño: ${this.tamaño}
        Precio sin discriminar: $${this.precio}
        Precio envío: $${this.precioEnvio}

        PRESIONE ACEPTAR PARA CONTINUAR CON SU COMPRA.
        `
    }
}
const nombre = prompt('Ingrese el nombre de la vela que quiere comprar');
console.log(nombre);
const aroma = prompt('Ahora elija su aroma favorito');
console.log(aroma);
const tamaño = prompt('Para ir finalizando, ¿quiere tamaño chico o grande? ');
console.log(tamaño);
const vela1 = new Velas(nombre, aroma, tamaño, 500);
alert(vela1.infoTotal());
alert(vela1.totalConIva());
const cupon = prompt('Para finalizar, si tiene cupon de descuento ingreselo:');
if (cupon == 'coderhouse') {
    alert('Enhorabuena, has conseguido $100 de regalo ' + '.Gracias por su compra, en breve sera contactado');
} else {
    alert('Cupon incorrecto. De todas formas agradecemos su compra, en breve sera contactado.');
}
// DESAFIO 4
alert('Bienvenidos a Velas Tana');
const aroma = parseInt(prompt(`Elegi el aroma que más te guste (Ejemplo: 3) :
1.-Jazmin
2.-Frutos rojos
3.-Sandía y pepino
4.-Lavanda
5.-Papaya
6.-Pomelo
7.-Rosas
8.-Mango y peonias
`));
const pregunta = parseInt(prompt('Escriba cantidad de velas que desea. Ejemplo: 2'));
const multiplicar = (a, b) => { return a * b };
const descuento = (x) => (x - 100);
let precioVelas = 450;
let precioEnvio = 300;
let totalSinDiscriminar = multiplicar(pregunta, precioVelas);
alert('En total sin descriminar IVA sería $' + (totalSinDiscriminar + precioEnvio) + '. Detalle: precio por unidad $' + precioVelas + ' + costo de envío: ' + precioEnvio);
console.log('valor final: $' + totalSinDiscriminar);
const sumandoIva = prompt(`¿Que desea hacer?
a : Ir a pagar
b : Agregar más productos
c : ¡Se mi código de descuento!
d : Salir`)
if (sumandoIva == 'a') {
    alert('El total es ' + ( (totalSinDiscriminar + precioEnvio) * 1.21) + ' ¡Gracias por su compra!');
} else if (sumandoIva == 'b') {
    const aroma = parseInt(prompt(`Elegi el aroma que más te guste (Ejemplo: 3) :
    1.-Jazmin
    2.-Frutos rojos
    3.-Sandía y pepino
    4.-Lavanda
    5.-Papaya
    6.-Pomelo
    7.-Rosas
    8.-Mango y peonias
    `));
} else if (sumandoIva == 'c') {
    let cuponn = descuento;
    let cupon = prompt('Ingrese palabra para acceder al descuento');
    if (cupon == 'coderhouse') {
        alert('Enhorabuena, has conseguido $100 de regalo');
    } else {
        alert('Incorrecto')
    }
}
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
 let pais = prompt("Indique en que país habita");
while(pais != '' ) {
    console.log('Pais ingresado ' + ': ' + pais);
    let horario = prompt('Ingrese horario. Ejemplo 16:44');
    console.log(horario);
    alert('Actualmente estas en ' + pais + ' y son aproximadamente las ' + horario);
    break;
} 
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
*/

