/* TypeScript Basics. */

// Basic Typescript
let id: number = 54321
let dude: string = 'Ricky'
let company: string = 'RTG'
let isActive: boolean = true
let greeting: any = 'Hola Mundo!'

let primes: number[] = [2, 3, 5, 7, 11, 13]
let array: any[] = [2, false, 'Hola Mundo!']

// Tuples
let person: [number, string, boolean] = [54321, 'Ricky', false]
// Tupple Array
let employee: [number, string][]

employee = [[54321, 'Ricky'], [76500, 'Johnny'], [91333, 'Jill']]

// Union
let product_id : string | number
product_id = '65657'

// Enum 
enum Directions {North = 1, West, South, East}
console.log(Directions.West) // Output: 2

enum Managers {North = 'Ricky', West = 'Johnny', South = 'Jill', East = 'Alexa'} // Output: Jill
console.log(Managers.South)

// Objects. Method 1
const customer: {id: number, name: string} = {id: 1, name: 'Dirk'}
console.log(customer.name)// Output: Dirk

// Objects. Method 2
type User = {id: number, name: string}
const user: User = {id: 75, name: 'Colleen'}
console.log(user.id) // Output: 75

// Type Assertion. Method 1 (using angle brackets)
let pid: any = 86421
// let personalId = <number>pid

// Type Assertion. Method 2
let personId = pid as number

// Functions
function sum(x: number, y: number): number {
    return x+ y
}

console.log(sum(3,4)) // Output: 7

// Void
function log(message: string | number): void {
    console.log(message)
}
log("Hola Mundo!") // Output: Hola Mundo!

// Interfaces
interface StudentInterface { 
    id: number 
    name: string 
    age?: number // Set the age as optional.
    readonly school: string // Set scool as read-only.
} 

const student1: StudentInterface = {id: 1007, name: "Rich Halpern", school: "Engineering" }
console.log(student1) // Output: { "id": 1007, "name": "Rich Halpern", "school": "Engineering" } 
console.log(user.id) // Output: 75

// Type Assertion 
