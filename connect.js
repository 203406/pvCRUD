
const mysql = require('mysql');

// Agregamos los parametros de conexión 
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});
// Conectamos al manejador de base de datos 
connection.connect(function (err) {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    } else {
        alert('conexion exitosa');
        console.log('Conexión exitosa');
    }
});

module.exports = connection //Exportamos la conexón para que cualquier clase la pueda requerir

/* host= localhost
username= root
port=3006*/