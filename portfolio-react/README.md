# Portfolio React

Este es un portafolio personal desarrollado en React.js, diseñado para mostrar mis proyectos y habilidades como ingeniero de sistemas. La aplicación utiliza un tema oscuro y es completamente responsive, asegurando una experiencia de usuario óptima en dispositivos de diferentes tamaños.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

### Archivos Principales
- **package.json**: Define las dependencias del proyecto y scripts de ejecución.
- **public/**: Contiene los archivos estáticos.
  - **index.html**: Plantilla HTML principal donde se monta la aplicación React.
  - **favicon.ico**: Icono del sitio web.

### Carpeta src/
Contiene todo el código fuente de la aplicación:

#### Componentes Core (src/)
- **App.jsx**: Componente principal que configura las rutas y la estructura general de la aplicación. Implementa React Router para la navegación y maneja efectos de animación globales.
- **index.jsx**: Punto de entrada de la aplicación que renderiza el componente App en el DOM.
- **App.css**: Estilos globales de la aplicación, incluyendo la barra de progreso de scroll y efectos de revelación.
- **index.css**: Estilos base y configuración de Tailwind CSS.

#### Assets (src/assets/)
- **font/**: Contiene las fuentes personalizadas utilizadas en el proyecto.
- **images/**: Almacena imágenes como fondos y recursos gráficos.
  - **hero-background.jpg**: Imagen de fondo para la sección hero.

#### Componentes (src/components/)
- **Navbar/**: 
  - **Navbar.jsx**: Implementa la barra de navegación responsive con toggle para dispositivos móviles.
  - **Navbar.css**: Estilos para la navegación, incluyendo efectos hover y animaciones.
  
- **Header/**: 
  - **Header.jsx**: Componente de cabecera con animaciones y presentación principal.
  - **Header.css**: Estilos para la cabecera, incluyendo efectos de gradiente.
  
- **HeroSection/**: 
  - **HeroSection.jsx**: Sección de presentación principal con llamada a la acción.
  - **HeroSection.css**: Estilos para la sección hero con fondo de imagen y efectos.
  
- **SkillsSection/**: 
  - **SkillsSection.jsx**: Muestra las habilidades técnicas con barras de progreso animadas.
  - **SkillsSection.css**: Estilos para la visualización de habilidades y animaciones.
  
- **Projects/**: 
  - **FeaturedProjects.jsx**: Muestra los proyectos destacados con efectos de revelación.
  - **FeaturedProjects.css**: Estilos para las tarjetas de proyectos destacados.
  
- **ProjectCard/**: 
  - **ProjectCard.jsx**: Componente reusable para mostrar información de un proyecto.
  - **ProjectCard.css**: Estilos para las tarjetas de proyectos con efectos hover.
  
- **Experience/**: 
  - **Experience.jsx**: Muestra la experiencia académica y profesional en formato timeline.
  - **Experience.css**: Estilos para la línea de tiempo de experiencia.
  
- **Contact/**: 
  - **ContactForm.jsx**: Formulario de contacto interactivo con validación.
  - **ContactForm.css**: Estilos para el formulario y efectos de interacción.
  
- **Footer/**: 
  - **Footer.jsx**: Pie de página con enlaces sociales y copyright.
  - **Footer.css**: Estilos para el pie de página y efectos hover en links.
  
- **ScrollToTop/**: 
  - **ScrollToTop.jsx**: Botón para volver al inicio de la página con animaciones.
  - **ScrollToTop.css**: Estilos para el botón flotante con efectos de transición.

#### Páginas (src/pages/)
- **Home/**: 
  - **Home.jsx**: Página principal que integra varios componentes (HeroSection, SkillsSection, etc.).
  - **Home.css**: Estilos específicos para la página de inicio.
  
- **Projects/**: 
  - **Projects.jsx**: Página que muestra todos los proyectos con filtrado.
  - **Projects.css**: Estilos para la página de proyectos con grid responsivo.
  
- **Contact/**: 
  - **Contact.jsx**: Página de contacto con formulario y datos de contacto.
  - **Contact.css**: Estilos para la página de contacto.

#### Temas y Utilidades
- **themes/**: Define la paleta de colores y estilos generales.
  - **darkTheme.js**: Configuración del tema oscuro con variables de colores.
  
- **utils/**: Contiene funciones de utilidad reutilizables.
  - **helpers.js**: Funciones auxiliares como formatDate, generateSlug y scrollToSection.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd portfolio-react
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia la aplicación:
   ```
   npm start
   ```

## Uso

Una vez que la aplicación esté en funcionamiento, podrás navegar por las diferentes secciones del portafolio, incluyendo mis proyectos y habilidades. La navegación es intuitiva y está diseñada para ser accesible en todos los dispositivos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.