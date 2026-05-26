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
          background: linear-gradient(180deg, #fff7ed 0%, #ffffff 45%, #fdf2f8 100%);
          color: #18181b;
          font-family: Arial, Helvetica, sans-serif;
        }
        .aym-container {
          max-width: 920px;
          margin: 0 auto;
          padding: 16px 14px 28px;
        }
        .aym-card {
          background: #fff;
          border: 1px solid #e4e4e7;
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(0,0,0,0.05);
        }
        .aym-header {
          position: relative;
          overflow: hidden;
          border: 1px solid #fed7aa;
          border-radius: 24px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,247,237,0.98));
          box-shadow: 0 18px 48px rgba(0,0,0,0.08);
        }
        .aym-header-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(249,115,22,0.18), transparent 28%), radial-gradient(circle at left, rgba(236,72,153,0.16), transparent 32%), radial-gradient(circle at bottom, rgba(59,130,246,0.10), transparent 28%);
          pointer-events: none;
        }
        .aym-nav {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
          margin-bottom: 14px;
        }
        .aym-nav a {
          text-decoration: none;
          color: #71717a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          background: rgba(255,255,255,.72);
          border: 1px solid #f4f4f5;
          border-radius: 999px;
          padding: 7px 10px;
        }
        .aym-badge {
          position: relative;
          z-index: 1;
          display: inline-block;
          background: #ffedd5;
          color: #ea580c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 8px 12px;
        }
        .aym-title {
          position: relative;
          z-index: 1;
          margin: 14px 0 12px;
          font-size: 42px;
          line-height: .95;
          font-weight: 900;
          letter-spacing: -.05em;
          word-break: break-word;
        }
        .aym-lead {
          position: relative;
          z-index: 1;
          margin: 0;
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
          min-height: 52px;
          border-radius: 18px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          text-align: center;
          padding: 14px 18px;
        }
        .aym-btn-primary {
          background: linear-gradient(90deg, #f97316 0%, #ec4899 100%);
          color: #fff;
          box-shadow: 0 16px 32px rgba(249,115,22,0.28);
        }
        .aym-btn-secondary {
          background: #fff;
          color: #18181b;
          border: 1px solid #e4e4e7;
        }
        .aym-section {
          margin-top: 18px;
          padding: 20px;
        }
        .aym-hot {
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid #fed7aa;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 18px 48px rgba(0,0,0,0.06);
        }
        .aym-hot-head {
          background: linear-gradient(90deg, #f97316 0%, #ec4899 65%, #f59e0b 100%);
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
          color: #f97316;
          margin-bottom: 8px;
        }
        .aym-kicker-white {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(255,255,255,.82);
          margin-bottom: 8px;
        }
        .aym-h2 {
          margin: 0;
          font-size: 32px;
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
          border: 1px solid #fed7aa;
          background: linear-gradient(135deg, #fff7ed 0%, #fdf2f8 100%);
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
          background: linear-gradient(180deg, #ffffff 0%, #fffaf7 100%);
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
          .aym-header { padding: 28px; border-radius: 28px; }
          .aym-title { font-size: 56px; }
          .aym-button-row { flex-direction: row; }
          .aym-btn-primary, .aym-btn-secondary { width: auto; min-width: 240px; }
          .aym-section, .aym-hot-body { padding: 28px; }
          .aym-hot-head { padding: 22px 28px; }
          .aym-h2 { font-size: 40px; }
          .aym-grid.socials { grid-template-columns: repeat(3, 1fr); }
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
            <span className="aym-badge">Flyer Limited Page</span>
            <h1 className="aym-title">ASAKIYUMEMISHI</h1>
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

    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.headerGlow} />
          <div style={styles.nav}>
            <a href="https://asakiyumemishi.ryzm.jp/" style={styles.navLink}>Home</a>
            <a href="#benefit" style={styles.navLink}>Limited</a>
            <a href="#songs" style={styles.navLink}>Music</a>
            <a href="#next-live" style={styles.navLink}>Next Live</a>
            <a href="#follow" style={styles.navLink}>Follow</a>
          </div>

          <span style={styles.badge}>Flyer Limited Page</span>
          <h1 style={styles.title}>ASAKIYUMEMISHI</h1>
          <p style={styles.lead}>
            フライヤーを受け取ってくれてありがとうございます。
            このページは、ライブ会場で出会ってくれた方のための限定ページです。
            気になった曲、次に来るならおすすめの日、そして会場限定コンテンツをまとめました。
          </p>

          <div style={styles.buttonRow}>
            <a href="#benefit" style={styles.primaryButton}>限定コンテンツを見る</a>
            <a href="#songs" style={styles.secondaryButton}>まず聴いてほしい3曲へ</a>
          </div>
        </header>

        <section id="benefit" style={styles.hotSection}>
          <div style={styles.hotHeader}>
            <div style={styles.sectionLabelWhite}>Limited Benefit</div>
            <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>会場限定コンテンツ</h2>
          </div>
          <div style={{ padding: "28px" }}>
            <p style={styles.sectionText}>
              ライブ写真とセットリストをまとめました。
              下のボタンから見られます。
            </p>

            <div style={styles.card}>
              <div style={styles.sectionLabel}>Special Contents</div>
              <p style={styles.sectionText}>
                当日の余韻をもう少し持ち帰ってもらえるように、会場限定でまとめています。
              </p>
              <div style={{ marginTop: "18px" }}>
                <a href={limitedContentHref} target="_blank" rel="noreferrer" style={styles.primaryButton}>
                  限定コンテンツを見る！
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="songs" style={styles.section}>
          <div style={styles.sectionLabel}>Music</div>
          <h2 style={styles.sectionTitle}>はじめましての方へ。まずはここから。</h2>
          <p style={{ ...styles.sectionText, marginTop: "12px" }}>
            初めての方にも入りやすいように、まず触れてほしい3曲を置きました。
          </p>

          <div style={styles.songGrid}>
            {songs.map((song, index) => (
              <a key={song.title} href={song.href} target="_blank" rel="noreferrer" style={styles.songCard}>
                <div style={styles.songKicker}>Track 0{index + 1}</div>
                <h3 style={styles.songTitle}>{song.title}</h3>
                <p style={styles.songText}>{song.description}</p>
                <span style={styles.songLink}>聴いてみる →</span>
              </a>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionLabel}>About</div>
          <h2 style={styles.sectionTitle}>ASAKIYUMEMISHIについて</h2>
          <p style={{ ...styles.sectionText, marginTop: "12px" }}>
            愛知・三河発の4ピースバンド。衝動、哀しさ、熱量、まっすぐさを、ライブハウスの距離感で鳴らしています。
          </p>
          <p style={{ ...styles.sectionText, marginTop: "10px" }}>
            この限定ページでは、初めて出会ってくれた方がもう一歩入りやすいように、入口をぎゅっとまとめています。
          </p>
        </section>

        <section id="next-live" style={styles.section}>
          <div style={styles.sectionLabel}>Next Live</div>
          <h2 style={styles.sectionTitle}>次に来るならこの日がおすすめです</h2>
          <div style={styles.card}>
            <div style={{ fontSize: "15px", color: "#71717a", fontWeight: 700 }}>2026/05/29 (Fri)</div>
            <h3 style={{ fontSize: "34px", lineHeight: 1.1, margin: "10px 0 10px", fontWeight: 900 }}>名古屋 栄R.A.D</h3>
            <p style={styles.sectionText}>
              気になった方がもう一度観に来る入口として案内しやすい日です。ライブ情報は公式サイトでもまとめて見られます。
            </p>
            <div style={{ marginTop: "18px" }}>
              <a href="https://asakiyumemishi.ryzm.jp/live" target="_blank" rel="noreferrer" style={styles.secondaryButton}>
                LIVE情報を見る
              </a>
            </div>
          </div>
        </section>

        <section id="follow" style={styles.section}>
          <div style={styles.sectionLabel}>Follow</div>
          <h2 style={styles.sectionTitle}>気になったら、まずはここから</h2>
          <p style={{ ...styles.sectionText, marginTop: "12px" }}>
            いちばん追いやすい入口を置いています。まずはInstagramか公式サイトからどうぞ。
          </p>

          <div style={styles.socialsGrid}>
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" style={styles.socialCard}>
                <h3 style={styles.socialTitle}>{social.name}</h3>
                <p style={styles.songText}>{social.description}</p>
              </a>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>© 2026 ASAKIYUMEMISHI / Flyer Limited Page</footer>
      </div>
    </div>
  );
}
