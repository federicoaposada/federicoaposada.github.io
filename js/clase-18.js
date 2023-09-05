/* -------------------------------------------------------------------------- */
/*                [1] FUNCION: esperamos la carga de la ventana               */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function () {

    const formulario = this.document.querySelector('form')

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        postearComentario();
    })


})

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: capturamos los datos del form                 */
/* -------------------------------------------------------------------------- */
function capturarDatos() {
    const titulo = document.querySelector('#titulo');
    const comentario = document.querySelector('#comentario');

    // armamos el objeto basado en lo que nos pide la api
    let objeto = {
        title: titulo.value,
        body: comentario.value,
        userId: 1,
      }

    return objeto;
}

/* -------------------------------------------------------------------------- */
/*                    [3] FUNCION: enviar(postear) a la API                   */
/* -------------------------------------------------------------------------- */
// Nos basamos en la documentacion de la API:
// https://jsonplaceholder.typicode.com/guide/

function postearComentario() {
    // 👇 usamos nuestra funcion para capturar los datos y guardarlos como objeto
    const datos = capturarDatos();

    // 👇 armamos las configuraciones
    // la api acepta JSON, por eso stringuificamos los datos
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    fetch('https://jsonplaceholder.typicode.com/posts', configuraciones)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data);
            renderizarRespuesta(data);
        });
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: renderizar respuesta                     */
/* -------------------------------------------------------------------------- */

function renderizarRespuesta(datos) {
    const div = document.querySelector('.respuesta')
    
    const template = `
        <p>✅ Datos cargados en el servidor</p>
        <p>
            Title: ${datos.title}
        </p>
        <p>
            Body: ${datos.body}
        </p>
    `;

    div.innerHTML = template;

}


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// En este caso vamos a trabajar la conexion con APIS,
// en el siguiente DOC vamos a poder ver nuestra tarea
// 👇
// https://docs.google.com/document/d/1ZiCPf7IICvtp6rwfxoq5Wh5dJUROKqNw/preview