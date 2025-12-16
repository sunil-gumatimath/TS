# TypeScript Course – Learning the Hard Way

A small, hands-on TypeScript learning project that introduces core language features
through focused lessons. Each file in `src/` represents a step in the learning path.

## Prerequisites

- [Bun](https://bun.sh/) (recommended; used for installing deps and running scripts)
- Node.js (v14 or higher; v18+ recommended) if you prefer to run compiled JS with Node

## Installation

1. Clone the repository
   - `git clone https://github.com/sunil-gumatimath/TS.git`
   - `cd type-script-cource`
2. Install dependencies
   - With Bun (recommended): `bun install`
   - Or with npm: `npm install`

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

## Scripts & Tooling

- `bun run dev` – runs the local TypeScript compiler (`npx tsc` via the `dev` script in `package.json`), compiling everything from `src/` into `dist/`.
- `bun start` – runs the compiled entry file `dist/index.js` using Bun (via the `start` script in `package.json`).
- If you prefer npm instead of Bun, you can use:
  - `npm run dev`
  - `npm start` (this still calls `bun dist/index.js` internally)
- Tooling:
  - TypeScript: `^5.9.3` (strict mode, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, etc. are enabled in `tsconfig.json`).
  - Prettier: `^3.7.4` (optional code formatter; you can run it manually or add your own `format` script in `package.json`).

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
   - With Bun (recommended): `bun run dev`
   - With npm: `npm run dev`
   This outputs compiled files into the `dist/` folder.
2. Run the compiled code:
   - With Bun: `bun start` (uses the `start` script)
   - Directly with Node: `node dist/index.js`

### Option B — Run a single lesson (recommended while practicing)

Some lesson files are intentionally unfinished for practice and may not compile as a whole project.
To focus on one file at a time:

1. Compile just one file (replace the filename as needed):
   - `npx tsc --outDir dist src/index.ts`
2. Run it with Bun or Node:
   - With Bun: `bun dist/index.js`
   - With Node: `node dist/index.js`

Tip: swap `src/index.ts` for any lesson file, e.g. `src/moreTypes.ts`.

## Troubleshooting / Notes

- Unfinished exercises: A few files contain placeholders or incomplete snippets for practice.
  If `npm run dev` fails, either comment out unfinished parts or use Option B to compile a single file.
- DOM types (browser-only): If you see `Cannot find name 'document'`, enable the DOM lib in `tsconfig.json`.
  Inside `compilerOptions`, add or update the `lib` setting to include `dom`, for example:
  ```json
  {
    "compilerOptions": {
      "lib": ["esnext", "dom"]
    }
  }
  ```
  (Keep the rest of your existing options like `strict`, `module`, etc.)
  Alternatively, comment out DOM-specific lines (such as `document.getElementById(...)`) when running in a Node-only environment.
- Node vs Bun: `npm start` uses Bun by default. If you don't have Bun, run compiled files with `node`.

## Next Steps

- Add your own examples to each lesson file to test your understanding.
- Create new files for additional topics (interfaces, generics, enums, etc.) and extend this learning path.
- Experiment with stricter compiler options in `tsconfig.json` to see how they affect your code.
