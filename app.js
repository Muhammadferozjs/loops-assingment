// / QUESTION NO 1:

// 1. Write a program to display the message “Hello World” 5 times 
// in your browser using for loop.

// SOLUTION :

//     for (let i = 1; i <= 5 ; i++){
//      console.log('Hello world');
//      para.innerHTML+= ( `Hello world <br>`) ;
//     }



// QUESTION NO 2:

//    2. Write a program to print numeric counting from 1 to 10.

// SOLUTION :

// for(let i= 1;i<=10;i++){
// para.innerHTML+= `${i} <br>`

// }

// QUESTION NO 3:

// 3. Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user.

// SOLUTION :

// let userInput = +prompt('Enter your required table'); 
// let times = +prompt('Enter required table length'); 


// for (let i = 1; i <= times; i++){

// console.log(`  ${userInput} * ${i} = ${userInput * i}`);
// }


//              : OR :

// for (let i = 1 ;i < 11; i++ ){
//   console.log(i);
//   for (let j= 1 ; j < 11 ; j++ )

//   console.log(`${i} * ${j} = ${i*j}`);


// }

// QUESTION NO 4:

// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.


// SOLUTION :

// let  A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

// console.log(A);

// for (let i = 0 ; i < A.length; i++){

//   ul.innerHTML += `<li>${A[i]}</li>`
// }


// QUESTION NO 5:
// 5. Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// SOLUTION :

// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
//   ul.innerHTML += `<li>${fruits[i]} </li>`
//   para.innerHTML = `<br> Element at index 0 is ${fruits[0]}<br> Element at index 1 is ${fruits[1]}<br> Element at index 2 is ${fruits[2]}<br> Element at index 3 is ${fruits[3]}<br> Element at index 4 is ${fruits[4]}<br> Element at index 5 is ${fruits[5]}`


// }



// QUESTION NO 6:

// 6. Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user

// SOLUTION :


// const items = +prompt('Enter no of items you want!');

// let arr =[];

// for(let i=0;i < items;i++){
//      let itemName = prompt('Enter the required items');
//      arr.push(itemName);
// }

// console.log(arr);




// QUESTION NO 7:         :  INCOMPLETE :

// 7. Generate the following series in your browser. See example 
// output.

// SOLUTION :

// let counting = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']

// console.log(counting);
// para.innerHTML = `Counting : ${counting} <br> Reverse-Counting : ${counting.reverse()} <br> Even-Counting : `
// for (let i=1;i<=15;i++){
//      console.log(i);

// }



// QUESTION NO 8:

// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is 
// found in the list or not. Example

// SOLUTION :


// let  A = ['cake', 'apple' ,'pie', 'cookie', 'chips', 'patties'];

// const userInput = prompt('Enter the required item!');
// let isAvailable = false;
// for(let i = 0; i<A.length;i++){
//      if(userInput===A[i]){
//           console.log('Item is avlailable at index',A.indexOf(userInput))
//           isAvailable = true;
//      }
// }


//      if(!isAvailable){
//      console.log('not available');
//      }


















// let  A = ['cake', 'apple' ,'pie', 'cookie', 'chips', 'patties'];
// console.log(A);
// let input = prompt('Enter your required bakery item');
//  if(A.includes(input)){
//  para.innerHTML =(`This is available in our bakery...<br> ${input} is available at index ${A.indexOf(input)}`);
// }else{
//   para.innerHTML= (`Not Available`);
// }



// QUESTION NO 9:

// 9. Write a program to identify the largest number in the given 
// array.
// A = [24, 53, 78, 91, 12]

// SOLUTION :

// let  A = [24, 53, 78, 91, 12]
// let largest = A[0];

// for (i=0;i<A.length;i++){
//   if(A[i] > largest ){
//     largest = A[i]  
//   }
// }
// console.log(largest);
// para.innerHTML =`Array Items are : ${A} <br> The largest number of array is ${largest}`


// QUESTION NO 10:
// 10. Write a program to identify the smallest number in the given 
// array.
// A = [24, 53, 78, 91, 12]

// SOLUTION :

// A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for(i = 0; i < A.length; i++){
//   if (A[i]<smallest){
//     smallest = A[i]
//   }
// }
// console.log(smallest);
// para.innerHTML =`Array Items are : ${A} <br> The smallest number of array is ${smallest}`

// QUESTION NO 11:

// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// SOLUTION :

// let A = [24, 53, 78, 91, 12]
// console.log(A);
// let largest = A[0];
// let smallest = A[0];
// for (let i = 0; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]
//   }
//   if (A[i] < smallest) {
//     smallest = A[i]
//   }

//   para.innerHTML = `Array Items : ${A} <br> The smallest number is ${smallest}<br> The largest number is ${largest}`

// }
// console.log(largest);
// console.log(smallest);



// QUESTION NO 12:

// 12. Write a program to print multiples of 5 ranging 1 to 100

// SOLUTION :

// for(let i = 1; i<= 100 ;i++){
//   if(i % 5 == 0){
// console.log(i); 
// ul.innerHTML += `<li>${i}</li> `
//   }
// } 


// QUESTION NO 15:

// 15. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for 
// loops.

// SOLUTION :

// let A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// console.log(A);
// console.log(A[0]);
// console.log(A[1]);
// console.log(A[2]);


// para.innerHTML +=`${A[0]}  <br >`
// para.innerHTML += `${A[1]}  <br >`
// para.innerHTML += `${A[2]}  <br >`

// ul.innerHTML = `<li>${A[0]}</li> <li>${A[1]}</li><li>${A[2]}</li>`



// QUESTION NO 15:

// 7. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each 
// iteration, it will check if the current number is even or odd, and 
// report that to the screen (e.g. "2 is even").

// SOLUTION :

// for (let i = 0; i <= 20; i++) {

//   if(i%2==0){
//     console.log(` ${i} is even number..`);
//     ul.innerHTML += (`<li>${i} is even number..</li> <br>`);
//   }if(i %2 != 0){
//     console.log(`${i} is odd number..`);
// ul.innerHTML +=(`<li>${i} is odd number..</li> <br>`);
//   }
  
// }

// QUESTION NO 18:
// 18. Write a program to calculate the product of the odd integers 
// from 1 to 7.
// SOLUTION :

// for(let i=1;i<=7;i++){
// if (i %2 != 0 ){
//  console.log(i);
// }

 
// }





// QUESTION NO 19:


// 19. Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7

// SOLUTION :

// let input = prompt
// for (i = 1; i <= 5; i = i + 1) {
//     let str = "";
//     for (j = 0; j < i; j = j + 1) {
//       str += "*";
//     }
//     console.log(str);
//   }
  
// for (let i = 1;i<=7; i=i+1){
// let str = '';
// for(let j=0; j < i ;j= j+1){
//      str += '*'
// }
// console.log(str);


// }