// Type alias

type Point = {
    x: number,
    y: number;
};

let point: Point = {
    x: 10,
    y: 10,
};

// type alias for primitives
type ID = string | number;

let userID: ID = 235;
let userName: ID = "Sulaym"
// let isUser: ID = false; // [ERROR] Type 'boolean' is not assignable to type 'ID'.