// Task4
function calculateTotalPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
var products = [
    { name: "Mango", price: 1 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 3 }
];
console.log(calculateTotalPrice(products));
// Task5
function isValidEmail(email) {
    var regex = /^\w+@\w+\.\w{2,}$/;
    return regex.test(email);
}
// Example usage
console.log(isValidEmail("test@example.com"));
// Compile and Run the TypeScript Code
// npm install -g typescript
// tsc product.ts
// node product.js
