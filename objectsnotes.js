//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 2849563,
    bro: 3920472,
}

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3850284;
console.log(contacts);

//update an entry
contacts.bff = 202939;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called ___ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a==b);
console.log(a==c);
console.log(b==c);

console.log(a.value == c.value);

//create 5 objects below:
let dog = {
    dogName: 'Ellie',
    breed: 'Husky German Shepherd mix',
    age: 2,
    size: 'large',
    barks: true
}
console.log(dog);

let friend = {
    friendName: 'Insect',
    height: 5.10,
    hairType: 'straight',
    bodyType: 'skinny',
    funny: true
}
console.log(friend);

let teacher = {
    teacherName: 'Ms.Bolin',
    height: 5.7,
    hairType: 'straight',
    eyeColor: 'turquoise-grey',
    smart: true
}
console.log(teacher);

let cat = {
    catName: 'Bella',
    breed: 'Ragdoll',
    age: 3,
    size: 'medium',
    purrs: true,
}
console.log(cat);

let dad = {
    dadName: 'Patrick',
    height: 5.5,
    hairType: 'bald',
    eyeColor: 'brown',
    scary: true
}
console.log(dad);

