var language = "en"

const translates =
{
    "es":{
        "<Main>": "<Principal>",
        "<Projects>": "<Proyectos>",
        "<Skills>": "<Aptitudes>",
        "Welcome!": "Bienvenido!",
        "Hello! I'm Martín Piampiani, a backend developer based in Argentina. I'm dedicated to honing my skills in backend development and actively seeking opportunities to contribute to diverse projects. Despite being new to the field, I'm passionate about learning and growing in this industry.":"¡Hola! Soy Martín Piampiani, desarrollador Backend de Argentina. Estoy dedicado a perfeccionar mis habilidades en el desarrollo backend y buscando activamente oportunidades para contribuir en proyectos diversos. A pesar de ser nuevo en el campo, estoy emocionado por aprender y crecer en esta industria.",
        "Feel free to let me know if there's anything else I can assist you with!" : "Si necesitas algo, no dudes en decírmelo.",
        "Download CV":"Descargar CV",
        "Projects":"Proyectos",
        "View repository on GitHub":"Ver repositorio en GitHub",
        "Skills":"Aptitudes",
        "API Rest with FastAPI": "API Rest con FastAPI",
        "Data Manipulation and analysis":"Manipulación y análisis de datos.",
        "Proficient in object-oriented programming":"Programacion Orientada a Objetos",
        "Windows Forms applications":"Aplicaciones con Windows Forms",
        "Database Managment":"Gestión de Bases de Datos",
        "Database Designs":"Diseño de Bases de Datos",
        "Responsive Design":"Diseño Adaptable"
    },
    "en":{
        "<Principal>":"<Main>" ,
        "<Proyectos>": "<Projects>",
        "<Aptitudes>":"<Skills>" ,
        "Bienvenido!": "Welcome!",
        "¡Hola! Soy Martín Piampiani, desarrollador Backend de Argentina. Estoy dedicado a perfeccionar mis habilidades en el desarrollo backend y buscando activamente oportunidades para contribuir en proyectos diversos. A pesar de ser nuevo en el campo, estoy emocionado por aprender y crecer en esta industria.":"Hello! I'm Martín Piampiani, a backend developer based in Argentina. I'm dedicated to honing my skills in backend development and actively seeking opportunities to contribute to diverse projects. Despite being new to the field, I'm passionate about learning and growing in this industry.",
        "Si necesitas algo, no dudes en decírmelo.":"Feel free to let me know if there's anything else I can assist you with!",
        "Descargar CV":"Download CV",
        "Proyectos":"Projects",
        "Ver repositorio en GitHub":"View repository on GitHub",
        "Aptitudes":"Skills",
        "API Rest con FastAPI":"API Rest with FastAPI",
        "Manipulación y análisis de datos.":"Data Manipulation and analysis",
        "Programacion Orientada a Objetos":"Proficient in object-oriented programming",
        "Aplicaciones con Windows Forms":"Windows Forms applications",
        "Gestión de Bases de Datos":"Database Managment",
        "Diseño de Bases de Datos":"Database Designs",
        "Diseño Adaptable":"Responsive Design"
    }

}

function update(){
    if (language == "en"){language = "es"}
    else{language = "en"}
    const elements = document.querySelectorAll('p, h1, h2, a')
    for (let i = 0; i < elements.length; i++) {
        const content = elements[i].innerText;
        if (language == "es"){
            if (translates.es.hasOwnProperty(content)) {
                elements[i].innerText = translates.es[content];
            }
        }
        if (language == "en"){
            if (translates.en.hasOwnProperty(content)) {
                elements[i].innerText = translates.en[content];
            }
        }
}}

// TODO: Fix projects margin, add functionality to translate button