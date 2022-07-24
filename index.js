const nodemailer = require('nodemailer');
require('dotenv').config()

const trasportador = nodemailer.createTransport({
    host: 'smpt.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
})

const emailASerenviado = {
    from: process.env.EMAIL,
    to: '', //coloque o email que ira enviar a msg
    subject: 'Teste de envio de email',
    text: 'Texto do e-mail', 
}

trasportador.sendMail(emailASerenviado), (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('Email enviado com sucesso')
}