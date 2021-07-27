

if(typeof localStorage === "undefined" || localStorage === "null"){
  var Localstorage = require('node-localstorage').LocalStorage;
  localStorage = new Localstorage('./scratch');
}
require('dotenv').config();
localStorage.setItem('llave', 'valor');
console.log(localStorage.getItem('llave'));

function login() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  if (user == "daniel" && password == "12345") {
   alert("si entra en el if pero no me cambia de vista :C");
   // alert("Bienvenido Daniel");
    //window.location.assign("./segundaVista.html")
    location.href="./segundaVista.html";
  } else {
    alert("Datos erroneos");
  }
}

function sendParams() {
  const host = document.getElementById("host").value;
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const database = document.getElementById("database").value;

  document.getElementById(
"txtData").value = `host: ${host} user: ${user} password: ${password} database: ${database}`;
}


function addData() {
  // Crear query para INSERT, SELECT, UPDATE O DELETE
  const nombre = document.getElementById("nombre").value;
  const ap_pat = document.getElementById("ap_pat").value;
  const ap_mat = document.getElementById("ap_mat").value;
  const edad = document.getElementById("edad").value;

  $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES (${nombre},${ap_pat},${ap_mat},${edad} )`;

  con.query($query, function (err, rows, fields) {
    if (err) {
      console.log("Error Query");
      console.log(err);
      return;
    }

    console.log("Query exitoso", rows);
  });

  con.end(function () {
    // Conexión Finalizada
  });
  // Input data conection database
}

/*error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date*/