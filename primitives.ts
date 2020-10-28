{
//string
const str: string = 'Hello World'; 
const str2: string =  `${str} from Typescript`;


//number
const num: number = 5;
const num2: number = 1e4;


//boolean
let bool: boolean = true;
bool = false;


//bigInt
// const bigInteger: bigint = 9876n;


//array
const numArray: number[] = [1, 3, 5, 7, 9];
const strArray: string[] = ['Hello', 'World'];
const genericType: Array<number> = [1, 2, 4, 8]; //array generic type

//tuples
const arr: [number, string] = [10, 'Hello'];
arr[0] = 15;

//never
function showMessage(message: string): never {
  // never means that the end of the function will never be reached
  throw new Error('Something went wrong');
  // while (true) { }
  // console.log(message);
}


}