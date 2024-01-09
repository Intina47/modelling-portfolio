import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import xss from 'xss';

dotenv.config();

export default function handler(req, res) {
 if (req.method !== 'POST') {
  res.status(405).json({ error: 'Method not allowed' });
  return;
 }

 const { firstName, lastName, email, message } = req.body;

 if (!firstName || !lastName || !email || !message) {
  res.status(400).json({ error: 'Empty field identified' });
  return;
 }

 const name = firstName + ' ' + lastName;
 const cleanLastName = xss(lastName);
 const cleanedName = xss(name);
 const cleanedEmail = xss(email);
 const cleanedMessage = xss(message);

 if (cleanedName.includes('suspicious') || cleanedEmail.includes('suspicious') || cleanedMessage.includes('suspicious')) {
  res.status(400).json({ error: 'Suspicious content detected' });
  return;
 }

 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: process.env.EMAIL,
   pass: process.env.PASS
  },
 });

 const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: `MESSAGE FROM ${cleanLastName.toUpperCase()} VIA YOUR PERSONAL PORTFOLIO`,
  text: `Name: ${cleanedName}\nEmail: ${cleanedEmail}\nMessage: ${cleanedMessage}`
 };

 transporter.sendMail(mailOptions, (error) => {
  if (error) {
   res.status(500).json({ error: 'Error sending mail' });
   console.log(error);
  } else {
   res.status(200).json({ message: 'Success' });
  }
 });
}