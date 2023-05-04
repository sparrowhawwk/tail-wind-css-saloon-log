import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  try {
    await mongoose.createConnection(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default connectDB;

