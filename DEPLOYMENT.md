# 🚀 Guía de Deployment y Desarrollo Local

## 📋 Índice
1. [Ver la Página Localmente](#ver-la-página-localmente)
2. [Deployment a GitHub Pages](#deployment-a-github-pages)
3. [Solución de Problemas](#solución-de-problemas)

---

## 🖥️ Ver la Página Localmente

### **Paso 1: Instalar Dependencias**

La primera vez que clones el proyecto o después de hacer cambios en `package.json`:

```bash
npm install
```

Esto instalará React, Vite y todas las dependencias necesarias.

---

### **Paso 2: Iniciar Servidor de Desarrollo**

```bash
npm run dev
```

**Resultado esperado:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

---

### **Paso 3: Abrir en el Navegador**

Abre tu navegador en: **http://localhost:5173/**

**Características del servidor de desarrollo:**
- ⚡ **Hot Module Replacement (HMR)**: Los cambios se reflejan instantáneamente sin recargar
- 🔄 **Auto-reload**: Recarga automática al guardar archivos
- 🐛 **Source maps**: Debugging fácil en DevTools
- 📱 **Responsive**: Prueba en diferentes tamaños con DevTools

---

### **Comandos Útiles Durante el Desarrollo**

```bash
# Iniciar servidor de desarrollo
npm run dev

# Detener servidor
Ctrl + C (en la terminal)

# Generar build de producción (para probar antes de deploy)
npm run build

# Preview del build de producción localmente
npm run preview
```

---

### **Flujo de Trabajo Típico**

```bash
# 1. Iniciar servidor
npm run dev

# 2. Abrir http://localhost:5173/ en el navegador

# 3. Editar archivos en src/
#    - Los cambios se reflejan automáticamente
#    - No necesitas recargar manualmente

# 4. Cuando termines, Ctrl + C para detener
```

---

## 🌐 Deployment a GitHub Pages

### **Configuración Inicial (Solo una vez)**

#### **1. Configurar GitHub Pages en el Repositorio**

1. Ve a tu repositorio: https://github.com/luisfben/luisfben.github.io
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona: **GitHub Actions**

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

---

### **Deployment Automático**

Una vez configurado, el deployment es **completamente automático**:

```bash
# 1. Haz cambios en tu código
# 2. Commit
git add .
git commit -m "Actualizar contenido del portfolio"

# 3. Push a GitHub
git push origin main

# 4. GitHub Actions se ejecuta automáticamente
#    - Instala dependencias
#    - Compila el proyecto
#    - Despliega a GitHub Pages

# 5. Tu sitio estará disponible en:
#    https://luisfben.github.io/
```

---

### **Monitorear el Deployment**

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **Actions**
3. Verás el workflow "Deploy to GitHub Pages" ejecutándose
4. Click en el workflow para ver detalles y logs

**Estados posibles:**
- 🟡 **Amarillo (En progreso)**: Compilando y desplegando
- ✅ **Verde (Success)**: Deployment exitoso
- ❌ **Rojo (Failed)**: Error (revisa los logs)

---

### **Tiempos de Deployment**

- ⏱️ **Build**: ~1-2 minutos
- 🌐 **Propagación**: ~1-5 minutos adicionales
- ⏳ **Total**: ~3-7 minutos desde el push hasta ver cambios en vivo

**Nota**: La primera vez puede tardar un poco más.

---

## 🔧 Solución de Problemas

### **Problema 1: `npm install` falla**

**Solución:**
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

---

### **Problema 2: Puerto 5173 ya está en uso**

**Solución:**
```bash
# Opción 1: Detener el proceso que usa el puerto
lsof -ti:5173 | xargs kill -9

# Opción 2: Usar otro puerto
npm run dev -- --port 3000
```

---

### **Problema 3: Cambios no se reflejan en el navegador**

**Solución:**
1. Verifica que el servidor esté corriendo (`npm run dev`)
2. Refresca el navegador con **Ctrl + Shift + R** (hard reload)
3. Limpia caché del navegador
4. Reinicia el servidor de desarrollo

---

### **Problema 4: GitHub Actions falla**

**Causas comunes:**

1. **Error en el código**: Verifica que compile localmente
   ```bash
   npm run build
   ```

2. **Permisos de GitHub Pages**: Verifica en Settings → Pages → Source = GitHub Actions

3. **package-lock.json desactualizado**:
   ```bash
   npm install
   git add package-lock.json
   git commit -m "Update package-lock.json"
   git push
   ```

---

### **Problema 5: Página muestra 404 en GitHub Pages**

**Solución:**
1. Verifica que el workflow haya terminado exitosamente
2. Espera 5-10 minutos para propagación
3. Verifica que `base: '/'` esté en `vite.config.js`
4. Limpia caché del navegador

---

## 📊 Verificar que Todo Funciona

### **Checklist de Desarrollo Local:**

- [ ] `npm install` ejecuta sin errores
- [ ] `npm run dev` inicia el servidor
- [ ] Puedes acceder a http://localhost:5173/
- [ ] Los cambios se reflejan automáticamente (HMR)
- [ ] El toggle de tema funciona
- [ ] El toggle de idioma funciona
- [ ] La navegación funciona correctamente

### **Checklist de Deployment:**

- [ ] GitHub Pages configurado en Settings
- [ ] Archivo `.github/workflows/deploy.yml` existe
- [ ] Push a `main` dispara el workflow
- [ ] Workflow completa exitosamente (verde en Actions)
- [ ] Sitio accesible en https://luisfben.github.io/
- [ ] Todas las funcionalidades funcionan en producción

---

## 🎯 Mejores Prácticas

### **Durante el Desarrollo:**

1. **Siempre trabaja con el servidor corriendo** (`npm run dev`)
2. **Prueba en diferentes navegadores** (Chrome, Firefox, Safari)
3. **Usa DevTools responsive mode** para probar mobile
4. **Haz commits frecuentes** con mensajes descriptivos

### **Antes de Deploy:**

1. **Prueba el build localmente:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Verifica que no haya errores en consola**

3. **Prueba todas las funcionalidades:**
   - Navegación
   - Tema dark/light
   - Cambio de idioma
   - Formulario de contacto
   - Links externos

---

## 📞 Comandos de Referencia Rápida

```bash
# Desarrollo
npm install              # Instalar dependencias
npm run dev             # Servidor de desarrollo
npm run build           # Build de producción
npm run preview         # Preview del build

# Git
git status              # Ver cambios
git add .               # Agregar todos los cambios
git commit -m "msg"     # Commit con mensaje
git push origin main    # Push a GitHub (dispara deployment)

# Debugging
npm run build           # Verificar que compile
lsof -ti:5173           # Ver qué usa el puerto 5173
```

---

## 🎓 Recursos Adicionales

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**¿Preguntas?** Revisa la sección de [Solución de Problemas](#solución-de-problemas) o consulta los logs en GitHub Actions.
