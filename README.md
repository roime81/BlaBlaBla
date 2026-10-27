# BlaBlaBla

BlaBlaBla is a clean, from-scratch desktop workbench for ideas, tasks, and AI-assisted workflows. It is built as a lightweight productivity workspace with a minimal shell, a focused dashboard, and a foundation for future automation, project planning, and agent-driven execution.

This project intentionally starts from a fresh foundation rather than inheriting the old Auraxis codebase, making it easier to evolve toward a modular, modern desktop experience.

## Highlights

- React + Vite front end for a fast development loop
- Electron shell for a desktop app experience
- Simple workbench-style dashboard with overview, task tracking, and assistant messaging
- Minimal architecture designed for future expansion into planning, agents, and workflow automation
- Clean starter layout suitable for prototyping and iteration

## Tech stack

- React 18
- TypeScript
- Vite
- Electron
- Electron Builder

## Quick start

Install dependencies:

```bash
npm install
```

Run the web app locally:

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
- `npm run build` — build the web app
- `npm run preview` — preview the production build locally
- `npm run electron:prepare` — compile Electron main process TypeScript
- `npm run electron:dev` — start Electron with Vite in dev mode
- `npm run electron:build` — build the app and package it with Electron Builder
- `npm start` — run the built Electron app

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
└── README.md
```

## Why this project exists

BlaBlaBla is meant to be a modern workspace for structured thinking and execution. The current version focuses on a polished starting point: a dashboard, workbench shell, and an assistant-style interface that can grow into a broader tool for product planning, knowledge capture, and AI-assisted task execution.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
