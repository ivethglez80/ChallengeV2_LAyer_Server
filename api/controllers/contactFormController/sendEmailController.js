const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env._HOST,
  port: process.env._PORT,
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env._MAIL, // generated ethereal user
    pass: process.env._PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const {  email } = req.body;
  


  
  var mailOptions = {
    from: "iveth.dev@gmail.com",
    to: "admin@grupocober.online",
    subject: "Notificacion de pagina web",
    text: `
       Felicitaciones, Tienes un nuevo suscriptor!
       Email: ${email}       
     `
  };

  

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log("Email sent successfully!");
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

module.exports = { sendEmail };