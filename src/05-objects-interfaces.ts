// Object type annotation - this is how a typical ground up function is

let user: {name: string, age: number} = {
    name: "Suhayb",
    age: 22
};

console.log(user); // { name: 'Suhayb', age: 22 }

// but here in the return type of user: {name: string, age: number} <- rather than here we create an interface
interface User {
    name: string,
    age: number,
    email?: string,
    readonly id: number; // this can't be editted 
}

// now again we define user but this time with 'User' interface as return type

let employee: User = {
    name: "Sulaym",
    age: 32,
    email: "sulaym.hala@outlook.com",
    id: 1
}

console.log(employee); // { name: 'Sulaym', age: 32, email: 'sulaym.hala@outlook.com', id: 1 }

// employee.id = 2; // [ERROR]: Cannot assign to 'id' because it is a read-only property.

// Interface with methods
interface Product {
    name: string,
    price: number,
    discount(percentage: number): number;
}

let laptop: Product = {
    name: "Acer Nitro 5",
    price: 1200,
    discount(percentage: number): number {
        return this.price * (percentage / 100);
    },
};

console.log(laptop.name, laptop.price, laptop.discount(5)); // Acer Nitro 5 1200 60

// If you wnat to return entire value along with discount value
console.log({...laptop, discount: laptop.discount(5)}); // { name: 'Acer Nitro 5', price: 1200, discount: 60 }
