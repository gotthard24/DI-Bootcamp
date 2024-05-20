function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello!';
    }
}

console.log(greet('Tanuha'));
console.log(greet());  
