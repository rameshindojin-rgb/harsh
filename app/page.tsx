"use client";

import { useMemo, useState } from "react";

type Position = {
  xPercent: number;
  yPercent: number;
};

const HEARTS = ["💖", "💘", "💕", "💗", "💓", "💞", "❤️", "🩷"];

export default function Home() {
  const [noPosition, setNoPosition] = useState<Position>({ xPercent: 72, yPercent: 56 });
  const [accepted, setAccepted] = useState(false);

  const heartBurst = useMemo(
    () =>
      Array.from({ length: 40 }, (_, idx) => ({
        id: idx,
        left: 6 + Math.random() * 88,
        delay: Math.random() * 0.6,
        duration: 2.1 + Math.random() * 1.5,
        symbol: HEARTS[Math.floor(Math.random() * HEARTS.length)],
        drift: -60 + Math.random() * 120,
      })),
    [accepted],
  );

  const dodgeNoButton = () => {
    if (accepted) return;

    const min = 12;
    const max = 82;

    let nextX = noPosition.xPercent;
    let nextY = noPosition.yPercent;

    while (
      Math.abs(nextX - noPosition.xPercent) < 14 &&
      Math.abs(nextY - noPosition.yPercent) < 12
    ) {
      nextX = min + Math.random() * (max - min);
      nextY = min + Math.random() * (max - min);
    }

    setNoPosition({ xPercent: nextX, yPercent: nextY });
  };

  return (
    <main className="page">
      <section className="card">
        <p className="kicker">💌 Hey cutie pie! 💌</p>
        <h1>Will you be my Valentine? 🥰🌹</h1>
        {!accepted ? (
          <p className="subtext">Pick wisely, lovebug! 😘✨</p>
        ) : (
          <p className="result">Best decision ever. I love you Be ready for dinner on February 14.</p>
        )}

        <div className="buttonStage" aria-live="polite">
          <button
            type="button"
            className="yesButton"
            onClick={() => setAccepted(true)}
            disabled={accepted}
          >
            yes 💕
          </button>

          {!accepted && (
            <button
              type="button"
              className="noButton"
              style={{ left: `${noPosition.xPercent}%`, top: `${noPosition.yPercent}%` }}
              onMouseEnter={dodgeNoButton}
              onMouseMove={dodgeNoButton}
              onTouchStart={dodgeNoButton}
              onClick={dodgeNoButton}
            >
              no 🙈
            </button>
          )}
        </div>
      </section>

      {accepted && (
        <div className="heartLayer" aria-hidden="true">
          {heartBurst.map((heart) => (
            <span
              key={heart.id}
              className="heart"
              style={
                {
                  left: `${heart.left}%`,
                  animationDelay: `${heart.delay}s`,
                  animationDuration: `${heart.duration}s`,
                  "--drift": `${heart.drift}px`,
                } as React.CSSProperties
              }
            >
              {heart.symbol}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
