/*class Celular {
  constructor(color,peso,tamaño,rdc,ram){
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }
  presionarBotonEncendido(){
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("celular apagado");
      this.encendido = false;
    }
  }

  reiniciar(){
    if (this.encendido == true) {
      alert("reiniciando celular");
    } else {
      alert("el celular está apagado");
    }
  }
  tomarFoto(){
    alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
  }
  grabarVideo(){
    alert(`grabando video en ${this.resolucionDeCamara}`);
  }
  mobileInfo(){
    return `
    Color: <b>${this.color}</b></br>
    Peso: <b>${this.peso}</b></br>
    Tamaño: <b>${this.tamaño}</b></br>
    Memoria Ram: <b>${this.memoriaRam}</b></br>
    Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
    `;
  }
}


class CelularAltaGama extends Celular {
  constructor(color,peso,tamaño,rdc,ram,rdce){
    super(color,peso,tamaño,rdc,ram);
    this.resolucionDeCamaraExtra = rdce;
  }
  grabarVideoLento(){
    alert("estas grabando en camara lenta");
  }
  reconocmientoFacial(){
    alert("vamos a iniciar un reconocimiento facial")
  }
  infoAltaGama(){
    return this.mobileInfo() + `Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`;
  }
}


// celular1 = new Celular("rojo","150g","5'","hd","1GB");
// celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
// celular3 = new Celular("blanco","15046g","5.9'","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4K","4GB", "hd");


document.write(`
  ${celular1.infoAltaGama()} <br><br>
  ${celular2.infoAltaGama()} <br>
  `);*/

  /*class App {
  constructor(descargas,puntuacion,peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  
  instalar(){
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada correctamente")
    }
  }
  desinstalar(){
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada correctamente")
    }
  }
  abrir(){
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app iniciada");
    }
  }
  cerrar(){
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }

  appInfo(){
    return `
    Descargas: <b>${this.descargas}</b></br>
    Puntuacion: <b>${this.puntuacion}</b></br>
    Peso: <b>${this.peso}</b></br>
    `
  }

}


app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","4.5 estrellas","100mb");
app4 = new App("23.000","4.8 estrellas","1gb");
app5 = new App("900","5 estrellas","250");
app6 = new App("17","3.7 estrellas","522mb");
app7 = new App("42.981","2.9 estrellas","723mb");


document.write(`
  ${app.appInfo()} <br>
  ${app2.appInfo()} <br>
  ${app3.appInfo()} <br>
  ${app4.appInfo()} <br>
  ${app5.appInfo()} <br>
  ${app6.appInfo()} <br>
  ${app7.appInfo()} <br>
  `);*/

/*class Calculadora {
  sumar(num1,num2){
  return parseInt(num1) + parseInt(num2);
}
   restar(num1,num2){
  return parseInt(num1) - parseInt(num2);
  }
  dividir(num1,num2){
  return parseInt(num1) / parseInt(num2);
  }
   multiplicar(num1,num2){
  return parseInt(num1) * parseInt(num2);
  }
  potenciar(num,exp){
    return num**exp 
  }
  raizCuadrada(num){
    return Math.sqrt(num);
  }
  reizCubica(num){
    return Math.cbrt(num);
  }
}
const calculadora = new Calculadora();

alert ("Que operacion deseas realizar?");

let operacion = prompt ("1-Sumar, 2-Restar, 3-Dividir, 4-Multiplicar,5-Potenciacion,6-Raiz Cuadrada,7- Raiz Cubica");

if (operacion == 1) {
  let numero1 = prompt ("Ingrese el primer numero ");
  let numero2 = prompt ("Ingrese el segundo numero");
  resultado = calculadora.sumar(numero1,numero2);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 2) {
  let numero1 = prompt ("Ingrese el primer numero ");
  let numero2 = prompt ("Ingrese el segundo numero");
  resultado = calculadora.restar(numero1,numero2);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 3) {
  let numero1 = prompt ("Ingrese el primer numero ");
  let numero2 = prompt ("Ingrese el segundo numero");
  resultado = calculadora.dividir(numero1,numero2);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 4) {
  let numero1 = prompt ("Ingrese el primer numero ");
  let numero2 = prompt ("Ingrese el segundo numero");
  resultado = calculadora.multiplicar(numero1,numero2);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 5) {
  let numero1 = prompt ("Ingrese el numero a potenciar");
  let numero2 = prompt ("Ingrese la potencia");
  resultado = calculadora.potenciar(numero1,numero2);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 6) {
  let numero1 = prompt ("Ingrese un numero ");
  resultado = calculadora.raizCuadrada(numero1);
  alert ( `tu resultado es ${resultado}`);
}
if (operacion == 7) {
  let numero1 = prompt ("Ingrese un numero ");
  resultado = calculadora.reizCubica(numero1);
  alert ( `tu resultado es ${resultado}`);
}


*/

/*const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
  }
  
const obtenerInformacion = (materia)=>{
  
  if (materias[materia] !== undefined){
    return [materias[materia],materia,materias];
  } else {
    return materias;
  }
}

const mostrarInformacion = (materia)=>{
  let informacion = obtenerInformacion(materia);

if (informacion !== false) {
  let profesor = informacion[0][0];
  alumnos = informacion[0];
  alumnos.shift();
  document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion) {
    if (informacion[info].includes(alumno)) {
      cantidadTotal++;
      clasesPresentes.push(" "+ info);
    }
  }
  return `<b style='color:blue'>
  ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
  <br><br>
  `;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))*/

/*let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
  }


const inscribir = (alumno,materia)=>{
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
  } else {
    personas.push(alumno);
    if (materia == "fisica") {
      materias = {
            fisica: personas,
            programacion: materias['programacion'],
            logica: materias['logica'],
            quimica:materias['quimica']
          }
    }
    else if (materia == "programacion") {
      materias = {
            fisica: materias['fisica'],
            programacion: personas,
            logica: materias['logica'],
            quimica:materias['quimica']
          }
    }else if (materia == "logica") {
      materias = {
            fisica: materias['fisica'],
            programacion: materia['programacion'],
            logica: personas,
            quimica:materias['quimica']
          }
    }else if (materia == "quimica") {
      materias = {
            fisica: materias['fisica'],
            programacion: materia['programacion'],
            logica: materias['logica'],
            quimica: personas
          }
    }
    document.write(`¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente.<br><br>`);
  }
}

document.write(materias['fisica'] + "<br>")

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");

inscribir("pedrito","fisica");

inscribir("pedrito","fisica");

inscribir("pedrito","fisica");



document.write("<br>" + materias['fisica'])*/
/*
function suma (num1,num2)  {
  document.write(num1+num2,"<br>");
  console.count();

}

suma(2,4);
suma(2,4);
suma(2,4);

*/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});