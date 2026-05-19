import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import '../styles/landing.css';

/* ── AI Robot SVG — black & white palette ─────────────────────────── */
function RobotIllustration() {
  return (
    <svg
      className="robot-svg"
      viewBox="0 0 480 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#a8eeff" stopOpacity="1" />
          <stop offset="50%"  stopColor="#38b8e0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1a6a90" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#c0f0ff" stopOpacity="1" />
          <stop offset="55%"  stopColor="#2fa8d0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0d4a70" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>

        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#222222" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>

        <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="eyeFilter" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <style>{`
          .r-circuit {
            stroke-dasharray: 6 12;
            animation: rDash 2.5s linear infinite;
          }
          .r-circuit-slow {
            stroke-dasharray: 4 16;
            animation: rDash 4.2s linear infinite reverse;
          }
          @keyframes rDash { to { stroke-dashoffset: -60; } }

          .r-eye-blink {
            animation: rBlink 5.5s ease-in-out infinite;
          }
          @keyframes rBlink {
            0%,88%,100% { transform: scaleY(1); }
            93% { transform: scaleY(0.06); }
          }

          .r-scan {
            animation: rScan 3.2s ease-in-out infinite;
          }
          @keyframes rScan {
            0%   { transform: translateY(-36px); opacity: 0; }
            8%   { opacity: 0.7; }
            92%  { opacity: 0.7; }
            100% { transform: translateY(36px); opacity: 0; }
          }

          .r-pulse {
            animation: rPulse 2.2s ease-in-out infinite;
          }
          @keyframes rPulse {
            0%,100% { opacity: 0.35; }
            50% { opacity: 1; }
          }

          .r-spin {
            transform-origin: 240px 388px;
            animation: rSpin 9s linear infinite;
          }
          @keyframes rSpin { to { transform: rotate(360deg); } }

          .r-ant {
            animation: rAnt 2s ease-in-out infinite;
          }
          @keyframes rAnt {
            0%,100% { opacity: 0.45; }
            50% { opacity: 1; }
          }
        `}</style>
      </defs>

      {/* Ambient body glow */}
      <ellipse cx="240" cy="420" rx="180" ry="260" fill="url(#bodyGlow)" />

      {/* ── Antenna ── */}
      <line x1="240" y1="72" x2="240" y2="110" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
      <circle className="r-ant" cx="240" cy="66" r="5" fill="#00ccee" filter="url(#eyeFilter)" />
      <circle cx="240" cy="66" r="3" fill="#a8eeff" />
      <line x1="240" y1="90" x2="210" y2="75" stroke="#444" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="240" y1="90" x2="270" y2="75" stroke="#444" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="208" cy="74" r="3" fill="#38b0cc" opacity="0.65" />
      <circle cx="272" cy="74" r="3" fill="#38b0cc" opacity="0.65" />

      {/* ── Neck ── */}
      <rect x="218" y="248" width="44" height="28" rx="6" fill="#111" stroke="#333" strokeWidth="1.5" />
      {[230,240,250].map(x => (
        <line key={x} x1={x} y1="248" x2={x} y2="276" stroke="#444" strokeWidth="1" opacity="0.5" />
      ))}

      {/* ── Head shell ── */}
      <rect x="130" y="110" width="220" height="138" rx="28" fill="url(#bodyGrad)" stroke="#333" strokeWidth="2" />
      <rect x="132" y="112" width="216" height="50" rx="26" fill="rgba(255,255,255,0.025)" />
      <line x1="158" y1="110" x2="322" y2="110" stroke="#555" strokeWidth="2" opacity="0.6" />
      <rect x="148" y="126" width="184" height="96" rx="14" fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1.5" />

      {/* ── Eyes ── */}
      <rect x="162" y="142" width="58" height="38" rx="10" fill="#060606" stroke="#444" strokeWidth="1.5" />
      <g className="r-eye-blink" style={{ transformOrigin: '191px 161px' }}>
        <ellipse cx="191" cy="161" rx="20" ry="14" fill="url(#eyeGlow)" filter="url(#eyeFilter)" />
        <ellipse cx="191" cy="161" rx="13"  ry="9"  fill="#5dd0ee" opacity="0.75" />
        <ellipse cx="191" cy="161" rx="6"   ry="6"  fill="#071e2a" />
        <ellipse cx="191" cy="161" rx="3"   ry="3"  fill="#a8eeff" />
        <ellipse cx="188" cy="158" rx="1.5" ry="1.5" fill="white" opacity="0.9" />
        <line className="r-scan" x1="171" y1="161" x2="211" y2="161" stroke="#7ee8ff" strokeWidth="1" opacity="0.7" />
      </g>

      <rect x="260" y="142" width="58" height="38" rx="10" fill="#060606" stroke="#444" strokeWidth="1.5" />
      <g className="r-eye-blink" style={{ transformOrigin: '289px 161px' }}>
        <ellipse cx="289" cy="161" rx="20" ry="14" fill="url(#eyeGlow)" filter="url(#eyeFilter)" />
        <ellipse cx="289" cy="161" rx="13"  ry="9"  fill="#5dd0ee" opacity="0.75" />
        <ellipse cx="289" cy="161" rx="6"   ry="6"  fill="#071e2a" />
        <ellipse cx="289" cy="161" rx="3"   ry="3"  fill="#a8eeff" />
        <ellipse cx="286" cy="158" rx="1.5" ry="1.5" fill="white" opacity="0.9" />
        <line className="r-scan" x1="269" y1="161" x2="309" y2="161" stroke="#7ee8ff" strokeWidth="1" opacity="0.7" />
      </g>

      {/* ── Mouth grille ── */}
      <rect x="185" y="198" width="110" height="26" rx="8" fill="#080808" stroke="#2a2a2a" strokeWidth="1.5" />
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={194+i*17} y1="204" x2={194+i*17} y2="218"
          stroke="#555" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      ))}

      {/* ── Shoulders ── */}
      <rect x="90" y="276" width="300" height="16" rx="8" fill="#161616" stroke="#2d2d2d" strokeWidth="1.5" />

      {/* ── Torso ── */}
      <rect x="110" y="292" width="260" height="220" rx="20" fill="url(#bodyGrad)" stroke="#2d2d2d" strokeWidth="2" />
      <line x1="138" y1="292" x2="342" y2="292" stroke="#444" strokeWidth="1.5" opacity="0.5" />

      {/* ── Chest panel ── */}
      <rect x="134" y="312" width="212" height="156" rx="14" fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1.5" />

      {/* ── Core reactor ── */}
      <circle cx="240" cy="388" r="40" fill="#090909" stroke="#333" strokeWidth="2" />
      <circle cx="240" cy="388" r="30" fill="#0a1518" stroke="#1a4a5a" strokeWidth="1.5" />
      <g className="r-spin">
        <circle cx="240" cy="388" r="22" fill="none" stroke="#2ab8d8" strokeWidth="1.5"
          strokeDasharray="12 6" strokeLinecap="round" opacity="0.55" />
      </g>
      <circle cx="240" cy="388" r="14" fill="none" stroke="#38c0dc" strokeWidth="1" opacity="0.3" />
      <circle cx="240" cy="388" r="9"  fill="url(#coreGlow)" filter="url(#eyeFilter)" />
      <circle cx="240" cy="388" r="5"  fill="#c8f4ff" opacity="0.95" />
      <circle cx="238" cy="386" r="2"  fill="white" />

      {/* ── Chest circuit lines ── */}
      <g stroke="#555" strokeWidth="1.2" strokeLinecap="round" filter="url(#glowFilter)" opacity="0.8">
        <polyline points="150,340 150,360 164,360" />
        <polyline className="r-circuit" points="164,360 180,360 180,370" />
        <circle cx="150" cy="340" r="2.5" fill="#55cce0" />
        <circle cx="180" cy="370" r="2.5" fill="#55cce0" />
        <polyline points="150,380 158,380 158,400 168,400" />
        <circle className="r-pulse" cx="168" cy="400" r="3" fill="#40b8d0" />
        <polyline points="154,418 154,430 172,430" />
        <circle cx="172" cy="430" r="2" fill="#777" />
      </g>

      <g stroke="#555" strokeWidth="1.2" strokeLinecap="round" filter="url(#glowFilter)" opacity="0.8">
        <polyline points="330,340 330,360 316,360" />
        <polyline className="r-circuit-slow" points="316,360 300,360 300,370" />
        <circle cx="330" cy="340" r="2.5" fill="#55cce0" />
        <circle cx="300" cy="370" r="2.5" fill="#55cce0" />
        <polyline points="330,380 322,380 322,400 312,400" />
        <circle className="r-pulse" cx="312" cy="400" r="3" fill="#40b8d0" />
        <polyline points="326,418 326,430 308,430" />
        <circle cx="308" cy="430" r="2" fill="#777" />
      </g>

      {/* Data bars top chest */}
      <g opacity="0.65">
        {[0,1,2].map(i => (
          <rect key={i} x={152+i*12} y="320" width="8" height={8+i*4}
            rx="2" fill="#777" className="r-pulse"
            style={{ animationDelay: `${i*0.3}s` }} />
        ))}
        {[0,1,2].map(i => (
          <rect key={i} x={296+i*12} y="320" width="8" height={16-i*4}
            rx="2" fill="#777" className="r-pulse"
            style={{ animationDelay: `${i*0.4}s` }} />
        ))}
      </g>

      {/* ── Waist ── */}
      <rect x="128" y="512" width="224" height="22" rx="8" fill="#0e0e0e" stroke="#2d2d2d" strokeWidth="1.5" />
      {[0,1,2,3].map(i => (
        <rect key={i} x={144+i*52} y="517" width="36" height="12" rx="4"
          fill="#151515" stroke="#333" strokeWidth="1" />
      ))}

      {/* ── Hips ── */}
      <rect x="118" y="534" width="244" height="30" rx="10" fill="url(#bodyGrad)" stroke="#2d2d2d" strokeWidth="1.5" />

      {/* ── Legs ── */}
      <rect x="130" y="564" width="90" height="140" rx="14" fill="url(#bodyGrad)" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="142" y="580" width="66" height="90"  rx="8"  fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="130" y="640" width="90" height="22"  rx="8"  fill="#0e0e0e" stroke="#2d2d2d" strokeWidth="1.5" />
      <rect x="122" y="702" width="106" height="18" rx="8"  fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1.5" />

      <rect x="260" y="564" width="90" height="140" rx="14" fill="url(#bodyGrad)" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="272" y="580" width="66" height="90"  rx="8"  fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="260" y="640" width="90" height="22"  rx="8"  fill="#0e0e0e" stroke="#2d2d2d" strokeWidth="1.5" />
      <rect x="252" y="702" width="106" height="18" rx="8"  fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1.5" />

      <polyline points="168,590 168,610 158,610 158,626"
        stroke="#444" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
      <circle className="r-pulse" cx="158" cy="626" r="2.5" fill="#44bbd4" />

      <polyline points="312,590 312,610 322,610 322,626"
        stroke="#444" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
      <circle className="r-pulse" cx="322" cy="626" r="2.5" fill="#44bbd4" />

      {/* ── Arms ── */}
      <rect x="56"  y="290" width="56" height="180" rx="16" fill="url(#bodyGrad)" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="66"  y="306" width="36" height="120" rx="8"  fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="52"  y="396" width="64" height="22"  rx="10" fill="#0e0e0e" stroke="#2d2d2d" strokeWidth="1.5" />
      <rect x="58"  y="466" width="52" height="30"  rx="12" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      {[0,1,2].map(i => (
        <rect key={i} x={65+i*14} y="493" width="10" height="20" rx="5"
          fill="#111" stroke="#2a2a2a" strokeWidth="1.2" />
      ))}

      <rect x="368" y="290" width="56" height="180" rx="16" fill="url(#bodyGrad)" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="378" y="306" width="36" height="120" rx="8"  fill="url(#panelGrad)" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="364" y="396" width="64" height="22"  rx="10" fill="#0e0e0e" stroke="#2d2d2d" strokeWidth="1.5" />
      <rect x="370" y="466" width="52" height="30"  rx="12" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      {[0,1,2].map(i => (
        <rect key={i} x={377+i*14} y="493" width="10" height="20" rx="5"
          fill="#111" stroke="#2a2a2a" strokeWidth="1.2" />
      ))}

      <polyline points="84,318 84,350 74,350 74,380"
        stroke="#444" strokeWidth="1" strokeLinecap="round" fill="none" className="r-circuit" opacity="0.7" />
      <polyline points="396,318 396,350 406,350 406,380"
        stroke="#444" strokeWidth="1" strokeLinecap="round" fill="none" className="r-circuit-slow" opacity="0.7" />

      {/* Ground shadow */}
      <ellipse cx="240" cy="722" rx="160" ry="10" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

/* ── Page component ─────────────────────────────────────────────────── */
export default function LandingPage() {
  /* Lock scroll on mount, restore on unmount */
  useEffect(() => {
    document.documentElement.classList.add('landing-active');
    return () => document.documentElement.classList.remove('landing-active');
  }, []);

  return (
    <div className="landing-page">
      {/* Deep background */}
      <div className="landing-bg" aria-hidden="true" />

      {/* Scanline film-grain overlay */}
      <div className="landing-scanlines" aria-hidden="true" />

      {/* Vertical separator line */}
      <div className="landing-separator" aria-hidden="true" />

      {/* Robot — right half */}
      <div className="landing-robot" aria-hidden="true">
        <RobotIllustration />
      </div>

      {/* Glass content panel — left half */}
      <main className="landing-hero">
        <div className="landing-glass-panel">

          {/* Logo + wordmark */}
          <div className="landing-logo-wrap">
            <img className="landing-logo" src={logo} alt="PathIQ logo" />
            <span className="landing-logo-wordmark">PathIQ</span>
          </div>

          {/* Status badge */}
          <div className="landing-badge">
            <span className="badge-dot" />
            AI-Powered Career Platform
          </div>

          {/* Headline */}
          <h1 className="landing-title">
            Navigate Your<br />
            <span className="accent">Career Future</span><br />
            with Intelligence
          </h1>

          {/* Description */}
          <p className="landing-subtitle">
            AI-powered career guidance, skill gap analysis, and personalised learning roadmaps — built for modern professionals who move fast.
          </p>

          <div className="landing-divider" />

          {/* CTA */}
          <Link className="landing-cta" to="/home">
            Get Started
            <span className="cta-arrow">→</span>
          </Link>

        </div>
      </main>
    </div>
  );
}