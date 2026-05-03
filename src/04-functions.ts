// Basic functions with type

function add(a: number, b: number): number {
    return a + b;
};

let res = add(5, 10);
// console.log(res);

// Functions with Optional parameters
function greeting(name: string, greet?: string): string {
    if (!greet) {
        return `HELLO YA ${name}`;
    }
    return `HELLO ${name}, ${greet}`;
};

// console.log(greeting('Suhayb', 'Welcome to the world of typescript!'));
// console.log(greeting('Kaunayn!'));

// Default Parameter e.g (b: number = 1)
function multiply(num1: number, num2: number = 5): number {
    return num1 * num2;
}

// console.log(multiply(3)); // doesn't give error if we didn't pass the second param, and takes the default value
// console.log(multiply(4,3)); // this time it overrides the default param of num2 and gives // 12

function sum(...num: number[]): number[] {
    const modify = num.map(function addTwo(num: number){
        return num + 2;
    })

    return modify;
}

function sum2(two: number = 2, ...num: Array<number>): Array<number> {
    const multiply = num.map((num) => num * two);

    return multiply;
}

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum2(10, 4, 8, 12)); // here 10 <- is taken as the first param i.e `two`. 
// output: [ 40, 80, 120 ]

// Arrow function
const divide = (a: number, b: number): number => a / b;
let result = divide(100, 5); 
// console.log(result); // 20 

// Function type, i.e we create a variable and give the return type as function
// ': number' and '=> number' is same then but different according to context
let calculate: (x: number, y: number) => number;
 
// now lets assign any function as a return type
calculate = divide;
console.log(calculate(104302,4532).toFixed(2)); // without toFixed() -> 23.014563106796118 with toFixed(2) -> 23.01