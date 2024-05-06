import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://rashidpadda145:Password_1122@backenddb.1rsjynt.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
    )
    .then(() => {
      console.log("Database Connected Successfully.");
    })
    .catch(() => {
      console.log("Connection Failed.");
      process.exit(1); // Exit process with failure
    });

}

export default connectDB;