import dotenv from 'dotenv';

import mongoose from "mongoose";
dotenv.config();

const url: string = process.env.MONGO_URL as string;

interface ConnectToMongoDbResponse {
  closeMongoConnection: (force?: boolean) => Promise<void>;
}

const connectToMongoDb = (): ConnectToMongoDbResponse => {
  mongoose
    .connect(url)
    .then(() => {
      console.debug("Connected to MongoDB");
    })
    .catch((error) => {
      console.debug("Error connecting to MongoDB", error);
    });

  mongoose.connection.on("connected", () => {
    console.debug("Connection to MongoDB established");
  });

  mongoose.connection.on("error", (error) => {
    console.debug("Error connecting to MongoDB", error);
  });

  mongoose.connection.on("disconnected", () => {
    console.debug("Disconnected from MongoDB");
  });

  return {
    closeMongoConnection: mongoose.connection.close.bind(mongoose.connection),
  };
};

export default connectToMongoDb;
