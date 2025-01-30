class Animal {
    constructor(name, sound, legcount) {
        this.name = name;
        this.sound = sound;
        this.legcount = legcount;
    }

         speak() {
        console.log("hi there " + this.sound);
        }

    static type() {
        console.log("Animal");
    }
}

// Create the object of the Animal class
let dog = new Animal("dog", "bhow bhow", 4);
let cat = new Animal("cat", "meow meow", 4);

dog.speak(); // Call the normal method
Animal.type(); // Call the static method
