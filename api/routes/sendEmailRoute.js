const express = require ("express");
const router = express.Router();

const { sendEmail } = require ("../controllers/contactFormController/sendEmailController");

router.post("/suscripcion", sendEmail);

module.exports = router;