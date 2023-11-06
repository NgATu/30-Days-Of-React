const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log("Exercises");
console.log("1--------");
products.forEach((product) => {
  let text = `The price of ${product.product} is ${product.price} dollars.`;
  if (product.price === "" || product.price === " ") {
    text = `The price of ${product.product} is unknown.`;
  }
  console.log(text);
});

console.log("2--------");
let totalPrice = 0;
products.forEach((product) => {
  if (product.price !== "" && product.price !== " ") {
    totalPrice += product.price;
  }
});
console.log(`The total price is ${totalPrice} dollars.`);

console.log("3--------");
let totalPrice2 = products
  .map((product) => product.price)
  .filter((price) => price !== "" && price !== " ")
  .reduce((a, b) => a + b);
console.log(`The total price is ${totalPrice2} dollars.`);

console.log("4--------");
let someDontHavePrice = products.some(
  (product) => product.price === "" || product.price === " "
);
console.log(`Some products don't have price: ${someDontHavePrice}`);
