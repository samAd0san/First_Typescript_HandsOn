// you can use 'type' defined variable in multiple places i.e variables, function, object etc.
// but let is just a variable

// LITERAL TYPE - mean a variable can hold only exact specific values, not any value of that type.

let direction: 'north' | 'south' | 'east' | 'west';
direction = 'east' // OK
// direction = 'up' // [ERROR] Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'.

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

// Combining with other types
type SuccesResponse = {
    status: "success";
    data: any;
};

type ErrorResponse = {
    status: "error";
    message: string
}

// Now using SuccessResponse
let data: SuccesResponse = {
    status: 'success',
    data: "Data is Saved"
};

let success: SuccesResponse = {
    status: 'success',
    data: 201
}

console.log(data); // { status: 'success', data: 'Data is Saved' }
console.log(success) // { status: 'success', data: 201 }

// Now using ErrorResponse 
let res: ErrorResponse = {
    status: 'error',
    message: "Internal Server Error"
}