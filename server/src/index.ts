import "dotenv/config";
console.log("Environment Variables:", {
  PORT: process.env.PORT,
  LOCAL_PORT: process.env.LOCAL_PORT,
  MONGO_URI: process.env.MONGO_URI,
});

import app from "./app";

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
