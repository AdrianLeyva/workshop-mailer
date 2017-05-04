/**
 * Created by Adrián Leyva on May 3, 2017.
 */

'use strict'
//Modules
const express = require('express');
const app = express();
const mailerController = require('./custom-modules/Mailer');
const Mailer = new mailerController();

//Server configuration
let port = process.env.PORT || 8120;

app.get('/send',function(req,res){
  const totalMessages = 2;
  let names = {
    0 : 'Student 1',
    1 : 'Student 2'
  };

  let emails = {
    0 : 'email1@correo.com',
    1 : 'email2@correo.com'
  };

  let companies = {
    0 : 'companyname',
    1 : 'companyname'
  };

  for(var i = 0;i<totalMessages;i++){
    Mailer.sendMail(names[i],emails[i],companies[i],function(err){
      if(err === 'error'){
        console.log('Ha ocurrido un error!');
        return;
      }else if (err === 'sent'){
        console.log('Envío exitoso!');
      }
    });
  }
  res.end('Los mensajes se comenzaran a enviar...');

});

app.get('/',function(req,res){
  console.log('Conectado al servidor...');
  res.end('Hola Adrian Leyva, bienvenido a Workshop Mailer');
});

app.listen(port,function () {
    console.log('Servidor ejecutándose en el puerto: ' + port);
});
