const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar carpeta de archivos estáticos
app.use(express.static('views'));

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'contraseña123';
bcrypt.hash(password, saltRounds, (err, hash) => {
  // Guarda el hash en la base de datos
});
