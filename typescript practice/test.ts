// print odd number 1000 to 1 skip 1 odd number after print 1 like 999 then skip 997 and so on with out using loop

// let printOddNum = (num: number) => {
//   if (num < 1) {
//     return 1;
//   } else if (num % 2 !== 0) {
//     console.log(num);
//     printOddNum(num - 4);
//   } else {
//     printOddNum(num - 1);
//   }
// };

// printOddNum(1000);

// swap two numbers with out using third variable

// let x: number = 1;
// let y: number = 2;

// [x, y] = [y, x];

// console.log(x,y)

// find duplicated LEVELEES

// function findDuplicate(inputString: string) {
//   let duplicates: string = '';
//   let seenCharacters: any = {};

//   for (let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];
//     if (seenCharacters[char]) {
//       if (!duplicates.includes(char)) {
//         duplicates += char;
//       }
//     } else {
//       seenCharacters[char] = true;
//     }
//   }

//   return duplicates;
// }

// console.log(findDuplicate('LEVELLS'));

// Question: Write a program to print a right-angled triangle pattern.

// for (let i = 0; i < 5; i++) {
//   let str: string = '';
//   for (let j = 0; j <= i; j++) {
//     str += '*';
//   }
//   console.log(str);
// }

//finding the largest number in the array;
// let a = [10, 9, 8, 12, 123, 34];
// let max = a[0];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }

// console.log(max)

// Program 5: Fibonacci Series
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// let fibseries = [0, 1];

// function fibSeries(num: number) {
//   if (num < 0) return [];
//   if (num < 1) return [0];
//   if (num < 2) return [0, 1];

//   for (let i = 2; i < num; i++) {
//     fibseries.push(fibseries[i - 2] + fibseries[i - 1]); //i-2 + i-1
//   }
//   return fibseries;
// }

// console.log(fibSeries(10));

// Program 6: Bubble Sort
// let nums = [64, 34, 25, 12, 22, 11, 90];

// let bubbleSort = (num: number[]): void => {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if (num[j] > num[j + 1]) {
//         // Correct swap operation
//         let temp = num[j + 1];
//         num[j + 1] = num[j];
//         num[j] = temp;
//       }
//     }
//   }
// };

// bubbleSort(nums);
// console.log(nums); // Expected output: [11, 12, 22, 25, 34, 64, 90]
