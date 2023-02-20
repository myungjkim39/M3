// const quote = require("./quote");
// const { expect } = require("chai");
// const assert = require("assert");

// const testCases = [
//   //positive cases
//   {
//     scenario: "Both inputs are numbers",
//     input: [4800, 2],
//     expected: [96, 8],
//   },
//   {
//     scenario: "Car value as a string format of number",
//     input: ["4800", 2],
//     expected: [96, 8],
//   },

//   {
//     scenario: "Risk rating as a string format of number",
//     input: [4800, "2"],
//     expected: [96, 8],
//   },
//   {
//     scenario: "Risk rating as 0",
//     input: [4800, 0],
//     expected: ["Risk Rating needs to be at least 1"],
//   },
//   {
//     scenario: "Risk rating value higher than 5",
//     input: [4800, 6],
//     expected: ["Risk Rating value needs to be below 6"],
//   },
//   {
//     scenario: "Risk rating value lower than 1",
//     input: [4800, -1],
//     expected: ["Risk Rating value needs to be at least 1"],
//   },
//   {
//     scenario: "Negative Car value number",
//     input: [-4800, 1],
//     expected: ["The Car value cannot be a negative number"],
//   },
//   {
//     scenario: "Missing value",
//     input: [null, 1],
//     expected: ["Missing car value"],
//   },
// ];

// describe("quote tests", () => {
//   testCases.map((tc) => {
//     it(tc.scenario, () => {
//       const [yearlyPremium, monthlyPremium] = quote(tc.input[0], tc.input[1]);
//       expect(yearlyPremium).to.equal(tc.expected[0]);
//       expect(monthlyPremium).to.equal(tc.expected[1]);

//       // check if expected value is negative
//       assert(tc.expected[0] >= 0, "Expected yearlyPremium to be non-negative");
//       assert(tc.expected[1] >= 0, "Expected monthlyPremium to be non-negative");
//     });
//   });
// });
