const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");
const slider = document.getElementById("slider");

const simbol = "@()[]{}*,;/-_¿?.¡!$<>#&+%";
const number = "1234567890";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";

generateBtn.addEventListener("click", () => {
    const hasSimbol = document.getElementById("simbol").checked;
    const hasNumber = document.getElementById("num").checked;
    const hasMayus = document.getElementById("mayus").checked;
    const hasMinus = document.getElementById("minus").checked;
    const length = parseInt(slider.value);

    let allowedChars = "";

    if (hasSimbol) allowedChars += simbol;
    if (hasNumber) allowedChars += number;
    if (hasMayus) allowedChars += mayus;
    if (hasMinus) allowedChars += minus;

    if (allowedChars === "") {
        alert("Por favor, selecciona al menos un tipo de carácter.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    const outputText = document.querySelector("main output p");
    if (outputText) {
        outputText.innerText = password;
    }
});

clipboardBtn.addEventListener("click", () => {
    const outputText = document.querySelector("main output p").innerText;

    if (!outputText || outputText === "Click en el botón generar contraseña") {
        alert("Primero debes generar una contraseña.");
        return;
    }

    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert("¡Contraseña copiada al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });
});