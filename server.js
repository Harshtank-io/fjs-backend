const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const frameworksRouter = require("./routes/frameworks");
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.MONGO_URI
    //      {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use("/api/frameworks", frameworksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
