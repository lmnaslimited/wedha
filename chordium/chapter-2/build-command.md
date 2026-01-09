# How to Build a Command

This lesson covers the fundamentals of creating and managing commands in an OCLIF CLI project.

---

## 1. Understanding Command Structure

Each command in OCLIF is represented by a class that extends the base `Command` class.

A typical command file contains:
- `static description` – describes what the command does  
- `static args` – positional inputs  
- `static flags` – optional parameters  
- `static examples` – usage examples for help output  
- `run()` – main business logic  

Example:

```ts
import { Command } from '@oclif/core'

export default class Sample extends Command {
  static description = 'Describe what this command does'

  async run() {
    this.log('Command is running!')
  }
}
````

OCLIF maps the file path under `src/commands/` directly to the command name.

---

## 2. Generating a New Command

Use the OCLIF generator to create new commands:

```bash
oclif generate command <command-name>
```

Example:

```bash
oclif generate command greet
```

This creates:

* `src/commands/greet.ts`
* `test/commands/greet.test.ts`

For nested commands:

```bash
oclif generate command project/use
```

Creates:

```
src/commands/project/use.ts
```

This helps maintain a clean and scalable structure.

---

## 3. Adding Business Logic in run()

The `run()` method contains the operational logic your command will execute.

Example:

```ts
import { Command, Flags } from '@oclif/core'

export default class clGreet extends Command {
  static description = 'Greet a user by name'

  static args = [
    { name: 'username', required: true }
  ]

  static flags = {
    excited: Flags.boolean({ char: 'e', description: 'Add excitement' })
  }

  async run() {
    const { args, flags } = await this.parse(Greet)

    let lMessage = `Hello, ${args.username}`

    if (flags.excited) {
      lMessage += '!!!'
    }

    this.log(lMessage)
  }
}
```

Business logic may include:

* Validations
* File handling
* API calls
* Computations
* Git interactions

---

## 4. Error Handling

OCLIF provides multiple ways to handle errors gracefully.

---

### a. Using `this.error()`

```ts
if (!valid) {
  this.error('Invalid input provided.')
}
```

This will:

* Display the error message
* Stop execution
* Exit with a non-zero status code

---

### b. Throwing Errors

```ts
throw new Error('Something went wrong!')
```

OCLIF automatically formats uncaught errors for CLI output.

---

### c. Overriding catch()

```ts
async catch(error) {
  this.log('A custom error handler executed.')
  throw error
}
```

Useful for:

* Cleanup tasks
* More user-friendly messaging
* Logging to external systems