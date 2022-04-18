const name = "Maks"
const age = 32
const gender = "male"

class Human {
    public name: string
    public age: number
    public gender: string

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const anton = new Human(name, age, gender)

const sayHi = (person: Human): void => console.log(`Hi ${person.name} - ${person.age} - ${person.gender}`)

sayHi(anton)

export {}
