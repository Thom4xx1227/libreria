const bestsellersNombre = "Betsellers";
const literaturaNombre = "literatura";
const academicosNombre = "academicos";

const betsellersPrecio = 500;
const literaturaPrecio = 100;
const academicosPrecio = 0;

const betsellers = 1;
const literatura = 2;
const academicos = 3;




alert ("Bienvenido a la libreria virtual");
alert ("Podras escoger entre 3 variedades de libros");

let opcionseleccionadalibro = parseInt(prompt(`¿Que tipo de libro deseas? \n${betsellers} ${bestsellersNombre} Costo por dia = ${betsellersPrecio} \n${literatura} ${literaturaNombre} Costo por dia = ${literaturaPrecio} \n${academicos} ${academicosNombre} Costo por dia ${academicosPrecio}`));

    

 if (opcionseleccionadalibro === betsellers){
    preciolibro = betsellersPrecio;
     opcionseleccionadalibro = bestsellersNombre;
   alert (` has escogido libro tipo ${bestsellersNombre} con un coste por dia de ${betsellersPrecio}`);
   
 } else if ( opcionseleccionadalibro === literatura){
     precioLibro = literaturaPrecio;
     opcionseleccionadalibro = literaturaNombre;
    alert (` has escogido libro tipo ${literaturaNombre} con un coste por dia de ${literaturaPrecio}`);
   
 } else if (opcionseleccionadalibro === academicos){
    preciolibro = academicosPrecio;
    opcionseleccionadalibro = academicosNombre;
    alert (`has escogido libro tipo ${academicosNombre} con un coste por dia de ${academicosPrecio}`);

 } else {
    alert("Selecciona una opcion valida");
 }

 let cantidadlibros = parseInt(prompt(`¿cuantos libros de este tipo deseas llevar? maximo 5`));

 if (cantidadlibros >= 1 && cantidadlibros <=5){
    alert (`llevaras ${cantidadlibros} libros de la categoria ${opcionseleccionadalibro}`);
 }else {
    alert(`puedes llevar como minimo 1 libro y maximo 5. ingresa un valor valido`);
 }

 let librosDeseados = [];
 for (let i = 0; i < cantidadlibros; i++) {
    let libro = prompt(`Ingresa el nombre del libro ${i + 1} deseado`);
    librosDeseados.push(libro);
 }

 let diasDePrestamo = parseInt(prompt(`¿Por cuantos dias deseas alquilar el libro?`));

 if (diasDePrestamo >= 1 && diasDePrestamo <= 30){
    alert(`Has solicitado prestar el libro por ${diasDePrestamo} dias`);
 } else {
    alert (`solo puedes prestar el libro por un minimo de 1 dia y un maximo de 30`);
 }

 let precio1 = preciolibro * diasDePrestamo;
 let precio2 = precio1 * cantidadlibros;
 
 let precioSinDescuento= precio2;
 let descuento = 0.10;
 let preciofinaldescuento = precioSinDescuento * ( 1 - descuento);
 
 if (diasDePrestamo >= 10){
   alert(`obtuviste un descuento del 10%`);
   alert (` el precio final es del ${preciofinaldescuento}`);
 }else {
   alert (`el precio final es de ${precioSinDescuento}`);
 }