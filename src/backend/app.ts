import "dotenv/config";
import express from "express";
import routermed from "./routes/routesMed";
import routeruser from "./routes/routesUser";
import routermedicine from "./routes/routesMedicine";
import cors from "cors";

const connectDB = require("./db/connection");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(routermed)
app.use(routeruser)
app.use(routermedicine)

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      console.log("successful connection to DB");
      app.listen(port, () => {
        console.log(`Server listening in port: ${port}`);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

start()




