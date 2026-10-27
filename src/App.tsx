type Message = {
  id: number;
  author: 'assistant' | 'user';
  text: string;
};

const initialMessages: Message[] = [
  { id: 1, author: 'assistant', text: 'Welcome to BlaBlaBla. Build, plan, and ship your next idea.' },
  { id: 2, author: 'user', text: 'We need a clean UI for a workbench, not a copy of the old app.' },
  { id: 3, author: 'assistant', text: 'Understood. I designed a fresh starter workspace with a lightweight shell and focused tools.' },
];

const quickActions = ['New Brief', 'Summarize', 'Draft Plan', 'Review PR'];
const tasks = [
  { title: 'Launch workspace', status: 'Ready', tone: 'green' },
  { title: 'Write onboarding copy', status: 'In progress', tone: 'amber' },
  { title: 'Plan collaboration flow', status: 'Queued', tone: 'blue' },
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

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Agents</button>
          <button className="nav-item">Files</button>
          <button className="nav-item">Tasks</button>
          <button className="nav-item">Settings</button>
        </nav>

        <div className="workspace-card">
          <div className="workspace-label">Current brief</div>
          <strong>Product kickoff</strong>
          <span>5 active threads</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Operating mode</div>
            <h2>Creative workspace</h2>
          </div>

          <div className="topbar-actions">
            <button className="ghost-button">Share</button>
            <button className="primary-button">Run flow</button>
          </div>
        </header>

        <section className="hero-row">
          <div className="status-card large">
            <div className="eyebrow">Signal</div>
            <h3>Fresh start, clean foundation.</h3>
            <p>
              The app is rebuilt from scratch with a minimal shell, usable workflows, and
              a strong foundation for AI automation.
            </p>
          </div>

          <div className="status-card compact">
            <div className="eyebrow">Focus</div>
            <div className="metric">12</div>
            <span>live ideas</span>
          </div>
        </section>

        <section className="quick-actions">
          {quickActions.map((action) => (
            <button key={action} className="chip-button">
              {action}
            </button>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel chat-panel">
            <div className="panel-header">
              <span>Assistant</span>
              <span className="online-dot">● Online</span>
            </div>

            <div className="messages">
              {initialMessages.map((message) => (
                <div key={message.id} className={`message ${message.author}`}>
                  {message.text}
                </div>
              ))}
            </div>

            <div className="composer">
              <input type="text" placeholder="Ask BlaBlaBla to help plan or build…" />
              <button className="primary-button small">Send</button>
            </div>
          </div>

          <div className="panel tasks-panel">
            <div className="panel-header">
              <span>Execution</span>
              <span>Today</span>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.title} className="task-item">
                  <div className={`status-pill ${task.tone}`}>{task.status}</div>
                  <span>{task.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
