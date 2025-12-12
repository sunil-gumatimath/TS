# TypeScript Course - Learning the Hard Way

A hands-on TypeScript learning project that covers fundamental concepts through practical examples.

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
│   ├── index.ts          # Basic function with type annotations
│   └── typesInTS.ts      # Type inference and annotations examples
├── dist/                 # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 What You'll Learn

This project demonstrates:

### Basic Type Annotations
- Function parameters and return types
- Variable type annotations
- String, boolean, and union types

### Type Inference
- Automatic type detection
- Union types (`number | string`)
- Type safety without explicit annotations

### Configuration
- Modern TypeScript compiler settings
- Strict type checking
- Source maps and declarations

## 🚀 Running the Project

```bash
# Compile TypeScript to JavaScript
npm run dev

# Run the compiled code (requires bun)
npm start
```

## 📝 Examples

### Function with Type Annotations
```typescript
function greet(person: string): string {
    return `Hello ${person} How you doing`;
}
```

### Type Inference and Union Types
```typescript
let cups = Math.random() > 0.5 ? 10 : '5';  // number | string
let channelName = 'sunilted';               // inferred as string
let orderCoffee: boolean = true;            // explicit annotation
```

## 🛠️ Development

The project uses a strict TypeScript configuration with:
- Strict mode enabled
- Exact optional property types
- Unchecked indexed access prevention
- Modern ESNext target

## 📄 License

ISC License

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the learning examples!
