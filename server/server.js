const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
// const mongoose = require("mongoose");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

// //config dotenv
dotenv.config();

// //connection mongodb
connectDB();
// mongoose.set("strictQuery", true);
// mongoose.connect(process.env.MONGO_URI);


const app = express();

// //middlewares
app.use(express.json());  
app.use(morgan("dev"));

// //route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// } else {
  app.get("/", (req, res) => {
    res.send("<center><h1>Aditya Lahane</h1></center>");
  });
// }

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
  );
});