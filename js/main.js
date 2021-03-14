const $form = document.formulario;

const nombre = document.querySelector("#nombre").value;
const ciudad = document.querySelector("#ciudad").value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = document.querySelector("#descripcion-regalo").value

function validarNombre(nombre) {
    
    if (nombre.length < 1) {
        return "El nombre no puede estar vacío"
    } else if (nombre.length > 50) {
        return "El nombre tiene que ser menor a 50 caracteres"
    } else if (!/[a-z]+$/i.test(nombre)) {
        return "El nombre tiene que ser solo letras"
    } else return ""

}

function validarCiudad(ciudad) {
    
    if (ciudad.length === 0) {
        return "El campo ciudad no puede estar vacío"
    } else if (ciudad.value === "Buenos Aires") {
        return "El campo ciudad es valido"
    } else return ""
}

function validarDescripcionRegalo(descripcionRegalo) {
    
    if (descripcionRegalo.length >= 100) {
        return "El campo descripción es muy largo"

    } else if (descripcionRegalo === 0) {
        return "El campo Descripcion no puede estar vacío";

    } else if (/[a-z0-9]+$/.test(descripcionRegalo)) {
        return "El campo descripción solo puede tener números y letras";

    }


}

