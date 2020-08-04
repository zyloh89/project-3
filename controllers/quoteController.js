const User = require("../models/User");
const Quote = require("../models/Quote");
const ObjectId = require("mongoose").Types.ObjectId;
const Joi = require("@hapi/joi");

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
  productType: Joi.array()
    .items(Joi.string())
    .required(),
  pickupDate: Joi.date()
    .greater("now")
    .required(),
  eventType: Joi.string().required(),
  numberOfGuests: Joi.number()
    .integer()
    .min(1)
    .required(),
  cakeFlavour: Joi.string().required(),
  cakeFilling: Joi.string().required(),
  otherInfo: Joi.string().required()
});

// related to Admin.js (GET request)
const getAllQuotes = async (req, res) => {
  const allQuotes = await Quote.find().populate("user");
  res.status(200).send(allQuotes);
};
console.log(getAllQuotes)

// related to quoteData.js (GET request)
const getOneQuote = async (req, res) => {
  try {
    const params = req.params;
    const quote = await Quote.find(ObjectId(params.id)).populate("user");
    if (!quote) {
      res.status(400).send(`Can not find by id #${params.id}`);
    } else {
      res.status(200).send(quote);
    }
  } catch (err) {
    res.send(`There is an err: ${err}`);
  }
};
console.log(getOneQuote)

const combineDateAndTime = (date, time) => {
  const combined = new Date(date + " " + time);
  return combined;
};

// related to Quote.js (POST request)
const createNewQuote = async (req, res) => {
  // The below codes are to combine two data(pickUpDate & pickUpTime) into one data(pickUpDateAndTime)
  let userInput = req.body;
  userInput.pickUpDateAndTime = combineDateAndTime(
    req.body.pickUpDate,
    req.body.pickUpTime
  );

  // delete two keys(pickUpDate & pickUpTime)
  delete userInput["pickUpDate"];
  delete userInput["pickUpTime"];

  try {
    await validationSchema.validate(userInput, { abortEarly: false });
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      productType,
      pickUpDateAndTime,
      eventType,
      numberOfGuests,
      cakeFlavour,
      cakeFilling,
      otherInfo
    } = userInput;

    const newUser = await new User({
        firstName,
        lastName,
        email,
        phoneNumber
    });

    const savedUser = await newUser.save();
    console.log(savedUser)

    const newQuote = await new Quote({
      productType,
      pickUpDateAndTime,
      eventType,
      numberOfGuests,
      cakeFlavour,
      cakeFilling,
      otherInfo,
      user: savedUser._id
    });
    console.log(newQuote);

    const savedQuote = await newQuote.save();
    console.log(savedQuote);

    res.send(savedQuote);
    
  } catch (validationError) {
    console.log(validationError)
    const errorMessage = validationError.details.map(d => d.message);
    res.status(400).send(`Validation Error(s) => ${errorMessage}`);
  }
};
console.log(createNewQuote)

module.exports = {
  getAllQuotes,
  getOneQuote,
  createNewQuote
};
