// Definimos una función reportWebVitals que recibe un parámetro `onPerfEntry`
// Este parámetro es una función que manejará los datos de rendimiento.
const reportWebVitals = onPerfEntry => {
  // Verificamos si `onPerfEntry` es una función antes de continuar
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Usamos importación dinámica para cargar el módulo 'web-vitals' solo cuando se necesite
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llamamos a las funciones de la biblioteca 'web-vitals' para obtener los datos de rendimiento
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS): mide la estabilidad visual
      getFID(onPerfEntry); // First Input Delay (FID): mide la interactividad
      getFCP(onPerfEntry); // First Contentful Paint (FCP): mide el tiempo hasta que se ve el primer contenido
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP): mide el tiempo hasta que se ve el contenido principal
      getTTFB(onPerfEntry); // Time to First Byte (TTFB): mide el tiempo hasta recibir el primer byte del servidor
    });
  }
};

// Exportamos la función para que pueda ser utilizada en otros archivos
export default reportWebVitals;
