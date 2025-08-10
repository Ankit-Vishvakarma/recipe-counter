# Recipes Frontend

Single-page React application that lets users perform **free-text searches** against a backend recipes API and view results in a responsive grid. It supports **client-side sorting** (by `cookTimeMinutes`) and **client-side filtering** (by `tags`). The app follows clean-code patterns (atomic design), uses environment variables for configuration, and demonstrates lazy-loading and responsive UI.

---

---

## Demo / Screenshots
<img width="1920" height="882" alt="image" src="https://github.com/user-attachments/assets/f57f0520-45c3-4b98-8fe4-cc979d17c0db" />
<img width="1899" height="875" alt="image" src="https://github.com/user-attachments/assets/66931778-4243-4b9e-99b4-bf11a2fd28fa" />
<img width="1920" height="995" alt="image" src="https://github.com/user-attachments/assets/947f78f4-ee2c-4ad2-a354-1af4747a98f7" />
<img width="1920" height="984" alt="image" src="https://github.com/user-attachments/assets/8515145f-a698-4624-ba99-40f1a12b64cd" />

---

## Features

- Global search bar (Google-style) — free text search by recipe name, cuisine or any searchable field.
- Searches trigger only after user types **at least 3 characters** and presses **Enter** or clicks **Search**.
- Displays results in a responsive grid of recipe cards.
- Client-side sorting by `cookTimeMinutes` (ascending / descending) without calling backend again.
- Client-side filtering by recipe `tags` (OR semantics: recipe included if it contains any selected tag).
- Clean error / empty-state messages and loading indicators.
- Atomic component structure for reusability.

---

## Prerequisites

- Node.js v16+ (or latest LTS)
- npm v8+ (or yarn)
- A backend API that exposes a free-text recipe search endpoint (spring-boot)

---

## Getting started

1. Clone repo
```bash
git clone https://github.com/Ankit-Vishvakarma/recipe-counter.git
cd recipe-counter
