// ITERATION 1

// Suspects Array
const suspectsArray = [{
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
},
{
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
}, {
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
}, {
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
}, {
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
}, {
    firstName: "Marta",
    lastName: "Franco",
    occupation: "Teacher",
    age: 25,
    description: "brown curly hair",
    image: "html",
    color: "blue",
}];

// Rooms Array

const roomsArray = [{
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}, {
    name: "Mrs.Lola",
}
];

// Weapons Array

const weaponsArray = [{
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}, {
    name: "Carlos",
    weight: 80
}];


// ITERATION 2
/*
array.length para saber si el array esta vacio. Si es mayor que cero, 
significa que la array tiene algun valor. Math.random significa que tiene un valor aleatorio
*/
function selectRandom(array) {
    if (array.length() === 0) {
        return undefined;
    }
    else if (array.length() > 0) {

        return array[Math.random() * array.length()]; 
    }
}
console.log(selectRandom(suspectsArray)); //const suspectArry que esta arriba del todo

/*  tengo que devolver un objeto y de ahi let object. y las tres propiedades */
function pickMystery() {
    let object = {
        suspect: "",
        weapon: "",
        room: "",
    }
    /* aqui hay que darle un valor a cada propiedad. SelectRandom es 
    seleccionar un elemento al azar de un array */
    object.suspect = selectRandom(suspectsArray);
    object.weapon = selectRandom(weaponsArray);
    object.room = selectRandom(roomsArray);
    //hay que hacer un return del objeto
    return object;
}


// ITERATION 3
/* object va entre parentesis porque es el parametro de la funcion que hay que declarar.*/
function revealMystery(object) {
    return '${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon} in the ${object.place}!';
}
console.log(revealMystery(pickMystery()));
