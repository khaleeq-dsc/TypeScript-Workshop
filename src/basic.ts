let id:number = 5

//console.log(id)

let userName:string = 'DSC'


let isValid:boolean = true

let someVariable:any = 23

function getSum(a:number, b:number):number{
    let sum = a + b
    return sum
    console.log(sum)
}

getSum(11,4)

let namesList : string[] = ['Sarim', 'Saad']
let numbersList : number[] = [1,2,3]
let mixArray : any[] = [1,2,3,'4']

let ids : number | string = '3'
ids = 4

enum direction2 {
    EAST = '1',
    WEST = '2'
}

console.log(direction2.EAST)

interface User  {
    id: number;
    name: string;
    role: string;
}; 

let user : User = {
    id: 1,
    name: 'khaleeq',
    role: 'integration developer'
}

type Point = string | number //possible
//interface MyPoint = string | number  //not possible


