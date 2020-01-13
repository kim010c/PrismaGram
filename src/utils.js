import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

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
    html: `보안문자 : <Strong> ${secret}</Strong><br/>보안문자를 복사하여 Web/App에 입력해주세요`
  };
  return sendMail(email);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
