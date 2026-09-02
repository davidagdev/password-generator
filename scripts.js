const generateBtn = document.getElementById("generate");
const slider = document.getElementById("slider");
const langBtn = document.getElementById("lang-btn");

const simbol = "@()[]{}*,;/-_¿?.¡!$<>#&+%";
const number = "1234567890";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";

let currentLang = "es";

const translations = {
    es: {
        title: "Generador de contraseñas",
        symbols: "Caracteres especiales",
        numbers: "Números",
        uppercase: "Mayúsculas",
        lowercase: "Minúsculas",
        length: "Longitud contraseña",
        generate: "Generar contraseña",
        placeholder: "Click en el botón generar contraseña",
        alertEmpty: "Por favor, selecciona al menos un tipo de carácter.",
        alertMinLength: "Debes seleccionar una longitud de al menos {min} para incluir todos los tipos seleccionados."
    },
    en: {
        title: "Password Generator",
        symbols: "Special characters",
        numbers: "Numbers",
        uppercase: "Uppercase",
        lowercase: "Lowercase",
        length: "Password length",
        generate: "Generate password",
        placeholder: "Click the generate password button",
        alertEmpty: "Please select at least one character type.",
        alertMinLength: "You must select a length of at least {min} to include all selected types."
    }
};

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    langBtn.textContent = currentLang === "es" ? "EN" : "ES";

    // Actualiza el atributo lang del documento HTML
    document.documentElement.lang = currentLang;

    // Recorre todos los elementos con la propiedad data-key y actualiza su texto
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});

generateBtn.addEventListener("click", () => {
    const hasSimbol = document.getElementById("simbol").checked;
    const hasNumber = document.getElementById("num").checked;
    const hasMayus = document.getElementById("mayus").checked;
    const hasMinus = document.getElementById("minus").checked;
    const length = parseInt(slider.value);

    let allowedChars = "";
    let mandatoryChars = [];

    if (hasSimbol) {
        allowedChars += simbol;
        mandatoryChars.push(simbol[Math.floor(Math.random() * simbol.length)]);
    }
    if (hasNumber) {
        allowedChars += number;
        mandatoryChars.push(number[Math.floor(Math.random() * number.length)]);
    }
    if (hasMayus) {
        allowedChars += mayus;
        mandatoryChars.push(mayus[Math.floor(Math.random() * mayus.length)]);
    }
    if (hasMinus) {
        allowedChars += minus;
        mandatoryChars.push(minus[Math.floor(Math.random() * minus.length)]);
    }

    if (allowedChars === "") {
        alert(translations[currentLang].alertEmpty);
        return;
    }

    if (length < mandatoryChars.length) {
        const alertMsg = translations[currentLang].alertMinLength.replace("{min}", mandatoryChars.length);
        alert(alertMsg);
        return;
    }

    let passwordArray = [...mandatoryChars];
    for (let i = mandatoryChars.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwordArray.push(allowedChars[randomIndex]);
    }

    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }

    const password = passwordArray.join("");

    const outputText = document.querySelector("main output p");
    if (outputText) {
        outputText.innerText = password;
    }
});