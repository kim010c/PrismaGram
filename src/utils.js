import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  try {
    const client = nodemailer.createTransport(sgTransport(options));
    //console.log(Promise.resolve(client.transporter.options));
    return client.sendMail(email);
  } catch (error) {
    console.log("error");
  }
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "Jongho@prismagram.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `안녕! 보안문자야 : <Strong> ${secret}</Strong>.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};
