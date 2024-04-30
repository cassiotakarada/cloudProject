import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export default (): void => {
  if (mongoURI) {
    console.log(`Connecting to MongoDB at URI: ${mongoURI}`);
    mongoose
      .connect(mongoURI, {
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      })
      .then(() => console.log("Connected to MongoDB successfully"))
      .catch(e => console.error(`Failed to connect to MongoDB, error: ${e}`));
  } else {
    console.log("MongoDB URI is undefined");
  }
};
