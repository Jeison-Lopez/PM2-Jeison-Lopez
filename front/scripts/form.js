//TODO : Implementar una función que maneje el evento de limpieza del formulario y se encargue de seleccionar y vaciar el value de los inputs.

// Acceder el botón de limpiar y el formulario
const clear = document.getElementById("clear");
const form = document.getElementById("form");
// Función que maneja el evento de limpieza
const cb = () => {
  // Selecciono todos los inputs dentro del formulario
  const inputs = document.querySelectorAll("input");
  // Itero sobre cada input para limpiar si contenido
  inputs.forEach((input) => {
    input.value = "";
  });
};

// Agregar even listener para el boton
clear.addEventListener("click", cb);

//TODO : Implementar una función que maneje el evento de envío de formulario, que por el momento se encargará de seleccionar los inputs, y validar que todos los datos estén completos.

// Función que maneja el evento de envío
const cbSend = (event) => {
  // Selecciono todos los inputs dentro del formulario
  const inputs = document.querySelectorAll("input");
  // Itero sobre cada input y verifico si está vacío
  // Utilizo const para que la varible de control input tenga un ámbito de bloque y éste limitada al contexto del bucle, evitando así problemas de ámbito y posibles efectos no deseados en otras partes del código.
  for (const input of inputs) {
    // En cada iteración, se verifica si el valor del input está vacío utilizando !input.value.trim(). input.value obtiene el valor del input actual y trim() elimina los espacios en blanco del principio y del final. Si el valor del input está vacío después de quitar los espacios en blanco, !input.value.trim() será true, lo que significa que el input está vacío.
    if (!input.value.trim()) {
      // Si algún campo está vacío entonces evito que el formulario se envíe
      event.preventDefault();
      return;
    }
  }
  console.log("¡El formulario se envió con éxito!");
};

// Event listener para el envío de datos
form.addEventListener("submit", cbSend);
