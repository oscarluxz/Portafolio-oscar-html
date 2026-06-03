console.log("JavaScript");

const boton = document.getElementById("btnHobbies");
const hobbies = document.getElementById("hobbies");

boton.addEventListener("click", function() {
    console.log("Botón presionado");

    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
    } else {
        hobbies.style.display = "none";
    }
});