# Portfolio Profesional - Luis Fernando Benavides Rengifo

Portafolio web moderno y profesional construido con React + Vite, diseñado para reflejar autoridad técnica contemporánea y experiencia senior en desarrollo de software.

## 🚀 Características

- ✨ **Diseño Moderno 2024-2025**: Glassmorphism, dark/light mode, micro-interacciones
- 🌐 **Multiidioma (i18n)**: Soporte completo para Español e Inglés
- 🎨 **Sistema de Temas**: Modo oscuro/claro conmutable en tiempo real
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Build optimizado con Vite
- 🎯 **SEO Friendly**: Meta tags y estructura semántica
- ♿ **Accesibilidad**: ARIA labels y navegación por teclado

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.2.0 | Framework UI |
| **Vite** | 5.0.8 | Build tool y dev server |
| **CSS Modules** | - | Estilos con scope local |
| **Context API** | - | Estado global (tema/idioma) |

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── assets/              # Imágenes, iconos
│   └── favicon.svg          # Favicon del sitio
│
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── LanguageToggle.jsx
│   │   │
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   └── sections/        # Secciones de la página
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── Portfolio.jsx
│   │       └── Contact.jsx
│   │
│   ├── contexts/
│   │   ├── ThemeContext.jsx      # Manejo de tema dark/light
│   │   └── LanguageContext.jsx   # Manejo de idioma ES/EN
│   │
│   ├── locales/
│   │   ├── es.json          # Traducciones en español
│   │   └── en.json          # Traducciones en inglés
│   │
│   ├── styles/
│   │   ├── variables.css    # Variables CSS (colores, tipografías)
│   │   └── global.css       # Estilos globales y reset
│   │
│   ├── hooks/
│   │   └── useIntersectionObserver.js  # Hook para animaciones
│   │
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Entry point
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Ventajas de esta Arquitectura

- **Separación de concerns**: UI, lógica, datos y estilos claramente separados
- **Escalabilidad**: Fácil agregar nuevas secciones o componentes
- **Mantenibilidad**: Localización centralizada, componentes modulares
- **Reutilización**: Componentes comunes compartidos en toda la app

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/luisfben/luisfben.github.io.git
cd luisfben.github.io

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

### Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

## 🌐 Sistema de Internacionalización (i18n)

### Cómo Funciona

El sistema i18n utiliza **React Context API** + archivos JSON para manejar traducciones:

1. **Archivos de traducción**: `src/locales/es.json` y `src/locales/en.json`
2. **Context Provider**: `LanguageContext` carga dinámicamente las traducciones
3. **Hook personalizado**: `useLanguage()` proporciona función `t()` para traducir

### Agregar/Modificar Traducciones

Edita los archivos JSON en `src/locales/`:

```json
// src/locales/es.json
{
  "nav": {
    "about": "Sobre mí",
    "services": "Servicios"
  },
  "hero": {
    "title": "Arquitecto de Software"
  }
}
```

### Usar Traducciones en Componentes

```jsx
import { useLanguage } from '../../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <h1>{t('hero.title')}</h1>;
};
```

### Agregar un Nuevo Idioma

1. Crear archivo `src/locales/[codigo].json` (ej: `fr.json`)
2. Copiar estructura de `es.json` y traducir
3. Agregar opción en `LanguageToggle.jsx`:

```jsx
<button onClick={() => setLanguage('fr')}>FR</button>
```

## 🎨 Sistema de Temas (Dark/Light Mode)

### Variables CSS

Los temas se definen en `src/styles/variables.css`:

```css
:root[data-theme="dark"] {
  --bg: #0b0f1a;
  --text: #e7eaf4;
  --primary: #0ea5e9;
}

:root[data-theme="light"] {
  --bg: #f7f8fb;
  --text: #0b1220;
  --primary: #0ea5e9;
}
```

### Cambiar Tema

El tema se maneja con `ThemeContext`:

```jsx
import { useTheme } from '../../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
```

## 📝 Modificar Contenido

### Proyectos del Portfolio

Edita las traducciones en `src/locales/es.json` y `en.json`:

```json
{
  "portfolio": {
    "projects": {
      "myProject": {
        "title": "Mi Proyecto",
        "description": "Descripción del proyecto",
        "role": "Mi rol",
        "impact": "Impacto logrado"
      }
    }
  }
}
```

Luego agrega el proyecto en `Portfolio.jsx`:

```jsx
const projects = [
  {
    key: 'myProject',
    tech: ['React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }
];
```

### Servicios

Similar al portfolio, edita las traducciones y actualiza `Services.jsx`.

### Testimonios

Los testimonios se definen completamente en los archivos de traducción:

```json
{
  "testimonials": {
    "items": [
      {
        "name": "Cliente",
        "role": "Cargo",
        "company": "Empresa",
        "text": "Testimonio...",
        "rating": 5
      }
    ]
  }
}
```

## 🎨 Personalización de Estilos

### Colores

Modifica las variables en `src/styles/variables.css`:

```css
:root {
  --primary: #0ea5e9;      /* Color primario */
  --primary-2: #22d3ee;    /* Color primario secundario */
  --accent: #a78bfa;       /* Color de acento */
}
```

### Tipografías

Las fuentes se cargan desde Google Fonts en `index.html`. Para cambiar:

1. Actualiza el link en `index.html`
2. Modifica las variables en `variables.css`:

```css
:root {
  --font-primary: 'TuFuente', sans-serif;
  --font-mono: 'TuFuenteMono', monospace;
}
```

### Espaciado y Tamaños

Sistema de spacing basado en 8px:

```css
:root {
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-4: 2rem;     /* 32px */
  /* ... */
}
```

## 🚀 Deployment

### GitHub Pages

```bash
# Build
npm run build

# Deploy (configurar GitHub Pages para servir desde /dist)
```

### Vercel

```bash
# Conectar repositorio en vercel.com
# Deploy automático en cada push
```

### Netlify

```bash
# Conectar repositorio en netlify.com
# Build command: npm run build
# Publish directory: dist
```

## 🏗️ Decisiones de Arquitectura

### ¿Por qué React + Vite?

- **React**: Ecosistema maduro, componentes reutilizables, gran comunidad
- **Vite**: Build ultra-rápido, HMR instantáneo, configuración mínima

### ¿Por qué CSS Modules?

- Scoping automático (sin conflictos de nombres)
- No requiere runtime (vs styled-components)
- Fácil mantenimiento y debugging
- Performance óptima

### ¿Por qué Context API en lugar de Redux?

- Suficiente para estado simple (tema/idioma)
- Sin dependencias externas
- Menos boilerplate
- Nativo de React

### ¿Por qué no localStorage?

- Restricción del entorno de desarrollo
- Estado en memoria es suficiente para esta aplicación
- Fácil migrar a localStorage en el futuro si es necesario

## 📋 Consideraciones Importantes

### Performance

- Imágenes optimizadas con `loading="lazy"`
- CSS Modules para code splitting automático
- Vite optimiza el bundle automáticamente

### SEO

- Meta tags en `index.html`
- Estructura semántica HTML5
- Textos descriptivos en español e inglés

### Accesibilidad

- ARIA labels en botones interactivos
- Navegación por teclado funcional
- Contraste de colores WCAG AA

### Browser Support

- Navegadores modernos (últimas 2 versiones)
- Chrome, Firefox, Safari, Edge
- Responsive: mobile, tablet, desktop

## 🤝 Contribuir

Este es un proyecto personal, pero sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit cambios (`git commit -m 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

© 2025 Luis Fernando Benavides Rengifo. Todos los derechos reservados.

## 📧 Contacto

- **Email**: lfbenavides@gmail.com
- **LinkedIn**: [linkedin.com/in/luis-fernando-benavides-rengifo](https://www.linkedin.com/in/luis-fernando-benavides-rengifo)
- **GitHub**: [github.com/Luisfben](https://github.com/Luisfben)
- **Stack Overflow**: [stackoverflow.com/users/114611/luis-fernando-benavides](https://es.stackoverflow.com/users/114611/luis-fernando-benavides)

---

**Hecho con ♥ por Luis Fernando Benavides Rengifo**
