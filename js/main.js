//objetos: Terapeutas
const terapeuta1 = {
  nombre: "Daniel Ortigoza",
  edad: 49,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Ansiedad",
  modalidad: "Virtual",
  arancel: 2200
}
const terapeuta2 = {
  nombre: "Maria Gonzalez",
  edad: 22,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Ansiedad",
  modalidad: "Virtual",
  arancel: 1500
}
const terapeuta3 = {
  nombre: "Francisco Cabrera",
  edad: 29,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Ansiedad",
  modalidad: "Virtual",
  arancel: 3200
}
const terapeuta4 = {
  nombre: "Camila Arconte",
  edad: 65,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Depresión",
  modalidad: "Virtual",
  arancel: 2200
}
const terapeuta5 = {
  nombre: "Gloria Rosales",
  edad: 31,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Depresión",
  modalidad: "Depresión",
  arancel: 2000
}
const terapeuta6 = {
  nombre: "Andres Cartero",
  edad: 51,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Depresión",
  modalidad: "Virtual",
  arancel: 2500
}
const terapeuta7 = {
  nombre: "Azul Rodriguez",
  edad: 28,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Desarrollo Personal",
  modalidad: "Virtual",
  arancel: 2200
}
const terapeuta8 = {
  nombre: "Pedro Sans",
  edad: 26,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Desarrollo Personal",
  modalidad: "Virtual",
  arancel: 2700
}
const terapeuta9 = {
  nombre: "Lourdes Fernandez",
  edad: 49,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Desarrollo Personal",
  modalidad: "Virtual",
  arancel: 3000
}
const terapeuta10 = {
  nombre: "Marta Martin",
  edad: 49,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Desarrollo Personal",
  modalidad: "Presencial",
  arancel: 4200
}
const terapeuta11 = {
  nombre: "Javier Minucin",
  edad: 39,
  marco: "Terapia Cognitivo Conductual",
  especialidad: "Desarrollo Personal",
  modalidad: "Presencial",
  arancel: 4000
}

//array: Equipo
const arrayEquipo = [terapeuta1, terapeuta2, terapeuta3, terapeuta4, terapeuta5, terapeuta6, terapeuta7, terapeuta8, terapeuta9, terapeuta10, terapeuta11];

//Constructora en base a usuario
function datosUsuario(nombre, edad, arancelPretendido, motivoConsulta){
  this.nombre = nombre;
  this.edad = edad;
  this.motivoConsulta = motivoConsulta;
}

//funciones
alert("Hola, Bienvenido/a a Psicogénero. Con esta web buscamos poder acercarte información sobre salud mental")

let acceso = "ok" ;

function login() {
  let ingresar = false;
  for (let i = 2; i >= 0; i--) {
    let respuesta = prompt("¿Desea continuar con estas preguntas de ayuda? Presione ok");
    if (respuesta === acceso) {
      alert("Bienvenido/a Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error te quedan " + i + " intentos");
    }
  }
  return ingresar;
}
let logueo = login();
console.log(logueo);


if (logueo) {
  let intereses = prompt("¿Qué estás buscando? \n1- Tratamiento. \n2 - Información. \n3 - Presioná X para acceder a la navegación libre del sitio");
  while (intereses != "X" && intereses != "x") {
    switch (intereses) {
      case "1":
        alert("Te invitamos a visitar nuestra pestaña de contacto o enviar un mail a psicogenero@gmail.com");
        const usuario1 = new datosUsuario(prompt("Nombre"),prompt("edad"),prompt("consulta"));
        let presupuesto=parseInt(prompt("ingresá cuanto podés gastar"))
        let resultado;
        resultado= arrayEquipo.filter(profesional=>profesional.arancel < presupuesto)
        console.log(resultado)
        resultado.forEach (profesional => alert(usuario1.nombre + `El profesional ${profesional.nombre} tiene un arancel de $${profesional.arancel}`));
        break;
      case "2":
        let info = prompt("¿Busca información sobre la legalidad del ejercicio profesional? Escriba sí en caso de ser lo deseado");
        if (info === "sí" || info ==="Sí" || info ==="si" || info ==="Si" || info ==="SI") {
          alert("Te invitamos a visitar nuestra pestaña de Leyes Útiles");
        } else {
          alert("Por contenido relacionado a la psicoeducación visita la página de Materiales");
        }
        break;
      default:
        alert("Opción no válida");
        break;
    }
    intereses = prompt(
      "¿Desea volver a recorrer nuestra guía interactiva? \n Elegí una opción: \n1- Tratamiento. \n2 - Información. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Bienvenido al modo de navegación libre");
}

alert("Gracias por visitar nuestra web y confiar en nosotros/as");

//DOM
finDePag.innerHTML = "ESTE TITULO REEMPLAZA A OTRO VIA JS --- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur blanditiis consequuntur itaque eveniet provident voluptatibus aperiam maiores, non odit voluptas saepe quasi corporis at unde quo fugiat praesentium? Delectus!</h2>"
finDePag.className = "letraTit";

