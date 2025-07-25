import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: String,
      enum: ["AirBook", "Mac M4", "iPhone 14", "iPhone 15", "iPhone 16"],
      required: true,
    },
  },
  { timestamps: true }
);
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
