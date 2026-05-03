// <**> Union types (OR) <**>

type Status = "pending" | "approved" | "rejected"; 

function reservationStatus(status: Status): void {
    if (status === "pending") {
        console.log(`Your reservation is ${status}`);
    } else if (status === "approved") {
        console.log(`Your reservation is ${status}`);
    } else {
        console.log(`Your reservation is ${status}`);
    }
};

const isApproved: Status = "approved"
// reservationStatus(isApproved);

// -----x-----

type dualType = string | number; 

function printId(id: dualType): void {
    if (typeof id === "string") {
        console.log(`ID (string): ${id.toUpperCase()}`);
    } else {
        console.log(`ID (number): ${id}`);
    }
};

printId(235); // 235
printId("hello"); // HELLO

// -----x-----

// <**> Intersection types (AND) <**>
interface Colourful {
    colour: string;
}

interface Circle {
    radius: number;
}

type ColorfulCirle = Colourful & Circle;

let myCircle: ColorfulCirle = {
    colour: "red",
    radius: 31
};

console.log(myCircle);