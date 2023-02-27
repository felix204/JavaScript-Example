let cars = ['BMW', 'Mercedes', 'Audi'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    
 }





// FOR-IN

 let cars = ['BMW', 'Mercedes', 'Audi'];

 for (const i in cars) {
    console.log(`index : ${i}, value : ${cars[i]}`); 
 }

 console.log(typeof cars);





//FOREACH

 let cars = ['BMW', 'Mercedes', 'Audi'];

 cars.forEach(function(item){
     console.log(item);
 });


////

let people = [
    {firstName : 'Aydın', lastName : 'Can'},
    {firstName : 'Fehra', lastName : 'Can'}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
    
}

console.log(typeof people);




///



let people = [
    {firstName : 'Aydın', lastName : 'Can'},
    {firstName : 'Fehra', lastName : 'Can'}
]

for (let i in people){
    console.log(`index : ${i}, value : ${people[i].firstName}`);
}


/////


let people = [
    {firstName : 'Aydın', lastName : 'Can'},
    {firstName : 'Fehra', lastName : 'Can'}
]

people.forEach(function(item){
    console.log(item.firstName, item.lastName);
});