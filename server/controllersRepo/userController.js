const cookieToken = require("../utils/cookieToken");
const prisma = require("../prisma/index.js");
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const moment = require('moment');
const nodemailer = require('nodemailer');


const createUser = async(req, res) => {
  const { firstName, lastName, profession, email, password } = req.body;
  // console.log(firstName, lastName, profession, email, password);

  try {
    const result = await prisma.user.create({
      firstName,
      lastName,
      profession,
      email,
      password,
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({error: "User not created"})
  }
};

// const signUp = async (req, res) => {
//   const { firstName, lastName, profession, email, password } = req.body;
//   const { otp, expiryTime } = generateOTP();
//   if (password === req.body.confirmPassword) {
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     try {
//       const user = await prisma.user.create({
//         data: {
//           firstName,
//           lastName,
//           profession,
//           email,
//           password: hashedPassword,
//         },
//       });
//       cookieToken(user, res);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.json({ message: "passwords don't match" });
//   }
// };


const findAllUsers = async(req, res) => {
  const allUsers = await prisma.user.findMany();

  res.json(allUsers);
};

const findOneUser = async(req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  res.json(user);
};

const updateUser = async(req, res) => {
  const { id } = req.params;
  const { firstName, lastName, profession } = req.body

  try {
    const updatedData = await prisma.user.update({
    where:{
      id: id
    },
    data: {
      firstName,
      lastName,
      profession
    }
  })
  res.json(updatedData);
  } catch (error) {
    res.status(400).json({ error: "failed to update user"});
  }
};


const deleteAUser = async(req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};







// const getAllUsers = async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };




module.exports = {
  createUser,
  findOneUser,
  findAllUsers,
  updateUser,
  deleteAUser,
  // signUp
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

