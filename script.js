// Task 2: Calculate total sum and average of numbers
function calculateSumAndAverage(numbers) {
    if (numbers.length === 0) {
      return { sum: 0, average: 0 }; 
    }
  
    const sum = numbers.reduce((acc, curr) => acc + curr);
    const average = sum / numbers.length;
  
    return { sum, average };
  }
  
  // Example Usage for Task 2
  const numbers = [1, 2, 3, 4, 5];
  const result = calculateSumAndAverage(numbers);
  console.log(`Total Sum: ${result.sum}`);
  console.log(`Average: ${result.average}`);

  // Task 3: Remove duplicates from an array of strings
  function removeDuplicates(arr) {
    const hashmap = {}; 
    const result = []; 
  
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      if (!hashmap[str]) {  
        hashmap[str] = true; 
        result.push(str); 
      }
    }
  
    return result; 
  }
  
  // Example Usage for Task 3
  const arr = [1,2,3,2,2,1,1];
  const uniqueStrings = removeDuplicates(arr);
  console.log(`Unique Strings: ${uniqueStrings}`);