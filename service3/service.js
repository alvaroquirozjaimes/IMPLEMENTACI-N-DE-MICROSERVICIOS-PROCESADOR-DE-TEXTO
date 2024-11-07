// Requiere los módulos necesarios
var express = require("express"),  // Framework web Express para manejar las rutas y las solicitudes HTTP
  app = express(),  // Inicializa la aplicación Express
  bodyParser = require("body-parser");  // Middleware para analizar los cuerpos de las solicitudes HTTP

var cors = require('cors');  // Requiere el módulo CORS para habilitar peticiones entre dominios

// Configuración de CORS para permitir todas las solicitudes de cualquier origen
app.use(cors());

// Middleware para parsear los cuerpos de las solicitudes en formato URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para parsear los cuerpos de las solicitudes en formato JSON
app.use(bodyParser.json());

// Inicializa un enrutador Express
var router = express.Router();

// Definición de una ruta POST en "/counter"
router.post("/counter", function (req, res) {
    var text = req.body.text;  // Obtiene el texto del cuerpo de la solicitud (JSON)
    
    // Crea un objeto de respuesta con el número de palabras y el número de caracteres
    var response = { 
        "words": text.trim().split(/\s+/).length,  // Cuenta las palabras dividiendo el texto por los espacios
        "characters": text.length  // Cuenta los caracteres del texto
    };
    
    // Envia la respuesta al cliente con los resultados
    res.send(response);
});

// Se usa el enrutador en la aplicación
app.use(router);

// El servidor escucha en el puerto 7020 y muestra un mensaje en la consola
app.listen(7020, function () {
  console.log("Node server running on http://localhost:7020");
});
