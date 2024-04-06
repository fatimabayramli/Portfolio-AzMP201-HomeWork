"use strict";

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

// 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!=0) {
//         console.log(`Tek elementli indeksler ${i}. `);
//     }
// }

// 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2!=0) {
//         console.log(`Tek indeksli elementler : ${arr[i]}`);
//     }
// }

// 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max = arr[i]
//     }
// } console.log(max);

// 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
// }
// console.log(max);

// 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let min = arr[0];
// let minİndex = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<min) {
//         min = arr[i]
//         minİndex = i
//     }
// } console.log(minİndex);

// 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let minIndex = 0;
// let maxIndex = 0;
// let newArr = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<arr[minIndex]) {
//         minIndex = i
//     }
//     if (arr[i]>arr[maxIndex]) {
//         maxIndex = i
//     }
// }
// let a = arr[minIndex]
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = a;
// console.log(arr)

// 14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

// 15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let number = prompt("Enter a number: ")
// for (let i = 0; i < arr.length; i++) {
//     if (number==arr[i]) {
//         console.log(true)
//     }
// } alert("Arrayde var")

// 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==true || arr[i] == false) {
//         console.log(arr[i-1],arr[i+1]);
//     }
// }

// 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let longest_word = "";
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length>longest_word.length) {
//         longest_word = arr[i]
//     }
// }console.log(longest_word);

// 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && arr[i] === arr[i].toUpperCase()) {
//     console.log(arr[i]);
//     console.log(i);
//   }
// }

// 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

// for (let i = 0; i < arr.length; i++) {
//   let number = 0;
//   let elem = arr[i];
//   for (let j = 0; j < elem.length; j++) {
//     if (typeof elem === "string" && elem[j] === elem[j].toUpperCase()) {
//       number++;
//     }
//   }
//   if (number > 2) {
//     console.log(arr[i]);
//   }
// }
