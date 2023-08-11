const OTPUtils = require('../utils/Tokens')
const SendEmail = require('../utils/SendEmails');
const prisma = require('../prisma/index.js');
const HashedData  = require('../utils/HashData');

const sendOTP = async(otpDetails) => {
  try {
    const { email, subject, message, duration } = otpDetails;

    const otp = OTPUtils.generateOTP();

    await sendEmailWithOTP(email, subject, message, otp, duration);

    const hashedOTP = await HashedData.hashedData(otp, 10);

    const storedOTP = await prisma.oTP.create({
      data: {
        type: "otp",
        emailToken: hashedOTP,
        expiration: new Date(Date.now() + duration * 60 * 60 * 1000),
        user: {
          connect: {
            email: email,
          }
        }
      },
      include: {
        user: {
          select: {
            email: true
          }
        }
      }
    })
    
    if (!storedOTP) {
      throw new Error('OTP not stored')
    }

    return {
      message: "OTP successfully sent, check mailbox",
    };
  } catch (error) {
    throw new Error(error.message);
  }
}


const verifyUserEmailWithPin = async({ email, otp }) => {
  try {
    const validOTP = await validateOTP({email, otp});

    if (!validOTP) {
      throw new Error("invalid OTP passed");
    }

    await prisma.user.updateMany({
      where: {
        email: email,
      },
      data: {
        isVerified: true,
      },
    });
    
    const foundUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!foundUser) {
      throw new Error("User does not exist");
    }

    const { id } = foundUser;

    const foundOTP = await prisma.oTP.findFirst({
      where: {
        userId: id,
      },
    });

    await deleteOTP(foundOTP.emailToken);

    return {
      message: validOTP.message
    };
  } catch (error) {
    throw new Error(error.message);
  }
}



const createTokenInDb = async(token, foundUser) => {
  try {
    if (!token.token) {
      throw new Error("token not provided");
    }

    const storedToken = await prisma.oTP.create({
      data: {
        type: "cookie token",
        emailToken: token.token,
        expiration: token.expires,
        user: {
          connect: {
            email: foundUser.email,
          },
        },
      },
    });

    if (!storedToken) {
      throw new Error("OTP not stored");
    }

    return {
      data: storedToken,
      message: "Token saved",
    };
  } catch (error) {
    throw new Error(error.message);
  }

}



module.exports = {
  sendOTP,
  verifyUserEmailWithPin,
  createTokenInDb
}


const validateOTP = async ({email, otp}) => {
  try {
    if (!(email && otp)) {
      throw new Error("incomplete validation information");
    }

    const foundUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!foundUser) {
      throw new Error("User does not exist");
    }


    const foundOTP = await prisma.oTP.findFirst({
      where: {
        userId: foundUser.id,
      },
    });

    if (!foundOTP) {
      throw new Error("No such OTP data found, check your email");
    }

    const { expiration, emailToken } = foundOTP;

    if (expiration < Date.now) {
      await deleteOTP(otp);
      throw new Error("OTP has expired");
    }

    const isMatch = await HashedData.verifyHashedData(otp, emailToken);

    console.log('do the passwords match?', isMatch);

    if (!isMatch) {
      throw new Error("Wrong OTP");
    }

    return {
      message: "Email verification successful with OTP",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};




const deleteOTP = async (otp) => {
  try {
    await prisma.oTP.delete({
      where: {
        emailToken: otp,
      },
    });

    return {
      message: "OTP deleted successfully",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

async function sendEmailWithOTP(email, subject, message, otp, duration) {
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject,
    html: `<p>${message}</p><p style="color:tomato;font-size:25px;letter-spacing:2px;"><b>${otp}</b></p><p>This code <b>expires in ${duration} hour(s)</b></p>`,
  };

  await SendEmail.sendEmail(mailOptions);
}
