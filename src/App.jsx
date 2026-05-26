import logo from './assets/logo.png'

export default function AsakiyumemishiQrLandingPage() {
  const limitedContentHref = "https://drive.google.com/drive/folders/1jdgIG6OTmzWQozvAVY_WOHsfOzQtgDHH?usp=drive_link";

  const songs = [
    {
      title: "ショウゲキノカラ",
      description: "ライブで引っかかった方に、まず触れてほしい代表的な1曲。",
      href: "https://www.youtube.com/watch?v=isg9fBgeHp8",
    },
    {
      title: "SUPER NOTHING",
      description: "深夜の焦燥と衝動をそのまま鳴らした最新リリース。",
      href: "#",
    },
    {
      title: "Epic Summer",
      description: "メロディと空気感から入りやすい、入口向きの1曲。",
      href: "#",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      description: "ライブ情報、写真、動画を一番見やすく追える場所。",
      href: "https://www.instagram.com/aym0716band/",
    },
    {
      name: "X",
      description: "最新情報や日々の動きを早く追いたい方はこちら。",
      href: "https://x.com/AYM0716BAND",
    },
    {
      name: "Official Site",
      description: "ライブ日程、ニュース、ディスコグラフィーをまとめて確認できます。",
      href: "https://asakiyumemishi.ryzm.jp/",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .aym-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #ecfeff 0%, #ffffff 42%, #fff7ed 100%);
          color: #18181b;
          font-family: Arial, Helvetica, sans-serif;
        }
        .aym-container {
          max-width: 920px;
          margin: 0 auto;
          padding: 16px 14px 28px;
        }
        .aym-card {
          background: rgba(255,255,255,0.96);
          border: 1px solid #e4e4e7;
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(0,0,0,0.05);
        }
        .aym-header {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(34, 211, 238, 0.28);
          border-radius: 28px;
          padding: 18px;
          background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(236,254,255,0.98));
          box-shadow: 0 18px 48px rgba(0,0,0,0.08);
        }
        .aym-header-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(34,211,238,0.16), transparent 28%),
            radial-gradient(circle at 15% 30%, rgba(249,115,22,0.14), transparent 30%),
            radial-gradient(circle at bottom, rgba(56,189,248,0.10), transparent 28%);
          pointer-events: none;
        }
        .aym-nav {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
          margin-bottom: 16px;
        }
        .aym-nav a {
          text-decoration: none;
          color: #52525b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          background: rgba(255,255,255,.76);
          border: 1px solid #f4f4f5;
          border-radius: 999px;
          padding: 7px 10px;
        }
        .aym-logo-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
        .aym-logo {
          display: block;
          width: min(100%, 540px);
          height: auto;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.08));
        }
        .aym-badge {
          position: relative;
          z-index: 1;
          display: inline-block;
          background: linear-gradient(90deg, #cffafe 0%, #ffedd5 100%);
          color: #0f172a;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 8px 12px;
          border: 1px solid rgba(34,211,238,0.18);
        }
        .aym-lead {
          position: relative;
          z-index: 1;
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.9;
          color: #3f3f46;
        }
        .aym-button-row {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .aym-btn-primary,
        .aym-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 54px;
          border-radius: 18px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          text-align: center;
          padding: 14px 18px;
        }
        .aym-btn-primary {
          background: linear-gradient(90deg, #22d3ee 0%, #f97316 100%);
          color: #fff;
          box-shadow: 0 16px 32px rgba(34,211,238,0.22);
        }
        .aym-btn-secondary {
          background: #fff;
          color: #18181b;
          border: 1px solid #d4d4d8;
        }
        .aym-section {
          margin-top: 18px;
          padding: 20px;
        }
        .aym-hot {
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid rgba(34,211,238,0.26);
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 18px 48px rgba(0,0,0,0.06);
        }
        .aym-hot-head {
          background: linear-gradient(90deg, #22d3ee 0%, #38bdf8 42%, #f97316 100%);
          color: #fff;
          padding: 18px 20px;
        }
        .aym-hot-body {
          padding: 20px;
        }
        .aym-kicker {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #0891b2;
          margin-bottom: 8px;
        }
        .aym-kicker-white {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(255,255,255,.85);
          margin-bottom: 8px;
        }
        .aym-h2 {
          margin: 0;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -.04em;
        }
        .aym-text {
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          color: #3f3f46;
        }
        .aym-inner-card {
          margin-top: 16px;
          border-radius: 22px;
          border: 1px solid rgba(34,211,238,0.20);
          background: linear-gradient(135deg, #ecfeff 0%, #fff7ed 100%);
          padding: 18px;
        }
        .aym-grid {
          display: grid;
          gap: 12px;
          margin-top: 16px;
        }
        .aym-song,
        .aym-social {
          display: block;
          text-decoration: none;
          color: inherit;
          border: 1px solid #e4e4e7;
          border-radius: 22px;
          padding: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 10px 28px rgba(0,0,0,0.04);
        }
        .aym-song-kicker {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #a1a1aa;
          margin-bottom: 8px;
        }
        .aym-song-title,
        .aym-social-title {
          margin: 0 0 8px;
          font-size: 24px;
          line-height: 1.1;
          font-weight: 900;
        }
        .aym-song-link {
          display: inline-block;
          margin-top: 12px;
          color: #f97316;
          font-size: 14px;
          font-weight: 800;
        }
        .aym-footer {
          text-align: center;
          font-size: 11px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #a1a1aa;
          padding: 18px 0 4px;
          font-weight: 700;
        }
        @media (min-width: 768px) {
          .aym-container { padding: 24px 20px 40px; }
          .aym-header { padding: 28px; border-radius: 30px; }
          .aym-button-row { flex-direction: row; }
          .aym-btn-primary, .aym-btn-secondary { width: auto; min-width: 240px; }
          .aym-section, .aym-hot-body { padding: 28px; }
          .aym-hot-head { padding: 22px 28px; }
          .aym-h2 { font-size: 40px; }
          .aym-grid.socials { grid-template-columns: repeat(3, 1fr); }
          .aym-logo { width: min(100%, 680px); }
        }
      `}</style>
      <div className="aym-page">
        <div className="aym-container">
          <header className="aym-header">
            <div className="aym-header-glow" />
            <div className="aym-nav">
              <a href="https://asakiyumemishi.ryzm.jp/">Home</a>
              <a href="#benefit">Limited</a>
              <a href="#songs">Music</a>
              <a href="#next-live">Next Live</a>
              <a href="#follow">Follow</a>
            </div>

            <div className="aym-logo-wrap">
              <img src={logo} alt="ASAKIYUMEMISHI logo" className="aym-logo" />
            </div>

            <span className="aym-badge">Flyer Limited Page</span>
            <p className="aym-lead">
              フライヤーを受け取ってくれてありがとうございます。
              このページは、ライブ会場で出会ってくれた方のための限定ページです。
              気になった曲、次に来るならおすすめの日、そして会場限定コンテンツをまとめました。
            </p>
            <div className="aym-button-row">
              <a href="#benefit" className="aym-btn-primary">限定コンテンツを見る</a>
              <a href="#songs" className="aym-btn-secondary">まず聴いてほしい3曲へ</a>
            </div>
          </header>

          <section id="benefit" className="aym-hot">
            <div className="aym-hot-head">
              <div className="aym-kicker-white">Limited Benefit</div>
              <h2 className="aym-h2" style={{ color: '#fff' }}>会場限定コンテンツ</h2>
            </div>
            <div className="aym-hot-body">
              <p className="aym-text">
                ライブ写真とセットリストをまとめました。
                下のボタンから見られます。
              </p>
              <div className="aym-inner-card">
                <div className="aym-kicker">Special Contents</div>
                <p className="aym-text">
                  当日の余韻をもう少し持ち帰ってもらえるように、会場限定でまとめています。
                </p>
                <div style={{ marginTop: 18 }}>
                  <a href={limitedContentHref} target="_blank" rel="noreferrer" className="aym-btn-primary">
                    限定コンテンツを見る！
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="songs" className="aym-card aym-section">
            <div className="aym-kicker">Music</div>
            <h2 className="aym-h2">はじめましての方へ。まずはここから。</h2>
            <p className="aym-text" style={{ marginTop: 12 }}>
              初めての方にも入りやすいように、まず触れてほしい3曲を置きました。
            </p>
            <div className="aym-grid">
              {songs.map((song, index) => (
                <a key={song.title} href={song.href} target="_blank" rel="noreferrer" className="aym-song">
                  <div className="aym-song-kicker">Track 0{index + 1}</div>
                  <h3 className="aym-song-title">{song.title}</h3>
                  <p className="aym-text">{song.description}</p>
                  <span className="aym-song-link">聴いてみる →</span>
                </a>
              ))}
            </div>
          </section>

          <section className="aym-card aym-section">
            <div className="aym-kicker">About</div>
            <h2 className="aym-h2">ASAKIYUMEMISHIについて</h2>
            <p className="aym-text" style={{ marginTop: 12 }}>
              愛知・三河発の4ピースバンド。衝動、哀しさ、熱量、まっすぐさを、ライブハウスの距離感で鳴らしています。
            </p>
            <p className="aym-text" style={{ marginTop: 10 }}>
              この限定ページでは、初めて出会ってくれた方がもう一歩入りやすいように、入口をぎゅっとまとめています。
            </p>
          </section>

          <section id="next-live" className="aym-card aym-section">
            <div className="aym-kicker">Next Live</div>
            <h2 className="aym-h2">次に来るならこの日がおすすめです</h2>
            <div className="aym-inner-card">
              <div style={{ fontSize: 15, color: '#71717a', fontWeight: 700 }}>2026/05/29 (Fri)</div>
              <h3 className="aym-song-title" style={{ fontSize: 32, marginTop: 10 }}>名古屋 栄R.A.D</h3>
              <p className="aym-text">
                気になった方がもう一度観に来る入口として案内しやすい日です。ライブ情報は公式サイトでもまとめて見られます。
              </p>
              <div style={{ marginTop: 18 }}>
                <a href="https://asakiyumemishi.ryzm.jp/live" target="_blank" rel="noreferrer" className="aym-btn-secondary">
                  LIVE情報を見る
                </a>
              </div>
            </div>
          </section>

          <section id="follow" className="aym-card aym-section">
            <div className="aym-kicker">Follow</div>
            <h2 className="aym-h2">気になったら、まずはここから</h2>
            <p className="aym-text" style={{ marginTop: 12 }}>
              いちばん追いやすい入口を置いています。まずはInstagramか公式サイトからどうぞ。
            </p>
            <div className="aym-grid socials">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="aym-social">
                  <h3 className="aym-social-title">{social.name}</h3>
                  <p className="aym-text">{social.description}</p>
                </a>
              ))}
            </div>
          </section>

          <footer className="aym-footer">© 2026 ASAKIYUMEMISHI / Flyer Limited Page</footer>
        </div>
      </div>
    </>
  );
}
