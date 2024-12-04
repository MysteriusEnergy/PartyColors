const headerTitulo = document.querySelector("header h1");
const colorContainer = document.querySelector(".container_colors");
const mensajePopular = document.querySelector("#mensaje-popular"); // Un elemento para mostrar el mensaje dinámico

// Objeto para llevar el conteo de votos
const votos = {
    yellow: 0,
    blue: 0,
    red: 0,
    sorpresa: 0,
};

// Temporizador de inactividad
let temporizadorInactividad;

// Función para reiniciar la fiesta por inactividad
function reiniciarPorInactividad() {
    reseteaFiesta();
    alert("La fiesta se reinició por inactividad");
}

// Función para reiniciar el temporizador de inactividad
function reiniciarTemporizador () {
    clearTimeout(temporizadorInactividad); // Detener cualquier temporizador existente
    temporizadorInactividad = setTimeout(reiniciarPorInactividad, 20000); // Reiniciar el temporizador a 20 segundos
    console.log(temporizadorInactividad);
    
}


// Cambiar título según el color
function changeTitle(color, texto) {
    reiniciarTemporizador();
    const sound = new Audio();

    if (texto) {
        headerTitulo.textContent = texto;
        headerTitulo.style.color = color;
        sound.src = "./assets/efects/campana.mp3";
        votos.sorpresa++; // Incrementar votos para colores sorpresa
    } else if (color === "yellow") {
        headerTitulo.textContent = "¡El color amarillo ilumina la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "yellow";
        sound.src = "./assets/efects/pedo.mp3";
        votos.yellow++; // Incrementar votos para amarillo
    } else if (color === "blue") {
        headerTitulo.textContent = "¡El color azul refresca la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "blue";
        sound.src = "./assets/efects/pedo.mp3";
        votos.blue++; // Incrementar votos para azul
    } else if (color === "red") {
        headerTitulo.textContent = "¡El color rojo calienta la fiesta mi papacho! 🎉";
        headerTitulo.style.color = "red";
        sound.src = "./assets/efects/pedo.mp3";
        votos.red++; // Incrementar votos para rojo
    }

    sound.play();
    actualizarColorPopular();
}

// Agregar color sorpresa
function agregaColorSorpresa() {
    reiniciarTemporizador();
    const nuevoColor = document.createElement("div");
    const colorAleatorio = getRandomColor(); // Generar un color aleatorio
    nuevoColor.style.backgroundColor = colorAleatorio;
    nuevoColor.style.width = "60px";
    nuevoColor.style.height = "60px";
    nuevoColor.style.borderRadius = "50%";
    nuevoColor.style.cursor = "pointer";

    // Agregamos el nuevo color al contenedor principal
    colorContainer.appendChild(nuevoColor);

    // Cambiar título y registrar votos al hacer clic en el color sorpresa
    nuevoColor.addEventListener("click", () => {
        changeTitle(colorAleatorio, "¡Un color sorpresa se une a la fiesta! 🎉");
    });
}

// Reiniciar fiesta
function reseteaFiesta() {
    reiniciarTemporizador(); // Reiniciar el temporizador en cada interacción
    // Cambiar el texto a como estaba
    headerTitulo.textContent = "¡Bienvenido a la Fiesta de Colores! 🎉";
    headerTitulo.style.color = "";

    // Eliminar solo los colores sorpresa
    const coloresAdicionales = colorContainer.querySelectorAll(".container_colors > div:not(.div_colors)");
    coloresAdicionales.forEach(color => color.remove());

    // Reiniciar votos
    for (const key in votos) {
        votos[key] = 0;
    }

    // Actualizar el mensaje dinámico
    mensajePopular.textContent = "¡Todavía no hay un color más popular!";
}

// Generar color aleatorio
function getRandomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Actualizar mensaje del color más popular
function actualizarColorPopular() {
    const colores = Object.keys(votos);
    let maxVotos = 0;
    let colorPopular = "";

    colores.forEach(color => {
        if (votos[color] > maxVotos) {
            maxVotos = votos[color];
            colorPopular = color;
        }
    });

    if (maxVotos > 0) {
        mensajePopular.textContent = `El color más popular es: ${colorPopular.toUpperCase()} con ${maxVotos} votos. 🎉`;
    } else {
        mensajePopular.textContent = "¡Todavía no hay un color más popular!";
    }
}

// Inicializar el temporizador al cargar la página
reiniciarTemporizador();
