A high performance, real time e-commerce foundation built with a focus on type safety, scalable state management, and artisanal aesthetics. This project represents a complete refactor from a legacy Firebase implementation to a modern Supabase + PostgreSQL architecture.

The goal is to create a seamless, multi language shopping experience for handcrafted soaps. Unlike the previous iteration, this version prioritizes data integrity and developer velocity by using a relational database and a declarative data fetching layer.

Core Framework: React 19 + Vite
Database & Auth: Supabase (PostgreSQL)
Data Fetching:TanStack Query (v5)
Styling: Tailwind CSS v4
State Management: Zustand

/@/lib: Core service configurations (Supabase, i18n).

/@/hooks: Reusable "Headless" logic (e.g., useProducts, useCart).

/@/components: Atomic UI elements (Buttons, Inputs) vs. Layout wrappers.

/@/pages: Routed views that orchestrate hooks and components.


Planned Logic Phases
[x] Phase 1: Foundation (Vite, Tailwind v4, Path Aliasing).

[ ] Phase 2: Data Architecture (Supabase Table definitions & TanStack integration).

[ ] Phase 3: Global Context (Zustand store for Cart & Auth).

[ ] Phase 4: Internationalization (i18next for Swedish/English support).

[ ] Phase 5: Deployment (Vercel/Netlify optimized build).
