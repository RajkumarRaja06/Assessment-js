// 1. Write a JavaScript program to calculate the factorial of a given non-negative integer.
// Sample Input: (5);
// Sample Output: 120

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

// 2. Write a JavaScript function to find the maximum element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample output: 9

const maxNumber = (array) => {
  let number = array[0];
  array.forEach((item) => {
    if (number < item) {
      number = item;
    }
  });
  return number;
};

console.log(maxNumber([5, 2, 9, 1, 7]));

// 3. Write a JavaScript program to remove a specific element from an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: [1, 2, 4, 5]

const removeElement = (array, num) => {
  const output = array.filter((item) => item !== num);
  return output;
};

console.log(removeElement([1, 2, 3, 4, 5], 3));

// 4. Write a JavaScript program to find the second smallest element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample Output: 2

const findSmallestElement = (array) => {
  const output = array.sort((a, b) => {
    return a - b;
  });
  return output[1];
};

console.log(findSmallestElement([5, 2, 9, 1, 7]));

// 5. Write a JavaScript function to check if two arrays are equal (contain the same elements in the same order).
// Sample Input: ([1, 2, 3], [1, 2, 3]);
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: 3

// 5. Write a JavaScript function to find the largest and smallest elements in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: [1, 5]

const findElement = (array) => {
  const output = array.sort((a, b) => {
    return a - b;
  });
  return [output[0], output[output.length - 1]];
};

console.log(findElement([1, 2, 3, 4, 5]));

// 6. Write a JavaScript function to find the index of the first occurrence of a given element in an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: 2

// 7. Write a JavaScript function to check if a given string is a valid email address.
// Sample Input: ("test@example.com");
// Sample Output: true

const validateEmail = (email) => {
  const output = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (output) {
    return true;
  } else return false;
};
console.log(validateEmail('rajkumar@gmail.com'));

// 8. Write a JavaScript program to count the number of occurrences of each element in an array.
// Sample Input: ([1, 2, 2, 3, 3, 3]);
// Sample Output: {1: 1, 2: 2, 3: 3}

const findCount = (array) => {
  let object = {};
  array.forEach((item) => {
    object[item] = (object[item] || 0) + 1;
  });
  console.log(object);
};

findCount([1, 2, 2, 3, 3, 3]);

// 9. Write a JavaScript function to implement a binary search algorithm on a sorted array.
// Sample Input: ([1, 2, 3, 4, 5], 4);
// Sample output: 3

// 10. Write a JavaScript program to find the intersection of two arrays (common elements).
// Sample Input: ([1, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]

const findCommonElement = (array1, array2) => {
  let output = [];
  array1.forEach((array1Item, array1Index) => {
    array2.forEach((array2Item, array2Index) => {
      array1Item === array2Item ? output.push(array2Item) : null;
    });
  });

  return output;
};

console.log(findCommonElement([1, 2, 3], [2, 3, 4]));
