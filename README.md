# BlaBlaBla

BlaBlaBla is a fresh, from-scratch desktop workbench for turning ideas into structured work. It blends a lightweight product dashboard, task orchestration, and AI-assisted planning into a single workspace designed for creative execution.

Instead of inheriting an older codebase, this project was rebuilt from the ground up as a clean foundation for a modern desktop tool that can evolve into a richer workflow system over time.

## Product vision

The goal of BlaBlaBla is to provide a focused environment for:

- capturing ideas and briefs
- creating plans and execution paths
- tracking active work and tasks
- interacting with AI assistance in a structured workspace
- building a desktop-first operating surface for knowledge work

This is meant to feel like a workbench, not a cluttered app. The current UI is intentionally minimal, readable, and designed to support future expansion.

## Why this project exists

Many workspaces feel bloated, overly complex, or tightly coupled to legacy systems. BlaBlaBla is intentionally designed to be:

- clean and easy to navigate
- modular and extensible
- desktop-native while still supporting web iteration
- suitable as a starting point for experimentation and product development

The repository currently presents a polished starter shell, with the foundation in place for more advanced productivity flows later.

## Core capabilities

### 1. Workspace overview
A dashboard that gives a high-level view of current activity, workstreams, and focus areas.

### 2. AI-style assistant flow
A chat-like interaction surface that suggests planning, summarization, and task assistance patterns.

### 3. Task execution panel
An area for tracking current tasks, statuses, and execution progress.

### 4. Lightweight desktop shell
Built as an Electron app so it can evolve into a real desktop product instead of just a browser mockup.

### 5. Future-ready architecture
The project is structured to support additional features like:

- file and document context
- agent workflows
- knowledge capture
- project planning boards
- PR/review summaries
- team collaboration panels

## Interface mockup

The current app is designed as a clean workspace with a sidebar, top operation bar, assistant panel, and execution panel.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ BlaBlaBla                          [Share] [Run flow]                       │
├───────────────┬──────────────────────────────────────────────────────────────┤
│ Workspace      │ Operating mode: Creative workspace                         │
│ ─────────────  │                                                              │
│ Overview       │ Fresh start, clean foundation.                              │
│ Agents         │ The app is rebuilt from scratch with a minimal shell,       │
│ Files          │ usable workflows, and a strong foundation for AI automation.│
│ Tasks          │                                                              │
│ Settings       │ [New Brief] [Summarize] [Draft Plan] [Review PR]            │
│                │                                                              │
│ Current brief  │ ┌───────────────────────┐ ┌──────────────────────────┐     │
│ Product kickoff│ │ Assistant            │ │ Execution               │     │
│ 5 active      │ │ Welcome...           │ │ Launch workspace        │     │
│ threads       │ │ User: We need a...   │ │ Write onboarding copy  │     │
│                │ │ Assistant: ...      │ │ Plan collaboration...   │     │
│                │ │ Ask BlaBlaBla...    │ │ Today                   │     │
│                │ └───────────────────────┘ └──────────────────────────┘     │
└──────────────────────────────────────────────────────────────────────────────┘
```

This mockup reflects the intent of the app: a calm, structured surface where work and assistance coexist without feeling overwhelming.

## Tech stack

- React 18
- TypeScript
- Vite
- Electron
- Electron Builder

This stack keeps the development loop fast while enabling a desktop-first product path.

## Quick start

Install the project dependencies:

```bash
npm install
```

Run the local web app:

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
- `npm run build` — compile the frontend bundle for production
- `npm run preview` — preview the built app locally
- `npm run electron:prepare` — compile the Electron main process TypeScript
- `npm run electron:dev` — start the app in Electron development mode
- `npm run electron:build` — package the app with Electron Builder
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
└── .gitignore
```

## App architecture

The repository is intentionally lightweight and easy to navigate:

- `src/App.tsx` defines the application shell and workspace layout
- `src/index.css` contains the visual styling and dashboard presentation
- `src/main.tsx` boots the React app
- `electron/main.ts` is the Electron entry point for desktop behavior
- `package.json` defines scripts and build configuration

## Design principles

BlaBlaBla aims to follow a few simple design principles:

1. Clarity over density
   Keep the surface readable and calm.

2. Structure over chaos
   Group work into clear panels and workstreams.

3. Speed over complexity
   Keep the startup flow fast and easy to iterate.

4. Extensibility over rigidity
   Design the app to support future automation and richer workflows.

## Project roadmap

The app is currently a strong starting point, and the roadmap can evolve in several directions:

- add real task and project persistence
- integrate AI-powered planning and summarization flows
- support document and file context ingestion
- expand the assistant to help with PR review, planning, and execution
- add richer desktop integrations and workflows
- improve onboarding, settings, and collaboration features

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Notes

This project is intentionally independent from the previous Auraxis codebase and is being developed as a clean slate with a modern desktop-workbench direction. It is a strong foundation for experimentation and future expansion into AI-assisted productivity tooling.
