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