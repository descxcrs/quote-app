const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Backend
mongoose
  .connect("mongodb://localhost/quote_app", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((e) => console.log("Could not connect to MongoDB", e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Routes
app.use("../server/routes/quote-route.js", quotes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
