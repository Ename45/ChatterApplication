const UserAuthentication = require('../services/UserAuthenticationService')

const register = async(req, res) => {
  try {
    const user = await UserAuthentication.register(req.body)
    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const codeConfirmation = async (req, res) => {
  try {
    const { email } = req.params;
    const { otp } = req.body;
    const confirmedMessage = await UserAuthentication.codeConfirmation({email, otp});
    return res.json(confirmedMessage.message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const loginData = await UserAuthentication.login(req.body);
    return res.json(loginData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {
  register,
  codeConfirmation,
  login
}