import './index.css';

type IconButton = {
  label: string;
  active?: boolean;
};

const navItems: IconButton[] = [
  { label: 'Chat', active: true },
  { label: 'Web' },
  { label: 'Tools' },
  { label: 'Settings' },
];

const actionPills = [
  'Summarize this document',
  'Research latest AI trends',
  'Plan a trip for my family',
  'Analyze my data',
];

const featureCards = [
  {
    title: '1. Floating Orb (Collapsed)',
    tag: 'Small, transparent, frameless, always-on-top.',
    theme: 'orb',
  },
  {
    title: '2. Web Content (In-app Browser)',
    tag: 'Opens real webpages within the window with contextual navigation controls.',
    theme: 'browser',
  },
  {
    title: '3. Window States & Controls',
    tag: 'Minimize, maximize, restore, close, and quick actions.',
    theme: 'windows',
  },
] as const;

export default function App() {
  return (
    <div className="aurora-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero-layout">
        <aside className="brand-sidebar">
          <div className="brand-mark" aria-label="Aura logo">
            <span className="brand-ring" />
          </div>
          <p className="brand-copy">
            Your AI companion,
            <br />
            always there.
          </p>
        </aside>

        <div className="window-stage">
          <div className="window-shell">
            <div className="shell-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot amber" />
                <span className="dot green" />
              </div>
              <div className="tab-row">
                {navItems.map((item) => (
                  <button key={item.label} className={`tab-button ${item.active ? 'active' : ''}`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="shell-body">
              <div className="prompt-header">
                <h2>Hello Roy,</h2>
                <h3>How can I help you today?</h3>
              </div>

              <div className="action-row">
                {actionPills.map((pill) => (
                  <button key={pill} className="pill-button">
                    {pill}
                  </button>
                ))}
              </div>

              <div className="composer-box">
                <span className="composer-hint">Ask me anything...</span>
                <div className="composer-icons">
                  <span>◌</span>
                  <span>⌁</span>
                  <span>➤</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="controls-aside">
          <div className="mini-heading">Standard window controls</div>
          <p className="mini-subtitle">(minimize, maximize, restore, close)</p>

          <div className="orb-panel">
            <div className="orb-visual">
              <div className="orb-sphere" />
            </div>
          </div>

          <ul className="control-list">
            <li>Floating Orb (Always on top)</li>
            <li>Draggable</li>
            <li>Click to open/restore</li>
            <li>Hide</li>
            <li>Disable</li>
            <li>Quit</li>
          </ul>
        </aside>
      </header>

      <main className="feature-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="feature-card glass-panel">
            <h4>{card.title}</h4>

            {card.theme === 'orb' && (
              <div className="mini-scene orb-scene">
                <div className="mini-orb" />
                <div className="floating-actions">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            {card.theme === 'browser' && (
              <div className="mini-scene browser-scene">
                <div className="browser-bar">
                  <span className="browser-dot red" />
                  <span className="browser-dot amber" />
                  <span className="browser-dot green" />
                </div>
                <div className="browser-content">
                  <div className="browser-hero" />
                </div>
              </div>
            )}

            {card.theme === 'windows' && (
              <div className="mini-scene windows-scene">
                <div className="sample-window normal" />
                <div className="sample-window minimized" />
                <div className="sample-window maximized" />
              </div>
            )}

            <p>{card.tag}</p>
          </article>
        ))}
      </main>
    </div>
  );
}
