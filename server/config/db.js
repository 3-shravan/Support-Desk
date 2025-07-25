import mongoose from "mongoose";
const connectDB = async () => {
  const DB_URI = process.env.MONGO_URI || process.env.LOCAL_MONGO_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log("Connection to  database is successful 🚀");
  } catch (error) {
    console.error("MongoDB connection failed,", error.message);
    process.exit(1);
  }
};
export default connectDB;
