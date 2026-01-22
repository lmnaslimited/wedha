In Chapter 1, we learned why testing is critical for business success, how defects become expensive across the SDLC, and how different types of testing protect different risks. We also explored unit testing, the first line of defense that provides fast, reliable feedback and confidence in small pieces of logic. With this foundation, we can now explore what a unit really means in business software.

## 1. A Unit is a Business Responsibility

In ERP systems and enterprise software, a unit represents a business responsibility that must always behave correctly. It is not defined by **files, functions, or methods**. It is defined by outcomes that the business depends on.

## 2. The Same Unit Seen by Different Personas

![Same Unit](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/Chapter-2/perona.png)

The importance of a unit becomes clearer when we see who depends on it:

- **Business user:** trusts the final number without questioning it  
- **Manager:** sees revenue and compliance tied to it  
- **Developer:** knows the logic will evolve over time  
- **QA engineer:** worries about what might break  

The unit exists because all of them depend on that outcome, even if they describe it differently.

## 3. How Units Break as Software Evolves

Early in a system, logic is simple: base price plus tax. Manual checks are enough. As business rules grow like discounts, regional tax rules, special rounding. The same responsibility, such as final amount calculation, becomes more complex. If developers focus only on code pieces, they may test functions but miss the overall business promise. That is why unit testing is about protecting behavior, not just isolating code.

## 4. A Simple Rule That Works in ERP Systems

- If you can explain what the logic does without showing code, it is a unit.  
- If you need to open the editor to explain it, it probably isn’t.  
- A good unit answers one business question reliably, for example:  
  - “Is this customer eligible for a discount?”  
  - “Is tax calculated correctly for this order?”  
  - “Is the final payable amount accurate?”  

Unit tests exist to lock these answers in place, even as the system grows.

## Key Takeaway

- In business software, a unit is a contract with the business, not a technical boundary. Unit testing matters because business rules change, but their outcomes must not break. The next lesson will explore why some units are easy to test while others are hard, and how design choices affect testability.
