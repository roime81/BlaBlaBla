import './index.css';

const navItems = [
  'New chat',
  'Skills',
  'Toolbox',
  'Scheduled tasks',
  'Task flows',
];

const tabs = ['Chat', 'Work', 'Code'];
const statusPills = ['In progress', 'To do', 'Completed', 'Actions'];

export default function App() {
  return (
    <div className="auraxis-shell">
      <header className="topbar">
        <div className="crumbs">
          <button className="nav-arrow">←</button>
          <span className="crumb-item">File</span>
          <span className="crumb-item">Edit</span>
          <span className="crumb-item">View</span>
          <span className="crumb-item">Help</span>
          <span className="crumb-current">Work deepseek-v4-flash</span>
        </div>

        <div className="toolbar-icons" aria-label="window actions">
          <span>⎘</span>
          <span>▢</span>
          <span>—</span>
          <span>✕</span>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <div className="sidebar-brand-row">
            <div className="brand-mark">△</div>
            <div className="brand-name">Auraxis</div>
          </div>

          <nav className="side-menu" aria-label="Sidebar navigation">
            {navItems.map((item, index) => (
              <button key={item} className={`side-item ${index === 0 ? 'active' : ''}`}>
                <span className="side-icon">
                  {index === 0 ? '+' : index === 1 ? '✦' : index === 2 ? '▣' : index === 3 ? '◫' : '≡'}
                </span>
                {item}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button className="side-item compact" aria-label="More options">≣</button>
            <div className="user-card">
              <div className="avatar">A</div>
              <div className="user-meta">
                <div className="user-name">After_</div>
                <div className="user-email">3186611757@qq.com</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="main-panel">
          <div className="mode-switcher">
            {tabs.map((tab, index) => (
              <button key={tab} className={`mode-tab ${index === 0 ? 'active' : ''}`}>
                <span className="mode-icon">{index === 0 ? '◔' : index === 1 ? '◫' : '◌'}</span>
                {tab}
              </button>
            ))}
          </div>

          <div className="status-row">
            {statusPills.map((pill) => (
              <span key={pill} className="status-pill">
                {pill}
              </span>
            ))}
          </div>

          <div className="hero-copy">
            <h1>
              <span className="spark">✦</span>
              Good morning, <span className="emphasis">After_</span>
            </h1>
            <p>
              We streamline your tasks with AI: <span>plan, execute, and track</span>
            </p>
          </div>

          <div className="prompt-card">
            <div className="prompt-label">Describe your task...</div>
            <div className="prompt-actions">
              <span className="prompt-plus">＋</span>
              <span className="prompt-icon">↻</span>
              <span className="prompt-model">DeepSeek V4 Flash / Research mode</span>
              <span className="prompt-send">▷</span>
            </div>
          </div>

          <div className="bottom-tags">
            <span>test</span>
            <span>home</span>
            <span>documents</span>
          </div>
        </main>
      </div>
    </div>
  );
}
