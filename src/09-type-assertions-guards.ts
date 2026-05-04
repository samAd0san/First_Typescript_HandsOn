// type assertions mean telling TypeScript, “trust me, I know this value’s type better.

// since the value return type is 'unknown' then we should convert it into the string and then check length
// lets say if the return type of value was string, then we should have just done value.length.

let value: unknown = "Hello"
let typeAssertion: number = (value as string).length

console.log(typeAssertion) // 5

// ---x---

// same as above
let someValue: unknown = "Lets check the length of this sentence";
let strLength: number = (someValue as string).length

console.log(strLength) // 38

// Type guards
function verifyType(value: unknown): value is string {
    return typeof value === "string"
}

console.log(verifyType("Hi isn't it a beautiful day!!?")); //true
console.log(verifyType(234)); // false

function processValue(value: string | number): void {
    if(verifyType(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2)); // will show only first two decimals
    }
};

processValue("Hi isn't it a beautiful day!!?"); // HI ISN'T IT A BEAUTIFUL DAY!!?
processValue(234); // 234.00

class Dog {
    bark() {
        console.log('Bark!');
    }
};

class Cat {
    meow() {
        console.log('Meow!');
    }
};

function makeAnimalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
};

let golderRetriever = new Dog();
let orangeCat = new Cat();
makeAnimalSound(golderRetriever); // Bark!
makeAnimalSound(orangeCat); // Meow!