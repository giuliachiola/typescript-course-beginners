function addFn(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (a: number, b: number) => number

combineValues = addFn; // OK
// combineValues = printResult; // NOPE! "Type 'void' is not assignable to type 'number'"

console.log(combineValues(8, 8));

// callback functions (= cb)

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})