import './index.css';

const sidebarItems = ['New chat', 'Skills', 'Templates', 'Settings', 'Run'];
const modeTabs = ['Chat', 'Work', 'Code'];
const statusChips = ['In progress', 'To review', 'Done', 'Tasks'];
const promptTabs = ['test', 'home', 'docs'];

export default function App() {
  return (
    <div className="app-viewport">
      <div className="auraxis-app">
        <header className="topbar">
          <div className="breadcrumbs">
            <button className="back-button" aria-label="Back">←</button>
            <span className="crumb">File</span>
            <span className="crumb">Edit</span>
            <span className="crumb">View</span>
            <span className="crumb">Help</span>
            <span className="current-work">Work deepseek-v4-flash</span>
          </div>

          <div className="window-actions" aria-label="Window controls">
            <span className="window-icon">◌</span>
            <span className="window-icon">◫</span>
            <span className="window-icon">□</span>
            <span className="window-icon close">×</span>
          </div>
        </header>

        <div className="workspace-shell">
          <aside className="sidebar">
            <div className="brand-row">
              <div className="brand-mark">A</div>
              <span>BlaBlaBla</span>
            </div>

            <nav className="sidebar-nav" aria-label="Sidebar navigation">
              {sidebarItems.map((item, index) => (
                <button key={item} className={`sidebar-item ${index === 0 ? 'active' : ''}`}>
                  {item}
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <button className="sidebar-menu" aria-label="Options">≡</button>
              <span>No active task</span>
            </div>

            <div className="profile-block">
              <div className="avatar">A</div>
              <div className="profile-meta">
                <strong>After_</strong>
                <span>3186611757@qq.com</span>
              </div>
            </div>
          </aside>

          <main className="canvas">
            <div className="toolbar-row">
              <div className="mode-switch" role="tablist" aria-label="Mode selector">
                {modeTabs.map((tab, index) => (
                  <button key={tab} className={`mode-tab ${index === 0 ? 'active' : ''}`}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="status-chips">
                {statusChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-content">
              <h1>
                Good morning, <span>After_</span>
              </h1>
              <p>
                Let’s make the workflow easier: AI, chat, tasks, and context — all in one place.
              </p>
            </div>

            <div className="prompt-panel">
              <div className="prompt-box">
                <div className="prompt-left">
                  <button className="prompt-action add" aria-label="Add">＋</button>
                  <button className="prompt-action" aria-label="Attachment">⌁</button>
                </div>

                <div className="prompt-input">Describe your task...</div>

                <div className="prompt-right">
                  <span className="prompt-tag">DeepSeek V4 Flash</span>
                  <button className="send-button" aria-label="Send">▶</button>
                </div>
              </div>

              <div className="prompt-tabs">
                {promptTabs.map((tab) => (
                  <button key={tab} className="prompt-tab">
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
