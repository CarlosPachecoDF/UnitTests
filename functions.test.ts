import { capitalize, exponentiation, multiply, remainder, reverse } from "./functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse a word", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});


test("extract the remainder of two numbers correctly", () => {
  expect(remainder(7, 3)).toBe(1);
});

test("power two numbers correctly", () => {
  expect(exponentiation(2, 4)).toBe(16);
});

// Add more test cases for the other functions
