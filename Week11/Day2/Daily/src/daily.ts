function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}


const allowedTypes1 = ["string", "number"];
const allowedTypes2 = ["boolean", "object"];

const stringValue = "Hello";
const numberValue = 42;
const booleanValue = true;
const objectValue = { key: "value" };
const arrayValue = [1, 2, 3];

console.log(validateUnionType(stringValue, allowedTypes1)); 
console.log(validateUnionType(numberValue, allowedTypes1)); 
console.log(validateUnionType(booleanValue, allowedTypes1));

console.log(validateUnionType(booleanValue, allowedTypes2));
console.log(validateUnionType(objectValue, allowedTypes2)); 
console.log(validateUnionType(arrayValue, allowedTypes2));
console.log(validateUnionType(stringValue, allowedTypes2));
