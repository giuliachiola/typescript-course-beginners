let userInput: unknown;
let userName: string;

if (typeof userInput === 'string') {
  userName = userInput; // OK
}

// type `never`

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code }
  // this function will not return anything
}

generateError('An error occurred', 500);