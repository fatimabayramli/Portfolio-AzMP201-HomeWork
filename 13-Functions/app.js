"use strict";

// 21. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function toplama(x,y) {
//     return x + y
// }

// function cixma(x,y) {
//     return x - y
// }

// function vurma(x,y) {
//     return x * y
// }

// function bolme(x,y) {
//     return x / y
// }

// console.log(toplama(6,2));
// console.log(cixma(6,2));
// console.log(vurma(6,2));
// console.log(bolme(6,2));

// 22. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2
//         default:
//             return;
//     }
// }
// console.log(calculate(5, 3, '+'));
// console.log(calculate(5, 3, '-'));
// console.log(calculate(5, 3, '*'));
// console.log(calculate(5, 3, '/'));

// 23. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın

// let countries = [
//     { name: "Azerbaijan", cities: ["Baku", "Ganja", "Sumqayit"], numberOfcities : 78 },
//     { name: "Turkey", cities: ["Istanbul", "Ankara", "Izmir","Adana"], numberOfcities : 158 },
//     { name: "Germany", cities: ["Berlin", "Hamburg", "Munich",], numberOfcities : 236 }
// ];

// function getCountries(countries) {
//     for (let i = 0; i < countries.length; i++) {
//         console.log(countries[i].name);
//     }
// }
// getCountries(countries)

// 24. Hərfə görə ölkə sayının olduğu object return edən funksiya yazın

// function getCountryCountByLetter(countries, letter) {
//     const countByLetter = {};
//     for (let i = 0; i < countries.length; i++) {
//         const countryName = countries[i].name;
//         const firstLetter = countryName[0].toUpperCase();
//         if (firstLetter === letter.toUpperCase()) {
//             countByLetter[firstLetter] = (countByLetter[firstLetter] || 0) + 1;
//         }
//     }
//     return countByLetter;
// }
// getCountryCountByLetter(countries, letter)

// 25. Ən çox şəhəri olan ölkə adını return edən funksiya yazın

// function getCountryWithMostCities(countries) {
//     let maxCities = 0;
//     let countryWithMostCities = "";
//     for (let i = 0; i < countries.length; i++) {
//         let numCities = countries[i].cities.length;
//         if (numCities > maxCities) {
//             maxCities = numCities;
//             countryWithMostCities = countries[i].name;
//         }
//     }
//     return countryWithMostCities; ;
// }
// console.log(getCountryWithMostCities(countries)); 

// 26. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya

// function getCitiesofCountryWithLongestName(countries) {
//     let LongestNameCountry = "";
//     let citiesNew;
//     for (let i = 0; i < countries.length; i++) {
//         if (LongestNameCountry<countries[i].name.length) {
//             LongestNameCountry = countries[i].name.length;
//             citiesNew = countries[i].cities;
//         }
//     }
//     return citiesNew
// }
// console.log(getCitiesofCountryWithLongestName(countries));

// 27.  Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .

// function numberofCitiesofCountry(countries) {
//     for (let i = 0; i < countries.length; i++) {
//         console.log(countries[i].name, countries[i].numberOfcities);
//     }
// }
// numberofCitiesofCountry(countries)

// 28. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// let numberArray = [5, -39, 25, 8, 10, -55, -16, 4, 88, -2]

// 29. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

// function getSumPositiveNumber(numberArray) {
//     let sum = 0;
//     let check;
//     for (let i = 0; i < numberArray.length; i++) {
//         if (numberArray[i]>0) {
//             sum += numberArray[i]
//             check = true;
//         } 
//     } 
//     if (check == false) {
//         sum = 0
//     }

//     return sum;
// }
// console.log(getSumPositiveNumber(numberArray));

// 30. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik  element ilə ən böyük elementin ədədi ortasıdır.

// let object = (numberArray) => {
//     let max = numberArray[0];
//     let min = numberArray[0];
//     let median = 0;
//     let sum = 0;
//     let number = 0;
//     let average = 0;
//     for (let i = 0; i < numberArray.length; i++) {
//         let element = numberArray[i];
//         sum += element
//         number++
//         average = sum/number
//         if (numberArray[i]>max) {
//             max = numberArray[i]
//         }
//         if (numberArray[i]<min) {
//             min = numberArray[i]
//         }
//         median = (max + min)/2
        
//     } let obj = {average, median}
//     return obj
// }
// console.log(object(numberArray)); 

// 31. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Gurban" - "MniG"

// let capitalLetters = (sentence) => {
//     let str =""
//     let arr = sentence.split("")
//     for (let i = 0; i < arr.length; i++) {
//         let firstLetter = arr[i][0]
//         if (firstLetter === firstLetter.toUpperCase()) {
//             str += firstLetter
//         }
//         if (arr[i] == " ") {
//             str += arr[i+1]
//         }
//     }
//     return str;
// }
// let sentence = "My name is Fatima"
// console.log(capitalLetters(sentence)); 

// 32. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-    j8t

// let reduceWords = (sentence) => {
//     let array = sentence.split(" ")
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (array[i].length>4) {
//             let result = array[i].substr(1,6)
//             console.log(result);
//         }
//     }
// }
// let sentence = "Bu suala gore nece saat ellesdim hecne de alinmadi"
// console.log(reduceWords(sentence));

// 33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]

// let people = [
//     { name: "Ali", age: 30 },
//     { name: "Zeynəb", age: 25 },
//     { name: "Məhəmməd", age: 28 },
//     { name: "Fatimə", age: 32 }
//   ];
// let arr = []
// let ages = (people , arr) => {
//     let maxAge = 0;
//     let minAge = people[0].age;
//     let ferq = 0;
//     for (let i = 0; i < people.length; i++) {
//         let element = people[i];
//         if (element.age>maxAge) {
//             maxAge = element.age
//         }
//         if (element.age<minAge) {
//             minAge = element.age
//         }
//     } 
//     ferq = maxAge - minAge
//     arr.push(maxAge,minAge,ferq)
//     return arr
// }
// console.log(ages(people , arr));

// 34. N faktorialı hesaplayan funksiya yazın.

// let N = 7;
// let hasil = 1;
// let factorial = (N) => {
//     for (let i = 1; i < N; i++) {
//         // console.log(i);
//         hasil *= i
//     } console.log(hasil);
// }
// factorial(N)