const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log(req.params);
    // res.send({ firstName: "vansh", lastName: "doe" }); // Changed to a safer placeholder
    next();
  },
  (req, res) => {
    console.log(req.params);
    res.send({ firstName: "vansh", lastName: "doe" }); // Changed to a safer placeholder
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
