const mongoose = require("mongoose");
var commandeDetailSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    createdAt: {
      type:Date, 
      default: Date.now
    },
    updatedAt: {
      type:Date, 
      default: Date.now
    }
});

module.exports = mongoose.model("commandeDetail", commandeDetailSchema);