const id = (id) => {
    return document.getElementById(id);
}; 

let mensajeError = [];

function validar(e) {
    e.preventDefault();
    mensajeError = [];

    //! Validaciones actuales

    //! Validar correo electrónico
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(id("correo").value.trim()) ? mensajeError.push("El correo electrónico no es válido") : null;

    //! Validar Nombre / Apellido
    id("nombre").value.trim().length === 0 ? mensajeError.push("El nombre es obligatorio") : null;
    id("apellido").value.trim().length === 0 ? mensajeError.push("El apellido es obligatorio") : null;
    !/^[a-zA-Z0-9]*$/.test(id("nombre").value.trim()) ? mensajeError.push("El nombre solo puede contener caracteres válidos") : null;
    !/^[a-zA-Z0-9]*$/.test(id("apellido").value.trim()) ? mensajeError.push("El apellido solo puede contener caracteres válidos") : null;

    //! Validar mensaje
    id("mensaje").value.trim().length < 10 ? mensajeError.push("El mensaje debe tener al menos 10 caracteres") : null;

    //! Validar telefono
    !/^\d{9}$/.test(id("telefono").value.trim()) ? mensajeError.push("El teléfono no es válido") : null;

    if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")) {
        id("formulario").submit();
    } else if (mensajeError.length > 0) {
        id("error").textContent = "";
        mensajeError.forEach(function (error){
            const createLi = document.createElement("li");
            createLi.textContent = error;
            id("error").appendChild(createLi);
        });
    }
}

id("enviar").addEventListener("click", validar);

