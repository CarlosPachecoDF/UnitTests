export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverse(word: string) : string {
  let resultString = "";
    for (let index = word.length -1; index >= 0; index--) {
         resultString = resultString.concat(word.charAt(index))
    }
    return resultString;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function division(a: number, b: number) : number {
  return a / b;
}

export function remainder(a: number, b: number): number {
  return a % b;
}

export function exponentiation(a: number, b: number): number {
  return a ** b;
}

// Add more functions as needed
