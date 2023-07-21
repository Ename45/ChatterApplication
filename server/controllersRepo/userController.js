const cookieToken = require("../utils/cookieToken");
const prisma = require("../prisma/index.js");
const bcrypt = require('bcryptjs')



const signUp = async (req, res) => {
  const { firstName, lastName, profession, email, password } = req.body;
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


module.exports = {
  getAllUsers,
  signUp,
};