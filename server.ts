import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com', // Replace with your Gmail address
    pass: 'yourgmailpassword',   // Replace with your Gmail app password or actual password
  },
});

app.post('/send-booking', (req: Request, res: Response) => {
  const { activeTab, destination, checkin, checkout, guest } = req.body;

  const mailOptions = {
    from: 'yourgmail@gmail.com', // Replace with your Gmail address
    to: 'com.akash@yahoo.com',   // User's email address
    subject: 'New Booking Form Submission',
    text: `
      Booking Type: ${activeTab}
      Destination: ${destination}
      Check In: ${checkin}
      Check Out: ${checkout}
      Guests: ${guest}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
