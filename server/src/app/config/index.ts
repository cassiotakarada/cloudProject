import { Express } from "express";
import connectToMongoDB from "../database";
import appMiddleware from "./middleware";

const appConfig = async (app: Express): Promise<void> => {
  try {
    await connectToMongoDB();
    console.log("MongoDB connected successfully.");
    console.log("Environment Variables:", {
      PORT: process.env.PORT,
      LOCAL_PORT: process.env.LOCAL_PORT,
      MONGO_URI: process.env.MONGO_URI,
    });

    appMiddleware(app);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default appConfig;
