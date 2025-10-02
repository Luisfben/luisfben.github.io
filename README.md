# Professional Portfolio - Luis Fernando Benavides Rengifo

Modern and professional web portfolio built with React + Vite, designed to reflect contemporary technical authority and senior software development experience.

## 🚀 Features

- ✨ **Modern Design 2024-2025**: Glassmorphism, dark/light mode, micro-interactions
- 🌐 **Multilingual (i18n)**: Full support for Spanish and English
- 🎨 **Theme System**: Real-time switchable dark/light mode
- 📱 **Responsive Design**: Optimized for all devices
- ⚡ **Performance**: Optimized build with Vite
- 🎯 **SEO Friendly**: Meta tags and semantic structure
- ♿ **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **Vite** | 5.0.8 | Build tool and dev server |
| **CSS Modules** | - | Locally scoped styles |
| **Context API** | - | Global state (theme/language) |

## 📁 Project Structure

```
/
├── public/
│   ├── assets/              # Images, icons
│   └── favicon.svg          # Site favicon
│
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── LanguageToggle.jsx
│   │   │
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   │
│   │   └── sections/        # Page sections
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── TechStack.jsx
│   │       ├── Services.jsx
│   │       ├── Portfolio.jsx
│   │       └── Contact.jsx
│   │
│   ├── contexts/
│   │   ├── ThemeContext.jsx      # Dark/light theme management
│   │   └── LanguageContext.jsx   # ES/EN language management
│   │
│   ├── locales/
│   │   ├── es.json          # Spanish translations
│   │   └── en.json          # English translations
│   │
│   ├── styles/
│   │   ├── variables.css    # CSS variables (colors, typography)
│   │   └── global.css       # Global styles and reset
│   │
│   ├── hooks/
│   │   └── useIntersectionObserver.js  # Animation hook
│   │
│   ├── App.jsx              # Main component
│   └── main.jsx             # Entry point
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Architecture Advantages

- **Separation of concerns**: UI, logic, data, and styles clearly separated
- **Scalability**: Easy to add new sections or components
- **Maintainability**: Centralized localization, modular components
- **Reusability**: Common components shared throughout the app

## 🚀 Installation and Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/luisfben/luisfben.github.io.git
cd luisfben.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The application will be available at http://localhost:5173
```

### Production Build

```bash
# Generate optimized build
npm run build

# Preview the build
npm run preview
```

## 🌐 Internationalization System (i18n)

### How It Works

The i18n system uses **React Context API** + JSON files to handle translations:

1. **Translation files**: `src/locales/es.json` and `src/locales/en.json`
2. **Context Provider**: `LanguageContext` dynamically loads translations
3. **Custom hook**: `useLanguage()` provides `t()` function for translating

### Add/Modify Translations

Edit the JSON files in `src/locales/`:

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

### Use Translations in Components

```jsx
import { useLanguage } from '../../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <h1>{t('hero.title')}</h1>;
};
```

### Add a New Language

1. Create file `src/locales/[code].json` (e.g., `fr.json`)
2. Copy structure from `es.json` and translate
3. Add option in `LanguageToggle.jsx`:

```jsx
<button onClick={() => setLanguage('fr')}>FR</button>
```

## 🎨 Theme System (Dark/Light Mode)

### CSS Variables

Themes are defined in `src/styles/variables.css`:

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

### Change Theme

The theme is managed with `ThemeContext`:

```jsx
import { useTheme } from '../../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
```

## 📝 Modify Content

### Portfolio Projects

Edit the translations in `src/locales/es.json` and `en.json`:

```json
{
  "portfolio": {
    "projects": {
      "myProject": {
        "title": "My Project",
        "description": "Project description",
        "role": "My role",
        "impact": "Impact achieved"
      }
    }
  }
}
```

Then add the project in `Portfolio.jsx`:

```jsx
const projects = [
  {
    key: 'myProject',
    tech: ['React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }
];
```

### Services

Similar to portfolio, edit the translations and update `Services.jsx`.

### Testimonials

Testimonials are completely defined in the translation files:

```json
{
  "testimonials": {
    "items": [
      {
        "name": "Client",
        "role": "Position",
        "company": "Company",
        "text": "Testimonial...",
        "rating": 5
      }
    ]
  }
}
```

## 🎨 Style Customization

### Colors

Modify the variables in `src/styles/variables.css`:

```css
:root {
  --primary: #0ea5e9;      /* Primary color */
  --primary-2: #22d3ee;    /* Secondary primary color */
  --accent: #a78bfa;       /* Accent color */
}
```

### Typography

Fonts are loaded from Google Fonts in `index.html`. To change:

1. Update the link in `index.html`
2. Modify the variables in `variables.css`:

```css
:root {
  --font-primary: 'YourFont', sans-serif;
  --font-mono: 'YourMonoFont', monospace;
}
```

### Spacing and Sizes

Spacing system based on 8px:

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

# Deploy (configure GitHub Pages to serve from /dist)
```

### Vercel

```bash
# Connect repository on vercel.com
# Automatic deploy on every push
```

### Netlify

```bash
# Connect repository on netlify.com
# Build command: npm run build
# Publish directory: dist
```

## 🏗️ Architecture Decisions

### Why React + Vite?

- **React**: Mature ecosystem, reusable components, large community
- **Vite**: Ultra-fast build, instant HMR, minimal configuration

### Why CSS Modules?

- Automatic scoping (no name conflicts)
- No runtime required (vs styled-components)
- Easy maintenance and debugging
- Optimal performance

### Why Context API instead of Redux?

- Sufficient for simple state (theme/language)
- No external dependencies
- Less boilerplate
- Native to React

### Why not localStorage?

- Development environment restriction
- In-memory state is sufficient for this application
- Easy to migrate to localStorage in the future if needed

## 📋 Important Considerations

### Performance

- Optimized images with `loading="lazy"`
- CSS Modules for automatic code splitting
- Vite automatically optimizes the bundle

### SEO

- Meta tags in `index.html`
- Semantic HTML5 structure
- Descriptive texts in Spanish and English

### Accessibility

- ARIA labels on interactive buttons
- Functional keyboard navigation
- WCAG AA color contrast

### Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Responsive: mobile, tablet, desktop

## 🤝 Contributing

This is a personal project, but suggestions are welcome:

1. Fork the project
2. Create a branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

© 2025 Luis Fernando Benavides Rengifo. All rights reserved.

## 📧 Contact

- **Email**: lfbenavides@gmail.com
- **LinkedIn**: [linkedin.com/in/luis-fernando-benavides-rengifo](https://www.linkedin.com/in/luis-fernando-benavides-rengifo)
- **GitHub**: [github.com/Luisfben](https://github.com/Luisfben)
- **Stack Overflow**: [stackoverflow.com/users/114611/luis-fernando-benavides](https://es.stackoverflow.com/users/114611/luis-fernando-benavides)

---

**Made with ♥ by Luis Fernando Benavides Rengifo**
