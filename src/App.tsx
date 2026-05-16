import { Code2, Heart, HeartOff, Sparkles } from 'lucide-react'
import { useCallback, useState } from 'react'
import './App.css'

type ButtonPosition = {
  top: number
  left: number
}

const defaultPhoto =
  '/purity-mumo.jpeg'

const getRandomPosition = (): ButtonPosition => {
  const padding = 18
  const buttonWidth = 132
  const buttonHeight = 56
  const maxLeft = Math.max(padding, window.innerWidth - buttonWidth - padding)
  const maxTop = Math.max(padding, window.innerHeight - buttonHeight - padding)

  return {
    left: Math.round(padding + Math.random() * (maxLeft - padding)),
    top: Math.round(padding + Math.random() * (maxTop - padding)),
  }
}

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noPosition, setNoPosition] = useState<ButtonPosition | null>(null)
  const [escapeCount, setEscapeCount] = useState(0)

  const moveNoButton = useCallback(() => {
    setNoPosition(getRandomPosition())
    setEscapeCount((count) => count + 1)
  }, [])

  if (accepted) {
    return (
      <main className="page celebration-page">
        <section className="celebration-layout" aria-live="polite">
          <div className="photo-card final-photo">
            <img src={defaultPhoto} alt="Purity Mumo" />
            <div className="photo-caption">Her smile, my favorite view.</div>
            <div className="photo-glow" />
          </div>

          <div className="celebration-card">
            <div className="emoji-cloud" aria-hidden="true">
              <span>💖</span>
              <span>😘</span>
              <span>💋</span>
              <span>🥰</span>
              <span>❤️</span>
            </div>

            <div className="big-heart">
              <Heart fill="currentColor" />
            </div>

            <p className="eyebrow">Respectfully compiled from the heart</p>
            <h1>Purity Mumo, I love you</h1>
            <p className="love-note">
              I know you are not ready for dating, and I respect that. This is just my honest little lover-boy program saying you are special to me, and I love you with patience, care, and zero pressure. 💖😘💋
            </p>

            <div className="code-note">
              <Code2 />
              <span>while (respect) &#123; lovePurityGently(); &#125;</span>
            </div>

            <div className="kiss-row" aria-label="Love and kissing emojis">
              <span>😘</span>
              <span>💋</span>
              <span>🥰</span>
              <span>💞</span>
              <span>❤️</span>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page question-page">
      <section className="proposal-layout">
        <div className="photo-card">
          <img src={defaultPhoto} alt="Purity Mumo" />
          <div className="photo-caption">Her smile, my favorite view.</div>
        </div>

        <div className="proposal-panel">
          <div className="sparkle-badge">
            <Sparkles />
            For Purity Mumo
          </div>

          <h1>Purity Mumo, can I keep loving you gently?</h1>
          <p>
            I made this for your smile, your softness, and the way you stay in my heart even when I try to act normal.
          </p>

          <div className="reason-grid love-grid" aria-label="Reasons I love Purity">
            <span><Heart fill="currentColor" /> your smile</span>
            <span><Heart fill="currentColor" /> your heart</span>
            <span><Heart fill="currentColor" /> simply you</span>
          </div>

          <div className="button-stage">
            <button className="yes-button" type="button" onClick={() => setAccepted(true)}>
              <Heart fill="currentColor" />
              Yes, gently
            </button>
            <button
              className={`no-button ${noPosition ? 'is-floating' : ''}`}
              style={noPosition ? { top: noPosition.top, left: noPosition.left } : undefined}
              type="button"
              onMouseEnter={moveNoButton}
              onFocus={moveNoButton}
              onTouchStart={moveNoButton}
              onPointerDown={moveNoButton}
              aria-label="No button that runs away"
            >
              <HeartOff />
              No
            </button>
          </div>

          <p className="hint">
            {escapeCount === 0
            ? 'No pressure. But try pressing No... if it lets you.'
              : `No has escaped ${escapeCount} ${escapeCount === 1 ? 'time' : 'times'}.`}
          </p>
        </div>

        <div className="mini-terminal" aria-label="Love terminal">
          <div>
            <span />
            <span />
            <span />
          </div>
          <p>$ run lover-boy --person "Purity Mumo"</p>
          <strong>I am not asking for pressure. I am just saying my heart chose you.</strong>
        </div>
      </section>
    </main>
  )
}

export default App
