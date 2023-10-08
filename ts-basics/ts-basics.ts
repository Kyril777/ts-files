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

// Interface with Functions
interface Financials {
    (revenue: number, operating_cost: number): number
}

const profit: Financials = (revenue: number, operating_cost: number): number => revenue - operating_cost
console.log(profit(25000, 22000)) // Output: 3000

// classes
class Patron {
    private card_number: number
    last_name: string
    first_name: string

    constructor(card_number: number, last_name: string, first_name: string){
        this.card_number = card_number
        this.last_name = last_name
        this.first_name = first_name
    }

    confirm() {
        return `The account by ${this.first_name} ${this.last_name} is active.`
    }
}

const shwan = new Patron(5555, 'Michaels', 'Shwan')
const bert = new Patron(9999, 'Harte', 'Bert')
console.log(shwan) // Output: Patron: { "card_number": 5555, "last_name": "Michaels", :irst_name": "Shwan" } 
console.log(bert) // Output: Patron: { "card_number": 9999, "last_name": "Harte", "first_name": "Bert" } 
console.log(bert.confirm()) // Output: "The account by Bert Harte is active." 


// Classes impleneting interfaces
interface RegistrantInterface {
    registration_number: number
    name: string
    register(): string
}

// Classes
class Attendant implements RegistrantInterface {
    registration_number: number
    last_name: string
    first_name: string

    constructor(registration_number: number, last_name: string, first_name: string){
        this.registration_number = registration_number
        this.last_name = last_name
        this.first_name = first_name
    }

    registration() {
        return `The registrant ${this.first_name} ${this.last_name} is confirmed.`
    }
}

const irwin = new Attendant(11114, 'Reese', 'Irwin')
console.log(irwin) // Output: 11114, "last_name": "Reese", "first_name": "Irwin" } 
console.log(irwin.registration()) // Output: "The registrant Irwin Reese is confirmed."

// Subclasses
class Reporter extends Attendant {
    press_pass: number
    reporter: string

    constructor(press_pass: number, last_name: string, first_name: string, reporter: string) {
        super(press_pass, last_name, first_name, reporter)
        this.reporter = reporter
        this.press_pass = press_pass
    }
}

const harrison = new Reporter(56781, 'Harrison', 'John', 'Reporter')
console.log(harrison.press_pass) // Output: 56781 
console.log(harrison.reporter) // Output: "Reporter" 
console.log(harrison.registration()) // Output: "The registrant John Harrison is confirmed." 



// Loops
// For loop to print from iteration to no more than limit.
for (let i = 0; i < 3; i++) {
  console.log ("For loop prints number " + i);
} 
/* Output: 
For loop prints number 0
For loop prints number 1
For loop prints number 2
*/

// For loop to print values withn in array.
let arr = ["Lawnside", "Barrington", 
"Haddon Heights", "Audobon", "Runnemede"];

for (var val of arr) {
  console.log("For loop prints " + val); 
}
/* Output:
For loop prints Lawnside
For loop prints Barrington
For loop prints Haddon Heights
For loop prints Audobon
For loop prints Runnemede
*/

// For loop to print indexs and elements.
let arr = ["Colonial", "Romantic", "Naturalist", "Modernist", "Contemporary"];
for (var index in arr) {
  console.log(index); // Output: 0, 1, 2, 3
  console.log(arr[index]); // Output: Colonial, Romantic, Naturalist, Modernist, Contemporary
}
/* Output:
0
Colonial
1
Romantic
2
Naturalist
3
Modernist
4
Contemporary
*/

// For loop to print individual characters of a string.
let string = "NOSTRADAMUS";

for (let charr of string) {
  console.log(char); 
}
/* Output: N O S T R A D A M U S */

// While Loop.
let i: number = 5;
while (i < 10) {
    console.log( "While loop prints number " + i )
    i++;
}
/*
While loop prints number 5
While loop prints number 6
While loop prints number 7
While loop prints number 8
While loop prints number 9
*/

// Do while loop to print from initialization to equal to limit
let i: number = 1;
do {
    console.log( "While loop prints number " + i )
    i++;
} while ( i <= 4)
/* Output:
While loop prints number 1
While loop prints number 2
While loop prints number 3
While loop prints number 4
*/
