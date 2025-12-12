# TypeScript Course - Learning the Hard Way

A hands-on TypeScript learning project that covers fundamental concepts through practical examples and exercises.

## 🚀 Prerequisites

- Node.js (v14 or higher)
- npm or bun

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sunil-gumatimath/TS.git
cd type-script-cource

# Install dependencies
npm install
```

## 🏗️ Project Structure

```
type-script-cource/
├── src/
│   ├── index.ts              # Lesson 1: Basic function with type annotations
│   ├── typesInTS.ts          # Lesson 2: Type inference and annotations
│   └── union-and-any.ts      # Lesson 3: Union types and literal types
├── dist/                     # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Learning Path

This project is structured as a progressive learning journey with three core lessons:

### Lesson 1: Basic Type Annotations (`index.ts`)

Learn the fundamentals of TypeScript type annotations:

- Function parameter type annotations
- Function return type annotations
- Variable type annotations
- String type basics
- Type safety in practice

**Key Concepts:**

```typescript
function greet(person: string): string {
    return ` Hello ${person} How you doing`
}

const username: string = 'Ted'
console.log(greet(username));
```

### Lesson 2: Type Inference (`typesInTS.ts`)

Understand how TypeScript automatically infers types:

- Implicit type inference from values
- Union types through conditional expressions
- Type inference vs explicit annotations
- Boolean type annotations
- String type inference

**Key Concepts:**

```typescript
let drink = 'coffee'                                    // inferred as string
let cups = Math.random() > 0.5 ? 10 : '5'             // inferred as number | string
let channelName = 'sunilted'                          // inferred as string
let coffeeFlavour: string = 'Caramel'                 // explicit annotation
let orderCoffee: boolean = true                       // explicit annotation
```

### Lesson 3: Union and Literal Types (`union-and-any.ts`)

Master union types and literal type constraints:

- Union types with multiple types (`number | string`)
- Literal types for specific string values
- Type narrowing with conditionals
- Optional types (`string | undefined`)
- Real-world use cases (API states, seat selections, etc.)

**Key Concepts:**

```typescript
let sub: number | string = '1M'                                    // union type
let apiRequest: 'pending' | 'success' | 'error' = 'pending'      // literal types
let airLineSeat: 'aisle' | 'window-side' | 'middle' = 'middle'   // literal types
let currentOrder: string | undefined;                             // optional type
```

## 🚀 Running the Project

```bash
# Compile TypeScript to JavaScript
npm run dev

# Run the compiled code (requires bun)
npm start
```

## 🛠️ Development

The project uses a strict TypeScript configuration with:

- **Strict Mode**: Enables all strict type checking options
- **Exact Optional Property Types**: Prevents implicit undefined in optional properties
- **Unchecked Indexed Access**: Prevents unsafe index access
- **Source Maps**: For debugging compiled code
- **Declaration Files**: Generates `.d.ts` files for type information
- **Modern Target**: Compiles to ESNext for modern JavaScript features
