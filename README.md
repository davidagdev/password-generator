# 🔐 Password Generator / Generador de Contraseñas

[Español](#español) | [English](#english)

---

<a name="español"></a>
## 🇪🇸 Español

### Descripción del Proyecto
Una aplicación web sencilla e interactiva para generar contraseñas seguras y personalizadas en función de las preferencias del usuario.

### Estructura del Proyecto
- `index.html`: Estructura semántica de la interfaz de usuario.
- `scripts.js`: Lógica principal de generación de contraseñas y control de la interfaz.
- `styles.css`: Hojas de estilo para el diseño visual.

### ✨ Características Principales
- **Generación Segura:** Garantiza que al menos aparezca un carácter de cada categoría seleccionada (mayúsculas, minúsculas, números, símbolos) en la contraseña final.
- **Soporte Bilingüe (i18n):** Selector/conmutador para cambiar el idioma de la interfaz a inglés.

### 📜 Historial de Desarrollo (Changelog)
- **Inicialización:** Creación del repositorio con `README.md` inicial y subida de archivos base (`index.html`, `scripts.js`, `styles.css`).
- **Mejora de Lógica (`scripts.js`):** Modificación del algoritmo para asegurar la inclusión de al menos un carácter por cada categoría seleccionada.
- **Refactorización:** Eliminación temporal de la funcionalidad del botón de copiar al portapapeles (*clipboard*) para mejorar/rediseñar la funcionalidad en futuras versiones.
- **Internacionalización (i18n):** Implementación del conmutador de traducción a inglés afectando a los tres archivos del proyecto.
- **Corrección i18n (`fix`):** Solucionado un error que no traducía las etiquetas/textos de los carácteres especiales al cambiar el idioma a inglés.

---

<a name="english"></a>
## 🇬🇧 English

### Project Description
A simple and interactive web application to generate secure, customized passwords based on user selection.

### Project Structure
- `index.html`: Semantic structure of the user interface.
- `scripts.js`: Core password generation logic and interface control.
- `styles.css`: Styling and layout.

### ✨ Key Features
- **Secure Generation:** Ensures at least one character from each selected category (uppercase, lowercase, numbers, symbols) is included in the generated password.
- **Bilingual Support (i18n):** Toggle switch to translate the interface into English.

### 📜 Development History (Changelog)
- **Initialization:** Repository setup with initial `README.md` and primary files upload (`index.html`, `scripts.js`, `styles.css`).
- **Logic Improvement (`scripts.js`):** Enhanced password generation logic to ensure at least one character per selected variable category.
- **Refactoring:** Removed clipboard button functionality temporarily across files (under evaluation for future re-implementation).
- **Internationalization (i18n):** Added English translation toggle switch with updates across HTML, JS, and CSS files.
- **i18n Fix (`fix`):** Fixed an issue where special character labels were not being translated into English when toggling the language.