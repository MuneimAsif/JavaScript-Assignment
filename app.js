//  ===============   JAVASCRIPT ASSIGNMENT CHAPTER ( 21 - 40 ) ===================================

// CHAPTER 21 (CHANGING CASE)

// 1
// var userInput = prompt("Type Anything");
// var allLower = userInput.toLowerCase();
// console.log(allLower);

// 2
// var x = "HELLO WORLD";
// console.log(x.toLowerCase());

// 3
// var y = "hello world";
// console.log(y.toUpperCase());

// 4
// var x = "HELLO WORLD";
// console.log(y.toLowerCase());

// 5
// var arr = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i].toLowerCase())
// }

// 6
// var x = "hello world";
// alert(x.toUpperCase());

// 7
// var city = "kaRacHi";
// var firstLetter = city.slice(0,1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = city.slice(1);
// otherLetters = otherLetters.toLowerCase();
// console.log(firstLetter + otherLetters);

//  ================ CHAPTER 21 COMPLETED ===================

// CHAPTER 22 - 25 (STRINGS)

// 1
// var sameWords = "captain";
// var ap = sameWords.slice(1,3);
// console.log(ap);

// 2
// var myString = "Hello World";
// console.log(myString.length);

// 3
// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);

// 4
// var myString = "Hello World";
// var char = myString.length;
// console.log(char);

// 5
// var a = "Hello World";
// var b = a.slice(1,-3)
// console.log(b);

// 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log("The Value Of Index Will Be " + indx);

// 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log("The Value Of Index Will Be " + indx);

// 8
// var a = "You may go now or I will go"
// var lastIndx = a.lastIndexOf("go");
// console.log(lastIndx);

// 9
// var string = "Hello World";
// var indxNum = 5;
// if(indxNum < string.length){
//     console.log("Segment Found")
// }

// 10
// var a = "abcde";
// a = a.charAt(2);
// console.log(a);

// 11
// var text = "Pakistan Zindabad";
// var cha = text.charAt(11);
// console.log(cha);

// 12
// var str = "HelloWorld";
// var x = str.charAt(str.length - 1);
// console.log(x);

// 13
// var input = prompt("Enter Your Name");
// var cha = input.charAt(6);
// console.log(cha);

// 14
// if (str.length >= 3 && str.charAt(2) === 'desiredCharacter');

// 15
// Declare an empty array
// let charactersArray = [];
// // String represented by a variable
// let reply = "no, I have an idea";
// // For loop to cycle through each character of the string
// for (let i = 0; i < reply.length; i++) {
//   // Assign each character to an element of the charactersArray
//   charactersArray[i] = reply.charAt(i);
// }
// // Replace the first instance of "no" with "yes" in the string
// let revisedReply = reply.replace("no", "yes");
// console.log(revisedReply)

// 16
// var str = "1 2 3 4 5";
// var newStr = str.replace("1","one")
// console.log(newStr);

// 17
// var x = "Aain Saw Aebra In The Aoo"
// var y = x.replace(/A/g, "Z");
// console.log(y);

//  ================== CHAPTER 21 - 25 COMPLETED ========================

// CHAPTER 26 (ROUNDING NUMBERS)

// 1
// var a = Math.round(123.5);
// console.log(a);

// 2
// var origNum = 123.26;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// 3
// var origNum = 123.66;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// 4
// var a = 213.43;
// var b = Math.round(a);
// console.log(b);

// 5
// var a = .5;
// var b = Math.floor(a);
// console.log(b);

//  ================== CHAPTER 26 COMPLETED ============================

// CHAPTER 27 (RANDOM NUMBERS)

// 1
// var a = Math.random();
// var b = Math.ceil(a*50);
// console.log(b);

// 2
// var a;
// var b = Math.random(a);
// console.log(b);

// 3 (dice)
// var a = Math.random();
// var b = Math.ceil(a*6);
// console.log(b);

// 4 (toss)
// var a = Math.random();
// var b = Math.ceil(a*2);
// if(b == 1){
//     console.log("Heads");
// }else if(b == 2){
//     console.log("Tails");
// }

//  ===================== CHAPTER 27 COMPLETED =============================

// CHAPTER 28,29 (CONVERTING STRINGS)

// 1
// var a = parseInt("123");
// console.log(a);

// 2
// var a = parseInt("123");
// console.log(a);

// 3
// var decimalString = "3.14";
// var floatNumber = parseFloat(decimalString);
// console.log(floatNumber);

// 4
// var a = parseInt("123");
// if(a == 123){
//     alert("Successfully Converted")
// }else{
//     alert("Not Converted")
// }

// 5
// var a = 123;
// console.log(a.toString());

// 6
// var a = 42;
// var b = a.toString(a);
// console.log(b);

// 7
// var a = parseInt("3.14");
// console.log(a);

//  ================== CHAPTER 28,29 COMPLETED =========================

// CHAPTER 30 (CONTROLLING THE LENGTH OF DECIMALS)

// 1
// var num = 123.1434234;
// var newNum = num.toFixed(4);
// console.log(newNum);

// 2
// var a = 21.12432432432;
// a = a.toFixed(2).toString();
// a = +a
// console.log(a)

// 3
// var a = 12.32324;
// a = a.toFixed(2).toString();
// if(a == 12.32.toString()){
// alert("Condition True")
// }

// 4
// var a = 121.123214143121413434;
// alert(a.toFixed(2).toString());

//  ================== CHAPTER 30 COMPLETED ==============================

// CHAPTER 31 - 34 (DATE AND TIME)

// 1
// var date = new Date();
// var dObj = date;
// console.log(dObj);

// 2
// var date = new Date();
// var dStr = date.toString();
// console.log(dStr);

// 3
// var d = new Date();
// var day = d.getDay();
// console.log(day);

// 4
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var d = new Date();
// var day = days[d.getDay(0)];
// console.log(day);

// 5
// var date = new Date();
// var a = date.getDate();
// var a = date.getFullYear();
// var a = date.getHours();
// var a = date.getMilliseconds();
// var a = date.getMinutes();
// var a = date.getMonth();
// var a = date.getSeconds();
// var a = date.getTime();

// 6
// var date = new Date("Dec 31, 2020");
// console.log(date);

// 7
// var date = new Date("2-02-1992");
// console.log(date);

// 8
// alert(new Date().getTime() - new Date(1980, 0, 1).getTime());

// 9
// var date = new Date();
// date = date.setFullYear("2004");
// console.log(date);

// 10
// var date = new Date();
// date.setFullYear("2020");
// console.log(date);

// 11
// var myDate = new Date('2023-05-21');
// var dayOfWeek = myDate.getDay();
// console.log('Day of the week:', dayOfWeek);

// 12
// var user = prompt("Enter Date")
// var date = new Date(user);
// date.setMinutes(52);
// console.log(date);

// 13
// var date = new Date();
// date.setHours(2);
// console.log(date);

// 14
// var ourDate = new Date();
// var user = prompt("Enter Your DOB")
// var userDob = new Date(user);
// var ourTime = ourDate.getTime();
// var useTime = userDob.getTime();
// var totalTime = ourTime - useTime;
// var conversion = totalTime/1000*60*60*24*365;
// var roundOff = Math.floor(conversion);
// console.log("You Are " + roundOff + " Years Old");

//  ================== CHAPTER 31 - 34 COMPLETED =====================

// CHAPTER 35 - 37

// 1
// function abc (){
//     alert("Hello World")
// }
// abc()

// 2
// function askaName(Name){
//     var userName = prompt("Enter UserName")
//     alert(Name + userName + "!")
// }
// askaName("Welcome ")

// 3
// function parentFnction (){
//     function child1(){
//         console.log("Hello World");
//     }
//     function child2(){
//         console.log("Hello Pakistan");
//     }
//     child1();
//     child2();
// }
// parentFnction();

// 4
// function abc (Name){
//  alert(Name)
// }
// abc(prompt("Enter Name"));

// 5
// function concat(a,b,c){
// console.log(a+b+c)
// }
// concat(123," Hello World ",1234)

// 6
// function abc (a,b){
// var c = a + b;
// console.log(c)
// }
// abc("Hello ","World");

// 7
// function abc (a,b,c){
// var d = a*b*c;
// console.log(d)
// }
// abc(2,3,4);

// 8


// 9
// function sum (a,b){
// var sum = a + b;
// return sum;
// }
// var a = sum(2,3)
// console.log(a);

// 10
// Same As 8

// 11
// function abc() {
//     var a = "Hello World";
//     return a;
// }
// var b = abc()
// console.log(b)

// 12
// function lngth (word){
// var length = word.length;
// console.log(length)
// }
// length("Hello World")

// 13
// function setyear (year){
//     var date = new Date();
//     date.setFullYear(year)
//     console.log(date)
// }
// setyear("1997")

// 14
// function age(user){
// var ourDate = new Date();
// var userDob = new Date(user);
// ourDate.getTime();
// userDob.getTime();
// var totalTime = ourDate - userDob;
// var conversion = totalTime/1000*60*60*24*365;
// var roundOff = Math.floor(conversion);
// console.log("You Are " + roundOff + " Years Old");
// }
// age(user = prompt("Enter Your DOB"))

// 15
// function arr(Name) {
//     var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima']
//     for(var i = 0; i < array.length; i++){
//         if(array[i] == Name){
//             alert("True")
//             break;
//         }else if(array[i] != Name){
//             console.log("False")
//             break;
//         }
//     }
// }
// arr("zaid")

// 16
// function rep(word){
// var str = word;
// var repeat = str.repeat(10);
// console.log(repeat)
// }
// rep("abcde ")

// 17
// function rev (arr){
//     arr.reverse();
//     console.log(arr)
// }
// rev(array = ['a','b','c','d','e'])

//  ================== CHAPTER 35 - 37 COMPLETED ===============================

// CHAPTER 38 (Local Vs Global Variables)

// 1 (Usage Of Local Variable)
// function localVar(){
//     var a = "Hello World";
// console.log(a)  // first method for the usage of local variable
// return a;
// }
// var b = localVar()
// console.log(b) // Another method for the usage of local variable

// 2 (Global Variable Usage)
// var a = "Hello World";
// function glob (){
//     console.log(a)
// }
// glob(a);

//  ============================== CHAPTER 38 COMPLETED ==========================

// CHAPTER 39 - 40 (Switch Statements)

// 1
// var num = 1;
// switch(num){
//     case 1:
//     console.log(1);
//     break
//     case 2:
//     console.log(2);
//     case 3:
//     console.log(3);
// }

// 2
// let cityName = prompt("Enter the city name:");
// let message;

// switch (cityName) {
//   case "london":
//     message = "City is London.";
//     alert(message);
//     break;
//   case "paris":
//     message = "City is Paris.";
//     alert(message);
//     break;
//   case "new york":
//     message = "City is New York.";
//     alert(message);
//     break;
//   default:
//     message = "City does not match any expected cities.";
//     alert(message);
// }

// ======== X ========================= ASSIGNMENT COMPLETED ==================== X ==========================