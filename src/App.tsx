const NAV_ITEMS = [
  { label: 'CHARACTER', icon: '⚙' },
  { label: 'SKILLS', icon: '◈' },
  { label: 'QUESTS', icon: '◎' },
  { label: 'FEATS', icon: '⚜' },
  { label: 'CONTACT', icon: '✉' },
]

const STATS = [
  { label: 'FRONTEND', value: 92, fill: 'fill-cyan' },
  { label: 'BACKEND', value: 78, fill: 'fill-magenta' },
  { label: 'UI/UX DESIGN', value: 85, fill: 'fill-green' },
  { label: 'DEVOPS', value: 65, fill: 'fill-yellow' },
  { label: 'PROBLEM SOLVING', value: 95, fill: 'fill-orange' },
]

function App() {
  return (
    <>
      <div className="hex-grid-bg" />

      <main
        className="position-relative w-100 d-flex flex-column gap-3 py-4"
        style={{ zIndex: 1, paddingInline: '160px' }}
      >

        {/* Flag */}
        <div className="w-100 d-flex justify-content-center">
          <p style={{ fontFamily: 'var(--cyber-font-display)', letterSpacing: '0.5rem', fontSize: 11, color: 'var(--cyber-text)' }}>
            --- SELECT MODULE ---
          </p>
        </div>

        {/* Nav */}
        <div className="d-flex justify-content-center align-items-center py-3 rounded gap-5 nav-panel">
          {NAV_ITEMS.map((item, idx) => (
            <div
              className={`itemMenu py-2 px-3 ${idx === 0 ? 'active' : ''}`}
              key={idx}
            >
              <span style={{ fontSize: 13 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Content Row */}
        <div className="d-flex gap-3">

          {/* Left — Character Panel */}
          <div className="cyber-panel cyber-panel-accent d-flex flex-column align-items-center p-4 gap-3" style={{ minWidth: 260, maxWidth: 280 }}>

            {/* Avatar */}
            <div className="avatar-ring">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQGF8UMNWDRnlA/profile-displayphoto-scale_400_400/B4DZmmJ0BvHYAg-/0/1759429215121?e=1775088000&v=beta&t=F21msCZMeUxibxtW15zbJ3QyeRGE-AfFjmDr3NwBG6I" alt="avatar" />
              <div className="avatar-lvl">LVL<br />34</div>
            </div>

            {/* Name */}
            <div className="text-center d-flex flex-column gap-1">
              <p className="dev-name">Distraivis</p>
              <p className="dev-role">Full Stack Developer</p>
              <span className="class-badge">Full Stack Developer</span>
            </div>

            {/* Stats */}
            <div className="w-100">
              {/* <p className="stats-title">◈ CHARACTER STATS</p> */}

              <div className="d-flex flex-column gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="d-flex justify-content-between">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}/100</span>
                    </div>
                    <div className="stat-bar">
                      <div className={`stat-bar-fill ${stat.fill}`} style={{ width: `${stat.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* XP Bar */}
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <span className="stat-label">EXPERIENCE</span>
                  <span className="stat-value">8,420 / 10,000 XP</span>
                </div>
                <div className="stat-bar mt-1">
                  <div className="stat-bar-fill fill-xp" style={{ width: '84.2%' }} />
                </div>
              </div>
            </div>

          </div>

          {/* Right — Content Panel */}
          <div className="cyber-panel cyber-panel-accent flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="content-placeholder">
              <p className="placeholder-title">▶ SELECT A MODULE TO BEGIN ◀</p>
              <p className="placeholder-sub">Navigate through skills, quests, achievements, and more</p>
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default App