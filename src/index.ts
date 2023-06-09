import { multiply, subtract } from "./untestedFunctions";
import { sum, divide } from "./testedFunctions";

export function average(x: number, y: number){
    let r = sum(x, y);
    return divide(r, 2);
}


export function notAverage(x: number, y: number){
    let r = subtract(x, y);
    return multiply(r, 2);
}
