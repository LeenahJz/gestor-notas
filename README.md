# 📝 Gestor de Notas con React 

![Logo](src/assets/notes.jpeg)

Aplicación de notas con estilo pixel art, desarrollada con **React y Vite**. Permite a los usuarios crear, editar y eliminar notas de manera sencilla. Persistencia en localStorage y geolocalización.

## **🛠️ Tecnologías**
- React + Vite
- Service Workers (PWA)
- LocalStorage API
- Geolocation API
- Pixelify Sans Font

## **✨ Features destacados**
- **CRUD completo** de notas
- **Captura de imágenes** en base64
- **Geolocalización** con coordenadas
- **Animaciones pixeladas** al interactuar
- **Diseño responsive** para móviles

## **📌 Características**

- ✅ **Crear, editar y eliminar notas** en una interfaz amigable.
- ✅ **Organización de notas** en un listado dinámico.
- ✅ **Diseño responsivo** para dispositivos móviles y escritorio.
- ✅ **Código modular y escalable** con componentes reutilizables.
- ✅ **Preparada para integrar localStorage, imágenes y geolocalización** (próxima implementación).

## **📁 Estructura del Proyecto**

```plaintext
├── README.md                  # Documentación del proyecto
├── eslint.config.js            # Configuración de ESLint para buenas prácticas
├── index.html                  # Archivo HTML principal
├── package.json                # Dependencias y scripts de la aplicación
├── public/
│   └── vite.svg                # Logo de Vite
├── src/
│   ├── App.jsx                 # Componente principal de la aplicación
│   ├── assets/                 # Recursos estáticos (imágenes, logos)
│   │   ├── logo.jpeg           # Logo del proyecto
│   │   └── react.svg           # Logo de React
│   ├── components/             # Componentes reutilizables
│   │   ├── NoteCard.jsx        # Componente para mostrar una nota individual
│   │   ├── NoteForm.jsx        # Componente para agregar/editar notas
│   │   └── NotesList.jsx       # Componente que muestra la lista de notas
│   ├── data/
│   │   └── notes.js            # Datos iniciales de las notas (simulación de DB)
│   ├── main.jsx                # Punto de entrada de React
│   ├── pages/                  # Sección para futuras páginas adicionales
└── vite.config.js              # Configuración de Vite para optimización
```

## **🚀 Instalación y Ejecución**

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clonar el Repositorio

```bash
git clone https://github.com/adalid-cl/ESPECIALIZACION_FRONTEND_M6_AE2
cd ESPECIALIZACION_FRONTEND_M6_AE2
```

2. Instalar Dependencias

```bash
npm install
```

3. Ejecutar la Aplicación

```bash
npm run dev
```

Luego, abre tu navegador y accede a **`http://localhost:5173`**.

## 📈 Evolución del proyecto
| Versión | Cambios principales |
|---------|---------------------|
| 1.0     | CRUD básico         |
| 1.1     | Añadida PWA         |
| 1.2     | Geolocalización     |
| 1.3     | Mejoras de diseño   |

## Autores

- [Brayan Diaz C](https://github.com/brayandiazc)
- [Alejandra Beltran](https://github.com/LeenahJz)

## 🎨 Paleta de colores
![Paleta](https://via.placeholder.com/150x100/e2d1f9/e2d1f9.png) ![#e2d1f9](https://via.placeholder.com/50x30/e2d1f9/000000?text=+) `#E2D1F9`  
![#d8b4f8](https://via.placeholder.com/50x30/d8b4f8/000000?text=+) `#D8B4F8`  
![#5a2d8a](https://via.placeholder.com/50x30/5a2d8a/ffffff?text=+) `#5A2D8A`
