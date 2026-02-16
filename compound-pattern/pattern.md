# Compound Component Pattern

## What is the Compound Component Pattern?

The **Compound Component Pattern** is a design pattern where multiple related components work together as a single unit.  
A parent component manages the shared logic and state, while child components automatically access that logic without passing many props.

In simple words:  
**Different parts of a component know how to work together without manual wiring.**

---

## When should we use it?

Use this pattern when:
- Components are **closely related**
- They need to **share state or behavior**
- You want a **clean and readable API**
- You are building **reusable or library-level components**

Avoid it when:
- The component is very simple
- Shared state is not required

---

## Benefits

- Clean and readable component structure
- Avoids prop drilling
- Easy to scale and extend
- Flexible composition
- Hard to misuse
- Ideal for design systems and UI libraries

---

## Why UI Libraries use it

UI components like Accordion, Modal, Tabs, and Dropdown have:
- Multiple internal parts
- Shared behavior
- One source of truth for state

The compound pattern keeps logic centralized while allowing flexible usage.

---

## Interview Explanation

> “The compound component pattern is used when multiple components are logically connected and need to share state.  
It helps avoid prop drilling and provides a clean, declarative API.  
This pattern scales well and is commonly used in design systems for complex UI components.”

---

## One-line Summary

> “Compound components help build scalable and clean UI APIs where related components share logic implicitly.”