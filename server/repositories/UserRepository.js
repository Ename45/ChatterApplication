const prisma = require("../prisma/index.js");
const HashData = require('../utils/HashData.js')



const createUser = async(userData) => {
  const { firstName, lastName, profession, email, password } = userData;

  let hashedPassword = await HashData.hashedData(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        profession,
        email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      throw new Error("Error creating user. All fields required");
    }

    return {
      data: newUser,
      message: "User Created Successfully",
    };
  } catch (error) {
    throw new Error(error.message);
  }
}


const findAllUsers = async(req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
};


const findUserByEmail = async (email) => {
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return foundUser;
  } catch (error) {
    throw error;
  }
};


const findOneUser = async(req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      myPost: true,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  

  res.json(user);
};


const updateUser = async(req, res) => {
  const { id } = req.params;
  const { firstName, lastName, profession, image, coverImage, profileImage } =
    req.body;

  try {
    const updatedData = await prisma.user.update({
    where:{
      id: id
    },
    data: {
      firstName,
      lastName,
      profession,
      image,
      coverImage, 
      profileImage
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
    const userToDelete = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!userToDelete) {
      return res.status(404).json({error: "No such user exists"})
    }


    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  createUser,
  findOneUser,
  findAllUsers,
  findUserByEmail,
  updateUser,
  deleteAUser,
};


