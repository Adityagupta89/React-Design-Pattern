# Container–Presenter Pattern (React)

## What it is
A pattern to separate **logic** and **UI** in React components.

- **Container** → handles data and logic
- **Presenter** → handles UI and JSX

---

## Core Idea
> Logic decides **what happens**  
> UI decides **how it looks**

---

## Responsibilities

### Container
- API calls
- State management
- Business logic
- `isLoading`, `isError`
- Form data

### Presenter
- JSX & layout
- Styling
- Event handlers
- UI-only state (`isOpen`, `isEditing`)

---

## UI State Placement

| State | Where |
|------|------|
| isLoading | Container |
| isError | Container |
| errorMessage | Container |
| Form values | Container |
| isEditing (UI only) | Presenter |
| isOpen / isExpanded | Presenter |

---

## Data Flow
- Container → Presenter (via props)
- One-way data flow

---

## What NOT to Do
- API calls in Presenter
- Business logic in JSX
- Over-engineering small components

---

## When to Use
- Forms with API calls
- Complex components
- Large / scalable apps

---

## When NOT to Use
- Small UI components
- Simple static pages

---

## One-Line Summary
Container–Presenter separates business logic from UI to improve maintainability and reuse.