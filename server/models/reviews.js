const { Schema } = require("mongoose");

const reviewSchema = new Schema(
    {
        review: {
          type: String,
          required: true,
        },
        classes: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      }
);

module.exports = reviewSchema;
