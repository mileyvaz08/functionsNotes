function findAreaofRectangle(length, width){
    console.log(length * width);
}
findAreaofRectangle(7, 10);
findAreaofRectangle(49, 17);

function findAreaofCircle(diameter){
    console.log(diameter * 3.14);
}
findAreaofCircle(34, 3.14);
findAreaofCircle(76, 3.14);

function findMin(x, y){
    if(x < y){
        console.log(`The  smaller number is ${x}.`);
    }else {
        console.log(`The smaller number is ${y}.`);
    }
}
findMin(6,8);
findMin(34985, 34986)

function checkEquality(x, y){
    if(x != y){
        console.log(`They are not equal.`);
    }else {
        console.log(`They are equal`);
    }
}
checkEquality(5, 9)
checkEquality(7, 7)

