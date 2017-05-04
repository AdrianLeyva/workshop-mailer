var Mailer = function () {
    //Modules
    this.nodemailer = require('nodemailer');

    //Mail service configuration
    this.mailHost = "gmail";
    this.user ="";
    this.pass = "";
}

/* This function sends email through nodemailer */
Mailer.prototype.sendMail = function(personName, personEmail, company, callback){
  //Email content
  let subject = 'Internship Workshop Technology';
  let content = 'Hola '+personName+'<br>'+
                'El motivo del correo es informar el resultado del proceso de selección del Workshop Technology Internship 2017.'+'<br>'+
                'Le queremos agradecer su participación en el proceso esperando que este haya sido satisfactorio para ti.'+'<br><br>'+
                'El proceso de selección contó con una entrevista a los aspirantes, que puede ser vista como un simulacro para futuras entrevistas laborales.'+'<br>'+
                'Las entrevistas estuvieron dividas en 2 secciones, donde se evaluaron diferentes aspectos:'+'<br>'+
                '-Recursos Humanos.'+'<br>'+
                '-Lógica computacional, donde la evaluación no fue técnica si no que se observó como el aspirante planteo una solución a un problema de manera general.'+'<br><br>'+
                'En la siguiente tabla se encuentran los comentarios de los aspectos evaluados por 3 revisores:'+'<br><br>'+
                'Originalmente eran 8 los espacios disponibles en las empresas de nuestros partners asociados pero buscando el beneficio de los participantes el cupo se amplio a 10 espacios.'+'<br>'+
                'De acuerdo a las evaluaciones, el C.V y la carta de intención te informamos que si fuiste seleccionado en el internship en la empresa '+company+'.<br>'+
                'Te recomendamos ponerte en contacto con la empresa ,revisar la convocatoria y si tienes alguna duda no dudes en escribir a: '+'<br>'+
                'holaworkshoptech@gmail.com'+'<br><br>'+
                'Saludos y muchas felicidades.'+'<br><br>'+
                'Atentamente:'+'<br>'+
                'Comité Workshop Technology.'+'<br><br>';

  //configuration of email transport to be sent.
    let conta = this.nodemailer.createTransport({
        service: this.mailHost,
        auth: {
            user:this.user,
            pass:this.pass
        }
    });

    //Sends email with all the content message.
    conta.sendMail({
        from: this.user,
        to: personEmail,
        subject: subject,
        html: content,
    }, function(err){
        if(err){
            console.log('Error al enviar mensaje a '+personEmail);
            console.log(err);
            callback('error');
            throw err;
        }
        else{
            console.log('Mensaje enviado a '+personEmail);
            callback('sent');
        }
    });
}

module.exports = Mailer;
