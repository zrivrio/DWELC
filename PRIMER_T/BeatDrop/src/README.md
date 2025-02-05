# BeatDrop: Gestión de Músicos

## Descripción
El proyecto consiste en la realacion de uno a muchos. E mi caso he elegido a las entidades Musicos -> Albumes y le he puesto el nombre de **BeatDrop** al proyecto
El proyecto proporciona las vitas de albumes y musicos de forma dinamica, ademas de dos formlurarios (crear y editar) tanto como para albumes y para musicos.
Los formularios solo se encunetran las vistas craedas mas adelante se podra implemetar paar que funciones.

## Estructura del Proyecto
BeatDrop/src/
├── assets/
│   ├── logo/
│       └── logo.png           # Logo del proyecto
│   ├── Musicos                # Carpeta con tada las imagenes de los Musicos
│   └── Albumes                # Carpeta con tada las imagenes de los Albunes
│
├── css/
│   └── main.css               # Hoja de estilos principal
│
├── Musicos/
│   ├── listaMusicos.html      # Página de la lista de músicos
│   ├── crearMusicos.html      # Página para crear a músicos
│   ├── esitarMusicos.html     # Página para editar a músicos
│   ├── muscosController.js    # Controlador que gestiona la logica
│   ├── musicos.css            # Hoja de estilos especializada
│   ├── README.md              # Archivo de documentación del personal
│   └── musicos.js    
│
├── Musicos/
│   ├── listaAlbumes.html      # Página de la lista de albumes
│   ├── crearAlbumes.html      # Página para crear a albumes
│   ├── esitarAlbumes.html     # Página para editar a albumes
│   ├── albumesController.js   # Controlador que gestiona la logica
│   ├── albumes.css            # Hoja de estilos especializada
│   ├── README.md              # Archivo de documentación del personal
│   └── musicos.js   
│
├── assets/
│ ├── musicos.js               # Archivo JS para almacenar datos de musicos
│ └── albumes.js               # Archivo JS para almacenar datos de albumes
│
├── main.js                    # Archivo JavaScript principal
│
├── index.html                 # Página principal del proyecto
│
├── package.json               # Información y dependencias del proyecto
│
└── README.md                  # Archivo de documentación del proyecto

