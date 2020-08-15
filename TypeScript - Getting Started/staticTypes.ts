//JS
let firstNameJS = "Alice";
let ageJS = 72;
let activeMemberJS = true;

//This is OK in JS but not in TS
firstNameJS = 1;

//TS
//On mouse over it shows type annotation
let firstNameTS = "Alice";
let ageTS = 72;
let activeMemberTS = true;

//type is any
let someVarTS;
//explicitly setting variable type
let someOtherVarTS: string;
//We can explicitly set type when assigning value but it is not necessery
let isBooleanTS: boolean = true;

//This is NOT OK in TS
firstNameTS = 1;

//Function JS
function simpleFunctionJS(a, b) {}

//Functions TS
function simpleFunctionTS(name: string, isActive: boolean) {}

//Expicit telling the return type of the func. If there is no return type it gives error or type is different
function simpleFunctionReturnTS(name: string, isActive: boolean): number {
  return 1;
}

//No need to sepcify the result, as func returns number result will be of type Number
let result = simpleFunctionReturnTS("string", true);

//If function does not return anything we can use void
function simpleFunctionNoReturnTS(name: string, isActive: boolean): void {}
