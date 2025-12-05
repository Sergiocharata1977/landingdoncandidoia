# Guía de Despliegue en Vercel

## ✅ Estado del Proyecto

El proyecto **Don Cándido IA - Landing Page** ha sido exitosamente:

- ✅ Compilado y verificado (`npm run build` exitoso)
- ✅ Subido al repositorio de GitHub: https://github.com/Sergiocharata1977/landingdoncandidoia
- ✅ Preparado con `.gitignore` apropiado
- ✅ Documentado con README.md completo

## 🚀 Pasos para Desplegar en Vercel

### Opción 1: Despliegue Automático desde GitHub (Recomendado)

1. **Accede a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el Proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona el repositorio `landingdoncandidoia`
   - Click en "Import"

3. **Configuración del Proyecto**
   - **Framework Preset**: Next.js (detectado automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `next build` (detectado automáticamente)
   - **Output Directory**: `.next` (detectado automáticamente)
   - **Install Command**: `npm install` (detectado automáticamente)

4. **Variables de Entorno**
   - No se requieren variables de entorno para este proyecto
   - Si en el futuro necesitas agregar alguna, puedes hacerlo en la sección "Environment Variables"

5. **Desplegar**
   - Click en "Deploy"
   - Espera 2-3 minutos mientras Vercel construye y despliega tu aplicación
   - ¡Listo! Tu landing page estará disponible en una URL como: `https://landingdoncandidoia.vercel.app`

### Opción 2: Despliegue desde CLI de Vercel

Si prefieres usar la línea de comandos:

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Navegar al directorio del proyecto
cd "c:\Users\Usuario\Documents\Proyectos\ISO -conjunto\don-candido-ia-hero"

# Iniciar sesión en Vercel
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

## 🔄 Despliegues Automáticos

Una vez configurado, Vercel desplegará automáticamente:

- **Producción**: Cada push a la rama `main`
- **Preview**: Cada push a otras ramas o pull requests

## 🌐 Dominio Personalizado

Para configurar un dominio personalizado:

1. Ve a tu proyecto en Vercel Dashboard
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

## 📊 Monitoreo y Analytics

Vercel incluye automáticamente:

- **Analytics**: Métricas de rendimiento y visitantes
- **Speed Insights**: Análisis de velocidad de carga
- **Logs**: Registros de errores y despliegues

Accede a estas herramientas desde el Dashboard de Vercel.

## 🔧 Configuración Adicional (Opcional)

### Optimizaciones de Rendimiento

El proyecto ya incluye:
- ✅ Vercel Analytics configurado en `package.json`
- ✅ Optimización de imágenes de Next.js
- ✅ Generación estática de páginas
- ✅ Código minificado y optimizado

### Variables de Entorno Futuras

Si necesitas agregar variables de entorno en el futuro:

1. Crea un archivo `.env.local` localmente (ya está en `.gitignore`)
2. Agrega las variables en Vercel Dashboard → Settings → Environment Variables
3. Redespliega el proyecto

## 📝 Notas Importantes

- **Build Time**: El proyecto compila en aproximadamente 50 segundos
- **Advertencia de baseline-browser-mapping**: Es solo un warning, no afecta el funcionamiento
- **Modo de Renderizado**: Páginas estáticas (SSG) para máximo rendimiento
- **Región de Despliegue**: Vercel seleccionará automáticamente la mejor región

## 🆘 Solución de Problemas

### Error: "Build Failed"
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel Dashboard

### Error: "Module not found"
- Asegúrate de que todos los imports usen rutas correctas
- Verifica que los archivos existan en el repositorio

### Página en blanco
- Revisa la consola del navegador para errores
- Verifica los logs de runtime en Vercel

## 🔗 Enlaces Útiles

- **Repositorio**: https://github.com/Sergiocharata1977/landingdoncandidoia
- **Documentación de Vercel**: https://vercel.com/docs
- **Documentación de Next.js**: https://nextjs.org/docs
- **Soporte de Vercel**: https://vercel.com/support

---

**¡Tu landing page está lista para ser desplegada! 🚀**

Una vez desplegada, comparte la URL con tu equipo y comienza a recibir solicitudes de demo.
