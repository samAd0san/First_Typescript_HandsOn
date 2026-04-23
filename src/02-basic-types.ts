// Primitives
let username: string = "Sohaib Samad";
let age: number = 22;
let isBachelor: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ['Abu Sulaym', 'Hammad Ibn Zayd', 'Al Athari'];
// or
let names1: string[] = ['Isa', 'Musa', 'Maryam'];

// Enum 
enum Color {
    Red,
    Green,
    Blue,
}

let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "samy"
randomValue = true 

// Unknown (safer than 'any' type)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that doesn't retrun any type)
function greet(message: string): void {
    console.log(message);
}

// Null 
let nullVal: null = null;

// Undefined
let undefinedVal: undefined = undefined;