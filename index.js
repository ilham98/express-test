const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send({
    message: "Hello",
  });
});

app.listen(3000, () => {
  console.log(`Listening in port ${3000}`);
});
