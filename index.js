// class Cat {
//     name;
//     type;
//     age;

//     meow() {
//         console.log(`${this.name} goes: Meow!`);
// }

//     greeting() {
//         console.log(`Hello, Im ${this.name}; and Im a ${this.type} breed.`);             
// }

//     birthDay(newAge) {
//         console.log(`After my birthday im now ${this.age} years old.`);
//     }
// }

// const Tom = new Cat();
// Tom.name = 'Tom';
// Tom.age = 30;
// Tom.type = 'Russian Blue'; 

// const Garfield = new Cat();
// Garfield.name = 'Garfield';
// Garfield.age = 46;
// Garfield.type = 'Orange Tabby';

// console.log(Tom);

// Tom.meow();
// Tom.greeting();
// Tom.birthDay(31);

// console.log(Garfield);

// Garfield.meow();
// Garfield.greeting();
// Garfield.birthDay(47);
////////////////////////////////////////////////////////////////

class Pirate {
   constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
   }

greeting() {
    console.log(`Ahoy, my name is ${this.name}`);
 }

birthday() {
    console.log(`Today I just turned ${this.age} years old`);
}

introduction()  {
    console.log(` Ahoy, I'm ${this.name} and im a ${this.age} year old ${this.type}`);
}
}

const jollyRoger = [
    new Pirate("Calico Jack", 38, "Captain"),
    new Pirate("Edward Low", 39, "Co-Captain"),
    new Pirate("Walter Kennedy", 26, "Crew Member")
];

const blackPearl = [
    new Pirate ("Jack Sparrow", 39, "Captain"),
    new Pirate("Hector Barbossa", 36, "Co-Captain"),
    new Pirate("Billy Turner", 29, "Sailor")
];

console.log("Pirates of Jolly Roger:");
for (const pirate of jollyRoger) {
    console.log(`Name: ${pirate.name}`);
    console.log(`Age: ${pirate.age}`);
    console.log(`Type: ${pirate.type}`);
    console.log("-----------");
}

console.log("Pirates of Black Pearl:");
for (const pirate of blackPearl) {
  console.log(`Name: ${pirate.name}`);
  console.log(`Age: ${pirate.age}`);
  console.log(`Type: ${pirate.type}`);
  console.log("-----------");
}