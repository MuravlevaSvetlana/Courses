//FIRST GROUP

let string = 'some test string';

// task 1
console.log(string[0]);
console.log(string[string.length-1]);

//task 2
console.log (string[0].toUpperCase());
console.log(string[string.length-1].toUpperCase());

//task 3
console.log('Положение слова string равно' + ' ' + string.indexOf('string'));

//task 4
console.log('Положение второго пробела' + ' ' + string.lastIndexOf(' '));

//task 5
console.log(string.substr(4,4));//если в задании подразумевалось вывести именно 4 символа
console.log(string.substr(4,5));//если в задании подразумевалось вывести именно 4 буквы

//task 6
console.log(string.slice(4,8));

//task 7 
let newString = string.slice(0,string.length-6);
console.log(newString);

//task 8
let a = '20';
let b = '16';
console.log (a+b);



// SECOND GROUP

//task 1
console.log(Math.PI.toFixed(2));// исходный результат в виде строки
console.log(Math.round(Math.PI*100)/100);// исходный результата в виде числа

//task 2
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51
));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51
));

//task 3
console.log(Math.random().toFixed(2));// исходный результат в виде строки
console.log(Math.round(Math.random()*100)/100);// исходный результата в виде числа
console.log(Math.round((Math.random() * (100 - 0))));

//task 4
let x = 0.6;
let y = 0.7;
console.log(Math.round((x+y)*10)/10);

//task 5
let number = '100$';
console.log(parseInt(number));
