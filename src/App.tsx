import './index.css';

const navItems = ['Overview', 'Agents', 'Files', 'Tasks', 'Settings'];
const quickActions = ['New Brief', 'Summarize', 'Draft Plan', 'Review PR'];
const taskItems = [
  { label: 'Product kickoff', status: 'green', text: 'In progress' },
  { label: 'Launch workspace', status: 'amber', text: 'To do' },
  { label: 'Write onboarding', status: 'blue', text: 'Actions' },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">B</div>
          <div>
            <div className="eyebrow">Workspace</div>
            <h1>BlaBlaBla</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Sidebar navigation">
          {navItems.map((item, index) => (
            <button key={item} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </nav>

        <div className="workspace-card">
          <div className="workspace-label">Current mode</div>
          <strong>Creative workspace</strong>
        </div>
      </aside>

      <main className="main-panel">
        <div className="topbar">
          <div>
            <div className="eyebrow">Operations</div>
            <h2>Workspace dashboard</h2>
          </div>

          <div className="topbar-actions">
            <button className="ghost-button">Share</button>
            <button className="primary-button">Run flow</button>
          </div>
        </div>

        <div className="hero-row">
          <div className="status-card large">
            <div className="eyebrow">Operating mode</div>
            <h3>Fresh start, clean foundation.</h3>
            <p>
              A product-grade starter workspace for ideas, tasks, and AI-assisted execution.
            </p>
          </div>

          <div className="status-card compact">
            <div className="eyebrow">Momentum</div>
            <div className="metric">3.2x</div>
            <p>active execution velocity this sprint</p>
          </div>
        </div>

        <div className="quick-actions">
          {quickActions.map((action) => (
            <button key={action} className="chip-button">
              {action}
            </button>
          ))}
        </div>

        <div className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <strong>Conversation</strong>
              <span className="online-dot">● Online</span>
            </div>

            <div className="messages">
              <div className="message assistant">
                Welcome to BlaBlaBla. We can help shape the brief, break down tasks, and keep the work moving.
              </div>
              <div className="message user">
                We need a clearer product plan for a desktop AI workbench.
              </div>
              <div className="message assistant">
                I can draft the product outline, summarize context, and propose the next working sprint.
              </div>
            </div>

            <div className="composer">
              <input aria-label="Prompt input" value="Ask BlaBlaBla..." readOnly />
              <button className="primary-button small">Send</button>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <strong>Current tasks</strong>
              <span className="eyebrow">5 active</span>
            </div>

            <div className="task-list">
              {taskItems.map((task) => (
                <div key={task.label} className="task-item">
                  <span className={`status-pill ${task.status}`}>{task.text}</span>
                  <span>{task.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
