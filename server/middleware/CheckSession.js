const VerifyJWT = require('../helpers/GetJwtToken')


const checkSession = async (req,  res, next) => {
  // console.log("request header sent? ", req.headers);
  // console.log("i am me ",req.cookies);
  const sessionToken = req.cookies.token;

  // console.log("session token middleware-->", sessionToken);

  try {
    if (!sessionToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify the session token and extract user data
    const userData = await VerifyJWT.verifyToken(sessionToken);

    // console.log('i got here in checkSession UserData==>', userData);

    if (!userData) {
      throw new Error("Unauthorized.");
    }

    // Attach the user data to the request for later use
    req.userData = userData;

    // console.log("req.userData in checkSession--> ", req.userData);

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    throw error;
    // res.clearCookie("token")
    // return res.redirect('/login')
  }
};


module.exports = {
  checkSession
}