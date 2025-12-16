// Type Assertion

let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"one thing"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);
const inputElement = document.getElementById("username") as HTMLInputElement;

// Type Unknown

let value: any;

value = "hello";
value = [10, 20, 30, 40];
value = 20.0;
value.toUpperCase();

let newValue: unknown;

newValue = "hello";
newValue = [10, 20, 30, 40];
newValue = 20.0;

if (typeof newValue === "string") {
  //type guards
  newValue.toUpperCase();
}

// Type Never
try {
} catch (error) {
  if (error instanceof Error) console.log(error.message);

  console.log("Error", error);
}

const data: unknown = "TypeScript";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to Admin");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to User");
    return;
  }
  role;
}

function infiniteLoop(): never {
  while (true) {}
}

function trowError(message: string): never {
  throw new Error(message);
}
