import { useState } from 'react';
import './index.css';
import {
  conversation,
  modeTabs,
  navItems,
  statusCards,
  tasks,
  workspaceMeta,
} from './data/workspace';

const modeLabels = modeTabs.map((tab) => tab.label);
type Mode = (typeof modeLabels)[number];

export default function App() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [activeMode, setActiveMode] = useState<Mode>('Chat');

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">A</div>
          <div>
            <div className="eyebrow">Workspace</div>
            <h1>BlaBlaBla</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Workspace navigation">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={`nav-item ${activeNav === item ? 'active' : ''}`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="workspace-card">
          <span className="workspace-label">Current workflow</span>
          <strong>{workspaceMeta.workflow}</strong>
          <span className="workspace-subtle">{workspaceMeta.owner}</span>
        </div>

        <div className="sidebar-footer">
          <div className="mini-profile">
            <div className="avatar">A</div>
            <div>
              <strong>After_</strong>
              <span>3186611757@qq.com</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="breadcrumbs" aria-label="Breadcrumbs">
            <button type="button" className="crumb-button" aria-label="Back">
              ←
            </button>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Help</span>
            <span className="current-work">{workspaceMeta.currentTask}</span>
          </div>

          <div className="topbar-actions" aria-label="Top actions">
            <button type="button" className="ghost-button small">Share</button>
            <button type="button" className="primary-button small">Run</button>
          </div>
        </header>

        <section className="hero-row">
          {statusCards.map((card) => (
            <div key={card.title} className={`status-card ${card.size === 'large' ? 'large' : ''}`}>
              <div className="eyebrow">{card.eyebrow}</div>
              <h3>{card.title}</h3>
              <div className="metric">{card.metric}</div>
              <p>{card.description}</p>
            </div>
          ))}
        </section>

        <section className="toolbar-row">
          <div className="mode-switch" role="tablist" aria-label="Mode selector">
            {modeTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`mode-tab ${activeMode === tab.label ? 'active' : ''}`}
                onClick={() => setActiveMode(tab.label as Mode)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="status-chips" aria-label="Status chips">
            {['In progress', 'To review', 'Done', 'Tasks'].map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="content-grid">
          <div className="panel chat-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="online-dot">●</span>
                <strong>{workspaceMeta.model}</strong>
              </div>
              <button type="button" className="ghost-button">
                Export
              </button>
            </div>

            <div className="messages" aria-live="polite">
              {conversation.map((msg) => (
                <div key={msg.id} className={`message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="composer">
              <button type="button" className="prompt-button" aria-label="Add content">
                +
              </button>
              <input type="text" defaultValue="Describe your task..." aria-label="Task input" />
              <button type="button" className="primary-button">
                Send
              </button>
            </div>
          </div>

          <div className="panel task-panel">
            <div className="panel-header">
              <strong>Active tasks</strong>
              <button type="button" className="ghost-button small">
                New task
              </button>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div className="task-meta">
                    <strong>{task.title}</strong>
                    <span>{task.owner}</span>
                  </div>
                  <span className={`status-pill ${task.statusClass}`}>{task.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
