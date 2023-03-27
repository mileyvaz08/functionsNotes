//Intro to Arrays

//create
let students = ['Adam', 'Brad', 'Casey', 'David'];
let values = [1, 2, 3, 4];

//accessing items in array
console.log(students);
console.log(students[0]); //beginning item has index 0
console.log(students[1]); //index 1 means one away from the beginning, or second
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[4-2]);

//formatting items in array
console.log(`Student: ${students[1]}`);
console.log('Student: '+ students[2]);

//changing an item
students[1]='Stephanie';
console.log(students);

//push adds to the end
students.push('Eve');
console.log(students);
students.push('Fred', 'Georgia'); //can push more than 1 item!!
console.log(students);

//pop removes the last item from the end
students.pop();
console.log(students);

//shift removes the beginning item
students.shift();
console.log(students);

//unshift adds an item to the beginning
students.unshift('Zeke');
console.log(students);
students.unshift('Christina', 'Autumn', 'Waasna');
console.log(students);

//length of array = number of items in it
console.log(students.length);
console.log(students[students.length-1]); //gives last item

//slice up a piece of the original array
let fruits = ['banana', 'grape', 'lemon', 'orange', 'apple'];
let citrus = fruits.slice(2,4);
console.log(citrus);
//1st number is the starting index, which we include
//2nd number is the stopping index. we do not include
