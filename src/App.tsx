import './index.css';

export default function App() {
  return (
    <div className="app-viewport">
      <div className="minimal-shell">
        <button className="menu-button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>

        <div className="logo-circle">
          <span>Logo</span>
        </div>

        <div className="player-bar" aria-label="Playback controls">
          <button className="play-button" aria-label="Play">
            <span className="play-triangle" />
          </button>
        </div>
      </div>
    </div>
  );
}
