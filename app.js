const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite solicitudes desde cualquier origen

// Middleware para permitir solicitudes de cualquier origen (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas para manejar las solicitudes
app.get('/api/fq', (req, res) => {
  // Aquí obtendrías los libros desde tu base de datos o algún almacenamiento
  const fq = [
    {
      id: 1,
      title: '¿Cómo puedo buscar vuelos en TravellingApp?',
      body: 'En TravellingApp, puedes buscar vuelos utilizando nuestra herramienta de búsqueda intuitiva. Simplemente ingresa tus detalles de viaje, como origen, destino, fechas de viaje y preferencias adicionales, y nuestra aplicación te mostrará una lista de opciones de vuelos disponibles.',
    },

    {
      id: 2,
      title: '¿Por qué elegir TravellingApp?',
      body: 'TravellingApp destaca por su amplia variedad de opciones de vuelos y destinos, precios competitivos, experiencia del usuario intuitiva, seguridad en las transacciones, servicio al cliente de primera, flexibilidad en las reservas, ofertas exclusivas, información actualizada en tiempo real y un compromiso constante con la experiencia del cliente.',
    },
    {
      id: 3,
      title: '¿Ofrece TravellingApp promociones o descuentos especiales?',
      body: 'Sí, TravellingApp ofrece regularmente promociones y descuentos especiales en boletos de avión y servicios relacionados. Mantente atento a nuestras ofertas exclusivas para obtener beneficios adicionales en tus reservas.',
    },
  ];

  res.json(fq);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
