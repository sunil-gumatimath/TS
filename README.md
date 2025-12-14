# TypeScript Course – Learning the Hard Way

A small, hands-on TypeScript learning project that introduces core language features
through focused lessons. Each file in `src/` represents a step in the learning path.

## Prerequisites

- Node.js (v14 or higher; v18+ recommended)
- npm (or another Node package manager)
- Optional: [Bun](https://bun.sh/) if you want to use the existing `npm start` script

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
│   ├── typeNarrowing.ts      # Lesson 4: Type narrowing techniques
│   ├── interfaceTS.ts        # Lesson 5: Interfaces and type aliases
│   └── moreTypes.ts          # Lesson 6: Assertions, unknown, never (and DOM)
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

### 5. Interfaces and Type Aliases – `src/interfaceTS.ts`

Concepts you will practice:

- Defining type aliases and interfaces
- Implementing interfaces in classes
- Working with string literal unions for constrained values

### 6. Assertions, `unknown`, and `never` – `src/moreTypes.ts`

Concepts you will practice:

- Using type assertions (`as`) safely
- Understanding `any` vs `unknown` and applying type guards
- Using `never` for exhaustive checks, infinite loops, and error throws
- DOM-specific types (e.g., `document.getElementById`) and when to enable the `dom` lib

## How to Run the Code

### Option A — Compile everything, then run

1. Compile the TypeScript sources to JavaScript:
   - `npm run dev`
   This outputs compiled files into the `dist/` folder.
2. Run the compiled code (Bun is configured in `package.json`):
   - `npm start`
   If you don't use Bun, run with Node:
   - `node dist/index.js`

### Option B — Run a single lesson (recommended while practicing)

Some lesson files are intentionally unfinished for practice and may not compile as a whole project.
To focus on one file at a time:

1. Compile just one file (replace the filename as needed):
   - `npx tsc --outDir dist src/index.ts`
2. Run it with Node or Bun:
   - `node dist/index.js`
   - or `bun dist/index.js`

Tip: swap `src/index.ts` for any lesson file, e.g. `src/moreTypes.ts`.

## Troubleshooting / Notes

- Unfinished exercises: A few files contain placeholders or incomplete snippets for practice.
  If `npm run dev` fails, either comment out unfinished parts or use Option B to compile a single file.
- DOM types (browser-only): If you see `Cannot find name 'document'`, enable the DOM lib by adding to `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "lib": ["esnext", "dom"]
    }
  }
  ```
  Alternatively, comment out DOM lines when running in a Node-only environment.
- Node vs Bun: `npm start` uses Bun by default. If you don't have Bun, run compiled files with `node`.

## Next Steps

- Add your own examples to each lesson file to test your understanding.
- Create new files for additional topics (interfaces, generics, enums, etc.) and extend this learning path.
- Experiment with stricter compiler options in `tsconfig.json` to see how they affect your code.
