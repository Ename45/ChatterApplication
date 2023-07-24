const cookieToken = require("../utils/cookieToken");
const prisma = require("../prisma/index.js");
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const moment = require('moment');
const nodemailer = require('nodemailer')


const signUp = async (req, res) => {
  const { firstName, lastName, profession, email, password } = req.body;
  const {otp, expiryTime} = generateOTP()
  console.log(otp);
  console.log(expiryTime);
  if (password === req.body.confirmPassword) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          profession,
          email,
          password: hashedPassword
        },
      });
      cookieToken(user, res);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.json({ message: "passwords don't match" });
  }  
};


// const signUp = async (req, res) => {
//   const { firstName, lastName, profession, email, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     res.status(400).json({ error: "Passwords don't match" });
//     return;
//   }

//   const hashedPassword = bcrypt.hashSync(password, 10);
//   try {
//     const user = await prisma.user.create({
//       data: {
//         firstName,
//         lastName,
//         profession,
//         email,
//         password: hashedPassword,
//       },
//     });

//     cookieToken(user, res);
//     res.status(200).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message});
//   }
// };


const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const generateOTP = () => {
  const otp = crypto.randomInt(1000, 10000).toString();
  const expiryTime = moment().add(15, "minutes");
  return { otp, expiryTime };
};

const sendOTPByEmail = (otp, req) => {
  generateOTP()
  const { email } = req.body
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
      user: "username",
      pass: "password",
    },
  });

  const mailOptions = {
    from: "sender@example.com",
    to: email,
    subject: "Your OTP",
    text: `Your OTP is ${otp}`,
  };

  try {
    transporter.sendMail(mailOptions);
    console.log('OTP sent to email successfully!');
  } catch (error) {
    console.error('Error sending OTP to email:', error);
  }
};


module.exports = {
  getAllUsers,
  signUp,
};