const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var nombre = req.query.name;
  if(!nombre || nombre === 0){
    name = "desconocido";
  }
  else{
    res.send(`<h1>Hola ${nombre}!</h1>`);

  }

});



app.listen(3000, () => console.log('Listening on port 3000!'));
