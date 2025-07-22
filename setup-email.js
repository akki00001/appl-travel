/**
 * This script helps automate the setup of Gmail SMTP credentials for nodemailer.
 * 
 * Usage:
 * 1. Run this script with Node.js: node setup-email.js
 * 2. It will prompt you to enter your Gmail address and app password.
 * 3. It will generate a .env file with the credentials for your server.js to use.
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Gmail SMTP Setup Automation');

const defaultEmail = 'akashsahoo5930@gmail.com';

rl.question(`Enter your Gmail address (default: ${defaultEmail}): `, (email) => {
  const userEmail = email || defaultEmail;
  rl.question(`Enter your Gmail App Password (16 characters): `, (appPassword) => {
    if (!userEmail || !appPassword || appPassword.length !== 16) {
      console.error('Invalid input. Please provide a valid Gmail address and a 16-character app password.');
      rl.close();
      return;
    }

    const envContent = "GMAIL_USER=" + userEmail + "\nGMAIL_PASS=" + appPassword + "\n";

    const envPath = path.join(__dirname, '.env');

    fs.writeFile(envPath, envContent, (err) => {
      if (err) {
        console.error('Failed to write .env file:', err);
      } else {
        console.log('.env file created successfully at', envPath);
        console.log('Update your server.js to use process.env.GMAIL_USER and process.env.GMAIL_PASS for authentication.');
      }
      rl.close();
    });
  });
});
