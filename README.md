# BlaBlaBla

BlaBlaBla is a clean, desktop-first workbench for turning ideas into action. It brings together a lightweight dashboard, task tracking, and AI-assisted planning into a single workspace built for modern creative and product work.

The project is a fresh start: rebuilt from scratch rather than inheriting an older codebase, with a clear focus on usability, modularity, and a foundation for future automation.

## Product vision

BlaBlaBla is designed to be a calm, structured workspace where teams and individuals can:

- capture ideas and briefs
- plan execution steps
- monitor active tasks and focus areas
- interact with an assistant-like workflow layer
- evolve into a broader AI-powered productivity system over time

The current version is intentionally polished as a startup-style product shell: minimal, readable, and built to be extended without becoming cluttered.

## Why this project exists

Most productivity tools either feel visually heavy, are too generic, or are locked into legacy systems. BlaBlaBla aims to provide a more focused alternative:

- fast and easy to navigate
- desktop-native for real work sessions
- designed for iterative product experimentation
- ready to expand with workflow intelligence, documentation, tasks, and automation

This repository is intentionally independent from the earlier Auraxis codebase and acts as a clean foundation for a new direction.

## Key features

### Workspace dashboard
A compact overview screen that keeps focus on the current operational context.

### AI-assisted planning surface
A chat-like panel designed for requests such as idea synthesis, summaries, drafting plans, and workflow support.

### Task execution view
A clear list of active work items with visible status indicators and execution momentum.

### Desktop app shell
Built in Electron so the project can evolve into a true desktop application instead of staying as a single-browser prototype.

### Future-ready extensibility
The foundation is structured to support additional features such as:

- project and document management
- multi-agent execution flows
- summary and review assistance
- PR/task context review
- richer collaboration workflows
- deeper automation and integrations

## Interface mockup

The interface is intentionally designed to feel like a focused operation center rather than a cluttered dashboard.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ BlaBlaBla                                                             │
│ Workspace                                   [Share] [Run flow]      │
├───────────────────────┬────────────────────────────────────────────────────┤
│ Workspace              │ Operating mode: Creative workspace             │
│ ─────────────────────  │                                                │
│ Overview               │ Fresh start, clean foundation.                │
│ Agents                 │ A product-grade starter workspace for ideas,  │
│ Files                  │ tasks, and AI-assisted execution.             │
│ Tasks                  │                                                │
│ Settings               │ [New Brief] [Summarize] [Draft Plan] [Review PR] │
│                       │                                                │
│ Current brief          │ ┌──────────────────────┐ ┌──────────────────┐ │
│ Product kickoff        │ │ Assistant           │ │ Execution       │ │
│ 5 active threads       │ │ Welcome...          │ │ Launch workspace│ │
│                       │ │ User: We need a...  │ │ Write onboarding│ │
│                       │ │ Assistant: ...     │ │ Plan collaboration│ │
│                       │ │ Ask BlaBlaBla...   │ │ Today           │ │
│                       │ └──────────────────────┘ └──────────────────┘ │
└───────────────────────┴────────────────────────────────────────────────────┘
```

This mockup reflects the product direction: a calm interface with clear sections for conversation, planning, and execution.

## Tech stack

- React 18
- TypeScript
- Vite
- Electron
- Electron Builder

This stack provides a fast development loop while keeping the app suitable for desktop packaging and future feature growth.

## Architecture

The project is intentionally lightweight and easy to reason about:

- `src/App.tsx` defines the product shell, navigation, message panels, and task layout
- `src/index.css` contains the visual design language, layout, and component styling
- `src/main.tsx` bootstraps the React application into the browser context
- `electron/main.ts` defines the Electron entry point for desktop behavior
- `package.json` contains app scripts, dependencies, and Electron build configuration

This is a clean starting point for a product that may eventually add persistence, workflows, automation services, and richer app-state management.

## Quick start

Install dependencies:

```bash
npm install
```

Start the local web app:

```bash
npm run dev
```

Run the desktop app in development mode:

```bash
npm run electron:dev
```

Build the app for production:

```bash
npm run build
npm run electron:build
```

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the web application
- `npm run preview` — preview the production build locally
- `npm run electron:prepare` — compile Electron main-process TypeScript
- `npm run electron:dev` — run the app inside Electron with Vite active
- `npm run electron:build` — build and package the desktop app with Electron Builder
- `npm start` — launch the built Electron app

## Project structure

```text
.
├── electron/
│   └── main.ts
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── LICENSE
├── README.md
├── .gitignore
└── release/    # generated by build output
```

## Design principles

BlaBlaBla is guided by a few simple principles:

1. Clarity over density
   Keep the interface readable and intentional.

2. Structure over chaos
   Organize work into clear views and focused panels.

3. Speed over complexity
   Aim for a fast iteration loop during early development.

4. Extensibility over rigidity
   Design the app to evolve into a broader workflow system without a rewrite.

## Roadmap

The project is already a strong foundation, and the roadmap can evolve in several directions:

- add persistent task and project storage
- integrate richer AI workflows and context-aware assistance
- support document and file-based project context
- expand the assistant with summarization and review workflows
- add collaboration and shared-state features
- improve onboarding, configuration, and settings experiences
- deepen integrations with external tools and productivity services

## Current status

This repository currently represents a polished product shell and a strong starter foundation. It is ready for experimentation, feature expansion, and further product-level refinement.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Notes

BlaBlaBla is intentionally independent from the old Auraxis codebase and is meant to be a clean-slate product direction focused on desktop productivity, structured workflows, and AI-assisted execution.
