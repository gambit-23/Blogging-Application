const JWT = require("jsonwebtoken");

const secret = "Gambit@123";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  }; // the payload contains the data that is embedded with the json web token //

  const token = JWT.sign(payload, secret); // the token is verified using the secret key // 
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
