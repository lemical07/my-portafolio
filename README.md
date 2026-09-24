# Portafolio Web

Portafolio personal de **Selvin Eladio Lem Ical**, Técnico en Desarrollo de Software con enfoque backend. Desarrollado con HTML, CSS y JavaScript puros, sin frameworks ni librerías.

**Sitio publicado:** [lemical07.github.io/my-portafolio](https://lemical07.github.io/my-portafolio/)

## Descripción

Sitio de una sola página que presenta el perfil profesional, las habilidades técnicas y blandas, los proyectos realizados, la trayectoria y los medios de contacto.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura y contenido del sitio |
| CSS3 | Estilos, variables, diseño responsive con `grid` y `flexbox` |
| JavaScript | Menú móvil (abrir, cerrar y accesibilidad) |

La tipografía es [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), cargada desde Google Fonts.

## Estructura del proyecto

```
my-portafolio/
├── index.html
├── README.md
├── css/
│   ├── variables.css      # Paleta de colores y variables comunes
│   ├── components.css     # Estilos base y de cada componente
│   └── responsive.css     # Ajustes para tablet y celular
├── docs/
│   └── cv-selvin-eladio-lem-ical.pdf
├── img/
│   ├── bot.png
│   ├── Designer.png
│   ├── favicon.png
│   ├── logo.png
│   ├── oms.jpg
│   ├── parking.png
│   ├── perfil.jpg
│   └── store.png
└── js/
    └── index.js           # Menú móvil
```

## Secciones

- **Inicio:** presentación, título profesional y botones para ver proyectos y descargar el CV.
- **Sobre mí:** resumen profesional y forma de trabajo.
- **Proyectos:** tarjetas con descripción, tecnologías utilizadas y enlace al repositorio.
- **Habilidades:** técnicas, agrupadas por área, y blandas.
- **Trayectoria:** experiencia, formación, educación complementaria e idiomas.
- **Contacto:** teléfono, correo, GitHub, LinkedIn y Discord.

## Detalles técnicos

- Estilos divididos en tres archivos: variables, componentes y responsive.
- Paleta azul marino y celeste con colores planos, sin degradados ni sombras.
- Bordes sólidos de 1px y esquinas redondeadas.
- Diseño responsive con puntos de quiebre en 900px y 760px.
- Menú tipo hamburguesa en celular: se cierra al tocar un enlace, al tocar fuera del menú o al presionar `Esc`.
- Imágenes ajustadas con `aspect-ratio` y `object-fit: cover` para evitar deformaciones.
- Accesibilidad: atributos `aria`, foco visible con teclado y respeto a la preferencia de movimiento reducido.

## Cómo verlo en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/lemical07/my-portafolio.git
   ```
2. Abre `index.html` en el navegador, o usa la extensión **Live Server** de VS Code.

## Estado del proyecto

En desarrollo: se irán agregando nuevas secciones y mejoras de estilo de forma progresiva.

## Autor

**Selvin Eladio Lem Ical**
[GitHub](https://github.com/lemical07) • [LinkedIn](https://www.linkedin.com/in/selvin-lem-764078425/)