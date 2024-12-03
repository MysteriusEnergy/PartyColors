const headerTitulo = document.querySelector("header h1");
const colorContainer = document.querySelector(".container_colors");


// cambiar titulo segun el color 

function changeTitle(color) {
    if (color === "yellow") {
        headerTitulo.textContent = "¡El color amarillo ilumina la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "yellow";
    } else if (color === "blue") {
        headerTitulo.textContent = "¡El color azul refresca la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "blue";
    } else if (color === "red") {
        headerTitulo.textContent = "¡El color rojo caliente la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "red";
    }
}

// Agregar color sopresa

function agregaColorSorpresa() {
    const nuevoColor = document.createElement("div");
    nuevoColor.style.backgroundColor = getRandomColor();
    nuevoColor.style.width = "60px";
    nuevoColor.style.height = "60px";
    nuevoColor.style.borderRadius = "50%";
    nuevoColor.style.cursor = "pointer";


    // Agregamos el nuevo color al contenedor principal
    colorContainer.appendChild(nuevoColor);

    // Cambiar titulo al hacer click en el color sorpresa
    
    nuevoColor.addEventListener("click", () => {
        headerTitulo.textContent = "¡Un color sorpresa se une a la fiesta! 🎉";
    });


}



// Reiniciar Fiesta
function reseteaFiesta() {
  // Cambiamos el texto a como estaba
  headerTitulo.textContent = "¡Bienvenido a la Fiesta de Colores! 🎉";

  // Cambiamos el color a negro como estaba
  headerTitulo.style.color = "";

  // Eliminamos solo los colores sorpresa
  const colorAdicional = colorContainer.querySelectorAll("div:not(.yellow):not(.blue):not(.red)");
  colorAdicional.forEach(color => color.remove());
}




function getRandomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];

    }
    
    return color;

}