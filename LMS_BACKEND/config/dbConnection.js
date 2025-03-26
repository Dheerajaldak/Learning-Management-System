import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectionToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI || `another db`
    );
    if (connection) {
      console.log(`Database Connected: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectionToDB;
