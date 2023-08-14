const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  
    user : { type: mongoose.Schema.ObjectId, ref: 'user' },
    flight : {type: mongoose.Schema.ObjectId, ref: 'flight' }
}
)

const BookingModel = mongoose.model("booking",bookingSchema);

module.exports={BookingModel}