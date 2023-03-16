const readLine = require('readline-sync');
function nameSwapper(first, last){

    let first = readLine.question("first name");


    return (`${last} + ${first}`);
}
