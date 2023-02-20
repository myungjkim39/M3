const express = require("express");
const env = require("dotenv");
env.config();
const server = express();


// PORT
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log("listening to port, PORT");
});


// Endpoints 
server.get("/quote", (req, res) => {
  res.send("this is quote API!");
});

// function quote(carValue, driverRating) {
//   const yearlyPremium = (carValue * driverRating) / 100;
//   const monthlyPremium = yearlyPremium / 12;

//   return [yearlyPremium, monthlyPremium];
// }

// module.exports = quote;
