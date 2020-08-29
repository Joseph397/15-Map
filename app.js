// Map  EXTREMLY useful, will be used alot in REACT as well
// does return a new array
// does not change size of original array
// uses values from original array when making a new one

const people = [
    {name:'bob', age:20,position:'developer'},
    {name:'peter', age:25,position:'designer'},
    {name:'susy', age:30,position:'the boss'},
    {name:'anna', age:35,position:'the boss'},
];

const ages = people.map(function(person){
    // console.log(person);
    return person.age +20; 
});
const newPeople = people.map(function(person){
    return {
        firstName:person.name.toUpperCase(),
        oldAge:person.age + 20,
    };
});

const names = people.map(function(person){
    return `<h1>${person.name}</h1>`
})

document.body.innerHTML = names.join('')

console.log(names);