import { Express } from "express";
import connectToMongoDB from "../database";
import appMiddleware from "./middleware";

const appConfig = async (app: Express): Promise<void> => {
  try {
    await connectToMongoDB();
    console.log("MongoDB connected successfully.");

    appMiddleware(app);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default appConfig;
