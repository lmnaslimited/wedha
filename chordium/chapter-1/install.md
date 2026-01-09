# Install oclif

## Prerequisites

Before installing oclif, ensure the following requirements are met:

### 1. Node.js

-   Node.js version **20 or above** is recommended.
    
-   Verify installation:
    
    `node -v` 
    

### 2. npm or yarn

-   npm comes bundled with Node.js.
    
-   Check version:
    
    `npm -v` 
    

### 3. Git (optional but recommended)

-   Useful for version control and plugin development.
    
-   Verify installation:
    
    `git --version` 
    

### 4. Basic Knowledge

-   Understanding of JavaScript or TypeScript.
    
-   Ability to use terminal commands.
    

----------

## Installation Steps

### Step 1: Install the oclif Generator

Install the global CLI generator:

`npm install -g oclif` 

### Step 2: Create a New oclif Project

Generate a new CLI application:

`oclif generate my-cli` 

Replace `my-cli` with your project name.

### Step 3: Navigate to the Project

`cd my-cli` 

### Step 4: Install Project Dependencies

`npm install` 

### Step 5: Run the CLI Locally

Start the CLI:

`npm start` 

### Step 6: Run a Specific Command

Commands inside `src/commands` can be executed using:

`./bin/run <command-name>` 

Example:

`./bin/run hello` 

### Step 7: Build the CLI (Optional)

Compile TypeScript to JavaScript:

`npm run build` 

### Step 8: Link the CLI Globally (Optional)

To use your CLI from anywhere:

`npm link` 

Run your CLI globally:

`my-cli` 

----------

## Installation Completed

You now have a fully functional oclif development environment.  
You can begin creating commands, adding features, and building your CLI tool.