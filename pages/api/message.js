import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import xss from 'xss';

dotenv.config();

export default function handler(req, res) {
 if(req.method !== 'POST'){
  res.status(405).json({error: 'method not allowed'});
  return;
 }
 const {firstName, lastName, email, message} = req.body;

 if(!firstName || !lastName || !email || !message){
  res.status(400).json({error: 'empty field identified'});
  return;
 }else{
  const name = firstName + ' ' + lastName;
  const cleanlastname = xss(lastName);
  const cleanedname = xss(name);
  const cleanedemail = xss(email);
  const cleanedmessage = xss(message);

  if (cleanedname.includes('suspicious') || cleanedemail.includes('suspicious') || cleanedmessage.includes('suspicious')) {
   throw new Error('Suspicious content detected');
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
   subject: `MESSAGE FROM ${cleanlastname.toUpperCase()} VIA YOUR PERSONAL PORTFOLIO`,
   text: `Name: ${cleanedname}\nEmail: ${cleanedemail}\nMessage: ${cleanedmessage}`
  };

  transporter.sendMail(mailOptions, (error) => {
   if(error){
    res.status(500).json({error: 'Error sending mail'});
    console.log(error);
   }else{
    res.status(200).json({message: 'success'});
   }
  });
 }
}