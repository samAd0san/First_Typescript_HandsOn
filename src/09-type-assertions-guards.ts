// type assertions mean telling TypeScript, “trust me, I know this value’s type better.

// since the value return type is 'unknown' then we should convert it into the string and then check length
// lets say if the return type of value was string, then we should have just done value.length.

let value: unknown = "Hello"
let typeAssertion: number = (value as string).length

console.log(typeAssertion) // 5

// ---x---