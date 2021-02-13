import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import userRoute from "./routes/userRoute";
import orderRoute from "./routes/orderRoute";
import categoryRoute from "./routes/categoryRoute";

const app = express();
app.use(cors());
app.options("*", cors());
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
