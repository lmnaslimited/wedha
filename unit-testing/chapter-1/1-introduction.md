# Lesson 1: Introduction to Unit Testing

## Learning Objectives
By the end of this lesson, learners will be able to:
- Understand what Unit Testing is
- Differentiate between Unit, Integration, and System Testing
- Explain why Unit Testing is important
- Identify benefits and common myths of Unit Testing
- Know when to write Unit Tests

---

## What is Unit Testing?

Unit Testing is a type of software testing where **individual units or components of a program are tested independently**.

- A *unit* is the smallest testable part of an application (usually a function or method)
- Each unit is tested in isolation to verify correct behavior

**Example:**
If you have a function that adds two numbers, Unit Testing ensures that function works correctly for different inputs.

---

## Difference between Unit Testing, Integration Testing, and System Testing

| Testing Type | Description | Scope |
|--------------|-------------|-------|
| Unit Testing | Tests individual functions or components | Small |
| Integration Testing | Tests interaction between modules | Medium |
| System Testing | Tests the complete application | Large |

**Simple analogy:**
- Unit Testing → Testing a single gear
- Integration Testing → Testing how gears work together
- System Testing → Testing the entire machine

---

## Why do we need Unit Testing?

- To detect bugs early
- To ensure code works as expected
- To reduce manual testing effort
- To improve code quality
- To support confident refactoring

---

## Benefits of Unit Testing

- 🐞 Early bug detection
- 🔄 Easier code refactoring
- 📈 Improved code quality
- 🧪 Reliable and repeatable tests
- ⚡ Faster development in the long run

---

## Common Myths about Unit Testing

❌ “Unit testing slows down development”  
✅ It saves time by catching issues early

❌ “Only testers should write unit tests”  
✅ Developers should write unit tests

❌ “Unit tests are not needed for small projects”  
✅ Small projects benefit the most

---

## When Unit Testing should be written

- While developing new features
- Before fixing bugs (test-first approach)
- During refactoring
- As part of Continuous Integration (CI)

---

## Summary

Unit Testing is a foundational skill for modern software development. It improves code reliability, maintainability, and developer confidence.