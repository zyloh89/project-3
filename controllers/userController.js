const User = require("../models/User");
const Joi = require("@hapi/joi");
const {
  checkPassword,
  generateAccessToken
} = require("../utils/utils.js");

const validationSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .required(),
  lastName: Joi.string()
    .alphanum()
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  phoneNumber: Joi.string()
    .min(10)
    .max(12)
    .required(),
  password: Joi.string()
    .min(8)
    .required()
});

// Login

const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const query = await User.findOne({ "email": email });
        if (query !== null) {
          const result = await checkPassword(password, query.password);
          if (!result) {
            return res.status(403).send("incorrect credentials");
          } else {
            const token = await generateAccessToken(query);
            return res.send({ token });
          }
        } else {
          return res.status(403).send("incorrect credentials");
        }
      } catch (err) {
        return res.status(404).send("an error occurred" + err);
      }
    } else {
      return res.status(403).send("incorrect credentials");
    }
  };
  
  module.exports = {
    login
  };