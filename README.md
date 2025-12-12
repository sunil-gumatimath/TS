# TypeScript Course – Learning the Hard Way

A small, hands-on TypeScript learning project that introduces core language features
through four focused lessons. Each file in `src/` represents a step in the learning path.

## Prerequisites

- Node.js (v14 or higher)
- npm (or another Node package manager)
- [Bun](https://bun.sh/) if you want to use the existing `npm start` script

## Installation

1. Clone the repository
   - `git clone https://github.com/sunil-gumatimath/TS.git`
   - `cd type-script-cource`
2. Install dependencies
   - `npm install`

## Project Structure

```
type-script-cource/
├── src/
│   ├── index.ts              # Lesson 1: Basic function with type annotations
│   ├── typesInTS.ts          # Lesson 2: Type inference and annotations
│   ├── union-and-any.ts      # Lesson 3: Union and literal types
│   └── typeNarrowing.ts      # Lesson 4: Type narrowing techniques
├── dist/                     # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## Learning Path (Keep Going Step by Step)

Work through the files in `src/` in order. Each lesson builds on the previous one.

### 1. Basic Type Annotations – `src/index.ts`

Concepts you will practice:

- Adding type annotations to function parameters and return values
- Declaring variables with explicit types
- Seeing how TypeScript catches basic type errors

### 2. Type Inference – `src/typesInTS.ts`

Concepts you will practice:

- Letting TypeScript infer types from values
- Understanding union types created by conditional expressions
- Choosing when to rely on inference vs. explicit annotations

### 3. Union and Literal Types – `src/union-and-any.ts`

Concepts you will practice:

- Declaring union types (for example, `number | string`)
- Using string literal types to limit allowed values
- Modeling simple state (such as request status or seat selection)

### 4. Type Narrowing – `src/typeNarrowing.ts`

Concepts you will practice:

- Narrowing union types with `typeof` checks
- Using truthiness checks for optional values
- Narrowing using equality checks and control flow
- Getting a taste of discriminated unions and more advanced patterns

## How to Run the Code

Compile the TypeScript sources to JavaScript:

- `npm run dev`

This will output compiled files into the `dist/` folder.

Then run the compiled code (using Bun as configured in `package.json`):

- `npm start`

You can modify any of the lesson files in `src/`, re-run `npm run dev`, and then
`npm start` again to see how your changes behave.

## Next Steps

- Add your own examples to each lesson file to test your understanding.
- Create new files for additional topics (interfaces, generics, enums, etc.) and
  extend this learning path.
- Experiment with stricter compiler options in `tsconfig.json` to see how they
  affect your code.
