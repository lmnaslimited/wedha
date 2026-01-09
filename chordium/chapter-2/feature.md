# Features of OCLIF

OCLIF (Open CLI Framework) provides a rich set of features that help developers build scalable and user-friendly command-line applications. Understanding these features will give you a strong foundation before writing your first command.

---

## 1. Commands

Commands are the core units of an OCLIF CLI.  
Each command performs one specific action and is defined as a class inside the `src/commands/` directory.

Examples:
- `mycli login`
- `mycli project list`
- `mycli generate report`

OCLIF automatically loads commands based on file structure and naming conventions.

---

## 2. Flags

Flags allow users to customize how a command behaves.

Types of flags include:
- Boolean (`--force`)
- String (`--path=./src`)
- Integer (`--count=3`)

Flags are optional and help modify command execution without changing its basic structure.

---

## 3. Arguments

Arguments are positional inputs that appear **after** the command name.

Example:
- mycli greet John


Arguments are used when the user must provide required information to execute the command.

---

## 4. Built-in Help System

OCLIF automatically generates help documentation for:
- Commands  
- Flags  
- Arguments  
- Usage examples  

Users can open help by running:
- mycli help
- mycli <command> --help


This reduces the need to manually manage help text.

---

## 5. Plugins

Plugins allow OCLIF to be extended beyond its default capabilities.  
Teams can share large sets of commands as plugins or create reusable features.

Use cases:
- Internal company toolkits  
- Shared utilities  
- Modular architecture  

---

## 6. Hooks

Hooks allow you to execute logic globally before or after a command runs.

Common uses:
- Authentication checks  
- Logging  
- Environment preparation  
- Error processing  

Hooks provide centralized control for CLI behavior.

---

## 7. Extensibility & Scalability

OCLIF is designed to scale with growing CLI needs.  
It provides:
- Multi-level commands  
- Modular structure  
- Plugin ecosystem  
- Versioning  

This makes it suitable for building enterprise-grade CLI tools.

---

## 8. Testing Utilities

OCLIF includes test helpers that make it easy to test:
- Command results  
- Flag parsing  
- Error scenarios  
- CLI output  

This helps ensure your CLI behaves predictably in different environments.