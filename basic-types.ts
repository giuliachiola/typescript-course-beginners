const person: {
  name: string; // redundant
  age: number; // redundant
  hobbies: string[]; // redundant
  role: [number, string]; // THIS IS NECESSARY, tuple have to be declared
} = {
  name: 'Giulia',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // tuple, a role can have exactly two elements, one number e one string
}

enum Permission { ADMIN, READ_ONLY, AUTHOR };

console.log(person.name)

// activities
let favoriteActivities: string[] // array of strings
favoriteActivities = ['Sport', 'Cooking']

// role
person.role.push('admin')
// person.role[1] = 10 // ERROR

// any
let favoriteHobbies: any[];
favoriteHobbies = ['Sport', 10]; // OK

let favoriteHobbiesString: string[];
// favoriteHobbiesString = ['Sport', 10]; // NOPE, should be strings!
