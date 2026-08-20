# Landing Page - Miriam Elisabeth Brito

Landing page profesional para servicios de terapias holísticas.

## 📋 Estructura del Proyecto

```
MiriamElisabethBrito/
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css      # Estilos CSS completos
├── js/
│   └── main.js         # Funcionalidades JavaScript
├── images/             # Carpeta para imágenes (crear según necesidad)
│   ├── hero-bg.jpg     # Imagen de fondo para el hero section
│   └── about.jpg       # Foto personal de Miriam
└── README.md           # Este archivo
```

## 🚀 Características

- ✅ Diseño 100% responsive (mobile-first)
- ✅ Navegación suave entre secciones
- ✅ Animaciones al hacer scroll
- ✅ Menú móvil hamburguesa
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp, Facebook e Instagram
- ✅ Optimizado para SEO básico
- ✅ Sin dependencias externas (solo Google Fonts)

## 🎨 Personalización

### 1. **Imágenes**

Reemplazá las imágenes placeholder con fotos reales:

- **Hero background**: Reemplazar el gradiente en `index.html` línea ~60 con:
  ```css
  background-image: url('../images/hero-bg.jpg');
  ```
  
- **Foto personal**: Colocar la imagen en `images/about.jpg` (la imagen se muestra automáticamente)

### 2. **Colores**

Para cambiar la paleta de colores, editá las variables en `css/styles.css`:

```css
:root {
    --primary: #b8860b;        /* Color principal (dorado) */
    --primary-light: #daa520;  /* Dorado claro */
    --primary-dark: #8b6508;   /* Dorado oscuro */
    --secondary: #2d5016;      /* Verde natural */
    --secondary-light: #4a7c2c;
}
```

### 3. **Información de Contacto**

Los datos ya están cargados, pero podés modificarlos en `index.html`:

- **WhatsApp**: Línea ~280 (link y número)
- **Facebook**: Línea ~290 (URL del perfil)
- **Instagram**: Línea ~300 (URL del perfil)

### 4. **Testimonios**

Podés agregar testimonios reales editando la sección `<!-- Testimonios -->` en `index.html`.

### 5. **Servicios**

Los servicios ya están cargados según la información proporcionada. Para modificarlos, buscar la sección `<!-- Servicios -->` en `index.html`.

## 📧 Configuración del Formulario (FormSubmit)

El formulario de contacto usa **FormSubmit**: es **gratis, sin límites ni créditos**, y funciona en **cualquier hosting** (GitHub Pages, Vercel, Netlify, etc.). No requiere abrir sesión con ninguna cuenta de correo.

La integración ya está en el código: `action="https://formsubmit.co/..."` en el HTML y envío AJAX en `js/main.js`.

### Para que los mensajes lleguen al correo (lo único que falta)
1. Publicá la página (ver sección **Publicación** abajo).
2. El primer mensaje que envíe alguien generará un **mail de activación** a `miriambrito139@hotmail.com`.
3. Miriam hace **1 clic** en ese link (revisar también la carpeta de spam).
4. De ahí en más, cada consulta del formulario le llega **directo a su correo**.

> El envío ya incluye anti-spam integrado (filtro inteligente + un campo honeypot oculto, sin captchas molestos). Para probar en desarrollo levantá un servidor local o publicá el sitio; abriendo el `index.html` directo como archivo no funciona.

## 🌐 Publicación

### GitHub Pages (Gratis, recomendado - sin créditos ni límites)
1. Crear cuenta en [GitHub](https://github.com/)
2. Crear un repositorio nuevo (público o privado)
3. Subir la carpeta del proyecto (se puede arrastrar en la web, o usar `git push`)
4. Andar a **Settings → Pages** del repo → elegir **Deploy from a branch** → `main` / carpeta `root`
5. Listo: tu página queda en `https://tunombre.github.io/nombre-del-repo/`

### Netlify (Gratis)
1. Crear cuenta en [Netlify](https://www.netlify.com/)
2. Arrastrar la carpeta del proyecto
3. Listo! Te dan una URL gratuita

### Vercel (Gratis)
1. Crear cuenta en [Vercel](https://vercel.com/)
2. Importar el proyecto
3. Deploy automático

### hosting tradicional
Subir todos los archivos via FTP a tu hosting.

## 📱 Próximos Pasos

1. **Agregar imágenes reales**:
   - Foto de Miriam para la sección "Sobre Mí"
   - Imagen de fondo para el hero (consultorio, paisaje natural, etc.)

2. **Probar el formulario en producción** (después de publicar) y verificar que las consultas lleguen a `miriambrito139@hotmail.com` (recuerda activar el link del mail de FormSubmit)

3. **Agregar testimonios reales** de pacientes/alumnos

4. **Conectar dominio propio** (opcional)

5. **Agregar Google Analytics** para estadísticas (opcional)

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Variables CSS)
- JavaScript Vanilla (sin frameworks)
- Google Fonts (Inter, Playfair Display)

## 📄 Licencia

Este proyecto fue desarrollado exclusivamente para Miriam Elisabeth Brito.

---

**¿Necesitás ayuda con la configuración?** Contactanos para asistencia personalizada.