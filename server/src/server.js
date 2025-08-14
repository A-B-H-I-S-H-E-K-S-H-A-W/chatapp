import app from "./app.js";
import { configDotenv } from "dotenv";
import dotenv from "dotenv";
import { mongoDBConnection } from "./db/db.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

mongoDBConnection()
  .then((data) => {
    console.log("MONGO DB CONNECTED SUCCESSFULLY ::::", data.connection.host);
    app.listen(port, () => {
      console.log(`Your server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION ERROR ::::", error);
    process.exit(1);
  });
