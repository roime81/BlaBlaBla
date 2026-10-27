import { app } from 'electron';
import fs from 'node:fs/promises';
import path from 'node:path';

export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PersistedWindowState {
  expandedBounds: Bounds;
  maximized: boolean;
  floatingVisible: boolean;
  floatingDisabled: boolean;
}

export const defaultWindowState: PersistedWindowState = {
  expandedBounds: { x: 120, y: 80, width: 1100, height: 760 },
  maximized: false,
  floatingVisible: true,
  floatingDisabled: false,
};

export class WindowStateService {
  private readonly statePath: string;

  constructor() {
    this.statePath = path.join(app.getPath('userData'), 'blablabla-window-state.json');
  }

  async load(): Promise<PersistedWindowState> {
    try {
      const raw = await fs.readFile(this.statePath, 'utf-8');
      const parsed = JSON.parse(raw) as Partial<PersistedWindowState>;
      return {
        ...defaultWindowState,
        ...parsed,
        expandedBounds: {
          ...defaultWindowState.expandedBounds,
          ...(parsed.expandedBounds ?? {}),
        },
      };
    } catch {
      return defaultWindowState;
    }
  }

  async save(state: PersistedWindowState): Promise<void> {
    await fs.writeFile(this.statePath, JSON.stringify(state, null, 2), 'utf-8');
  }
}
