


var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

let person = {
    name: "John",
    age: 25,
    isMarried: false
};



let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

//to string 

//1
console.log(typeof(String(4)));
//2
console.log(typeof('ww' + 5));
//3
console.log('https://vk.com/catalog/' + 5);

//to Number
//1
console.log(typeof(Number(true)));
//2
console.log(typeof(+'5'));
//3
console.log(typeof(parseInt('15px', 10)));
//все з інпутів промптів строки!!!!
let ans = +prompt('Hello?', '');

//0, '', null, undefined, NaN - always false


// to boolean
//1
let switcher = null;

if (switcher) {
    console.log("Working..");
}

switcher = 1;

if (switcher) {
    console.log("Working..");
}
//2 
console.log(typeof(Boolean(5)));
//3
console.log(typeof((!!5)));


//общение
//1
console.log('hello');
//2
alert('hello');
//3
let answer = confirm('are you here?');
console.log(answer);//true or false
//4 
let answer1 = prompt('are you here?', '');

//OPERATORS
//+ - * /, ++ and --

let incr = 10,
    decr = 10;

    incr++;
    decr--;
//   11         10(виведе, запомнить 11)
//  ++incr    incr++