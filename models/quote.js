const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  productType: { 
      type: [String], 
      required: true 
    },
  numberOfGuests: { 
      type: String, 
      required: true 
    },
  eventType: { 
      type: String, 
      required: true 
    },
  cakeFlavour: { 
      type: String, 
      required: true 
    },
  cakeFilling: { 
      type: String, 
      required: true 
    },
  // cakeSize: { 
  //     type: String, 
  //     required: true 
  //   },
  dateAndTimePickup: { 
      type: String, 
      required: true 
    },
  otherInfo: { 
      type: String
    },
  createdAt: { 
      type: Date, 
      default: Date.now 
    },
  user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User' 
    }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
