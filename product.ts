// Task4

interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    let total = 0;
    for (const product of products) {
      total += product.price; 
    }
    return total;
  }
   const products: Product[] = [
    { name: "Mango", price: 1 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 3 }
  ];
  
  console.log(calculateTotalPrice(products)); 
  
  
  // Task5
function isValidEmail(email: string): boolean {
 
  const regex = /^\w+@\w+\.\w{2,}$/;
  return regex.test(email);
}

// Example usage
console.log(isValidEmail("test@example.com"));


// Compile and Run the TypeScript Code

// npm install -g typescript
// tsc product.ts
// node product.js

