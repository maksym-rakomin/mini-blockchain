const name = "Maks"
const age = 32
const gender = "male"

interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name,
    age,
    gender,
}

const sayHi = (person: Human): void => console.log(`Hi ${person.name} - ${person.age} - ${person.gender}`)

sayHi(person)

export {}
