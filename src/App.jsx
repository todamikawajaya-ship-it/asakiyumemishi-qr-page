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

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 45%, #fdf2f8 100%)",
      color: "#18181b",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    container: {
      maxWidth: "920px",
      margin: "0 auto",
      padding: "24px 20px 40px",
    },
    header: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,247,237,0.98))",
      border: "1px solid #fed7aa",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden",
    },
    headerGlow: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at top right, rgba(249,115,22,0.18), transparent 28%), radial-gradient(circle at left, rgba(236,72,153,0.16), transparent 32%), radial-gradient(circle at bottom, rgba(59,130,246,0.10), transparent 28%)",
      pointerEvents: "none",
    },
    nav: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginBottom: "18px",
      position: "relative",
      zIndex: 1,
    },
    navLink: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#71717a",
      textDecoration: "none",
    },
    badge: {
      display: "inline-block",
      background: "#ffedd5",
      color: "#ea580c",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      borderRadius: "999px",
      padding: "8px 12px",
      position: "relative",
      zIndex: 1,
    },
    title: {
      fontSize: "56px",
      lineHeight: 1,
      margin: "18px 0 14px",
      fontWeight: 900,
      letterSpacing: "-0.04em",
      position: "relative",
      zIndex: 1,
    },
    lead: {
      fontSize: "16px",
      lineHeight: 1.9,
      color: "#3f3f46",
      maxWidth: "760px",
      position: "relative",
      zIndex: 1,
      margin: 0,
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "24px",
      position: "relative",
      zIndex: 1,
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 22px",
      borderRadius: "18px",
      background: "linear-gradient(90deg, #f97316 0%, #ec4899 100%)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 800,
      fontSize: "15px",
      boxShadow: "0 16px 32px rgba(249,115,22,0.28)",
    },
    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 22px",
      borderRadius: "18px",
      background: "#fff",
      color: "#18181b",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "15px",
      border: "1px solid #e4e4e7",
    },
    section: {
      background: "#fff",
      border: "1px solid #e4e4e7",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 18px 50px rgba(0,0,0,0.05)",
      marginTop: "24px",
    },
    hotSection: {
      background: "#fff",
      border: "1px solid #fed7aa",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
      marginTop: "24px",
    },
    hotHeader: {
      background: "linear-gradient(90deg, #f97316 0%, #ec4899 65%, #f59e0b 100%)",
      color: "#fff",
      padding: "22px 28px",
    },
    sectionLabel: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#f97316",
      marginBottom: "8px",
    },
    sectionLabelWhite: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.82)",
      marginBottom: "8px",
    },
    sectionTitle: {
      fontSize: "40px",
      lineHeight: 1.1,
      fontWeight: 900,
      letterSpacing: "-0.03em",
      margin: 0,
    },
    sectionText: {
      fontSize: "16px",
      lineHeight: 1.9,
      color: "#3f3f46",
      margin: 0,
      maxWidth: "760px",
    },
    card: {
      marginTop: "22px",
      borderRadius: "24px",
      border: "1px solid #fed7aa",
      background: "linear-gradient(135deg, #fff7ed 0%, #fdf2f8 100%)",
      padding: "22px",
    },
    songGrid: {
      display: "grid",
      gap: "14px",
      marginTop: "18px",
    },
    songCard: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      border: "1px solid #e4e4e7",
      borderRadius: "24px",
      padding: "22px",
      background: "linear-gradient(90deg, #ffffff 0%, rgba(255,247,237,0.7) 100%)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    },
    songKicker: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#a1a1aa",
      marginBottom: "10px",
    },
    songTitle: {
      fontSize: "26px",
      lineHeight: 1.15,
      fontWeight: 900,
      margin: "0 0 10px",
    },
    songText: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.8,
      color: "#52525b",
    },
    songLink: {
      marginTop: "14px",
      display: "inline-block",
      color: "#f97316",
      fontWeight: 800,
      fontSize: "14px",
    },
    socialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "14px",
      marginTop: "18px",
    },
    socialCard: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      border: "1px solid #e4e4e7",
      borderRadius: "24px",
      padding: "20px",
      background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    },
    socialTitle: {
      margin: "0 0 8px",
      fontSize: "22px",
      fontWeight: 900,
    },
    footer: {
      textAlign: "center",
      fontSize: "12px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#a1a1aa",
      padding: "18px 0 8px",
      fontWeight: 700,
    },
  };

  return (
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
