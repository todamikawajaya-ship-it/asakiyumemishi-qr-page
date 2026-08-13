import logo from './assets/logo.png'

export default function AsakiyumemishiQrLandingPage() {
  const links = {
    hshMv: 'https://www.youtube.com/watch?v=xaRBUh6sFl8',
    hshStream: 'https://linkcloud.mu/18a4d633',
    apple: 'https://music.apple.com/jp/playlist/j-rock-new-star/pl.3dd0e103191445d08a2f967a791fe44c',
    spotify: 'https://open.spotify.com/playlist/2Hj9QpT2J1KNnafuAu88LS',
    youtubeMusic: 'https://music.youtube.com/playlist?list=RDCLAK5uy_kPg2TV0-JyQhvB-uciA1_WNUELIv6vKGk',
    drive: 'https://drive.google.com/drive/folders/1jdgIG6OTmzWQozvAVY_WOHsfOzQtgDHH?usp=drive_link',
    asakiyumemishi: 'https://www.youtube.com/watch?v=PcIzbDVqys8&list=RDPcIzbDVqys8&start_radio=1',
    shogeki: 'https://www.youtube.com/watch?v=isg9fBgeHp8',
    instagram: 'https://www.instagram.com/aym0716band/',
    x: 'https://x.com/AYM0716BAND',
    youtube: 'https://www.youtube.com/@AYM0716BAND',
    tiktok: 'https://www.tiktok.com/@aym0716band',
    official: 'https://asakiyumemishi.ryzm.jp/',
    live: 'https://asakiyumemishi.ryzm.jp/news/0e715bdb-1c41-458b-bd43-aac4fcb2eb12',
    playlistNews: 'https://asakiyumemishi.ryzm.jp/news/eb563477-3106-424f-9c02-cf21c81cfee4',
    awaNews: 'https://asakiyumemishi.ryzm.jp/news/9066bdc8-59b8-4e67-bfe8-73a690c4d0dc',
    radioNews: 'https://asakiyumemishi.ryzm.jp/medianews/b89169df-4648-4dcf-abd9-913791bddf2f',
  }

  const track = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  }

  const trackedHref = (eventName, href, params = {}) => ({
    href,
    target: '_blank',
    rel: 'noreferrer',
    onClick: () => track(eventName, { destination: href, ...params }),
  })

  const songs = [
    {
      title: 'Home Sweet Home',
      description: '今のASAKIYUMEMISHIを知るなら、まずこの1曲。男女ボーカルと、まっすぐで温かなメロディが重なる最新曲。',
      href: links.hshMv,
      event: 'click_mv',
      cardClass: 'song-hsh',
      label: 'LATEST / Track 01',
    },
    {
      title: 'アサキユメミシ',
      description: 'バンド名を冠した、ASAKIYUMEMISHIの核と空気感をまっすぐ感じられる1曲。',
      href: links.asakiyumemishi,
      event: 'click_song',
      cardClass: 'song-aym',
      label: 'Track 02',
    },
    {
      title: 'ショウゲキノカラ',
      description: 'ライブの熱量と勢いを感じてほしい、ASAKIYUMEMISHIの代表曲。',
      href: links.shogeki,
      event: 'click_song',
      cardClass: 'song-shogeki',
      label: 'Track 03',
    },
  ]

  const topics = [
    { icon: '🏆', title: '水都音楽祭2026 FINAL', text: 'オンラインオーディション、いよいよFINALへ。' },
    { icon: '🎧', title: '公式プレイリスト掲載', text: 'Apple Music / YouTube Music / Spotifyに「Home Sweet Home」が掲載。', href: links.playlistNews },
    { icon: '✨', title: 'AWA公式 2プレイリスト', text: 'J-ROCK・邦楽の新着曲プレイリストに同時掲載。', href: links.awaNews },
    { icon: '📻', title: 'ZIP-FM「FIND OUT」', text: '「Home Sweet Home」をオンエア＆MVも紹介していただきました。', href: links.radioNews },
  ]

  const socials = [
    { name: 'Instagram', href: links.instagram, event: 'click_instagram', note: '写真・動画・ライブ情報' },
    { name: 'YouTube', href: links.youtube, event: 'click_youtube', note: 'MV・Shorts' },
    { name: 'TikTok', href: links.tiktok, event: 'click_tiktok', note: 'ショート動画' },
    { name: 'X', href: links.x, event: 'click_x', note: '最新のお知らせ' },
    { name: 'Official Site', href: links.official, event: 'click_official', note: 'NEWS・LIVE・GOODS' },
  ]

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a { -webkit-tap-highlight-color: transparent; }
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg,#ecfeff 0%,#fff 28%,#fff7ed 68%,#f8fafc 100%);
          color:#18181b;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Kaku Gothic ProN","Yu Gothic",Meiryo,sans-serif;
        }
        .wrap { max-width: 860px; margin: 0 auto; padding: 14px 12px 36px; }
        .surface { background: rgba(255,255,255,.96); border:1px solid rgba(148,163,184,.22); border-radius:26px; box-shadow:0 18px 46px rgba(15,23,42,.07); }
        .hero { position:relative; overflow:hidden; padding:18px; border-color:rgba(34,211,238,.3); }
        .hero:before { content:""; position:absolute; inset:0; background:radial-gradient(circle at 100% 0%,rgba(34,211,238,.18),transparent 34%),radial-gradient(circle at 0% 45%,rgba(249,115,22,.16),transparent 32%); pointer-events:none; }
        .hero > * { position:relative; z-index:1; }
        .nav { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:14px; }
        .nav a { padding:7px 10px; border-radius:999px; background:rgba(255,255,255,.78); border:1px solid #e4e4e7; color:#52525b; text-decoration:none; font-size:10px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .logo { width:100%; max-width:620px; display:block; margin:4px auto 10px; filter:drop-shadow(0 8px 18px rgba(0,0,0,.08)); }
        .hero-title { margin:12px 0 6px; font-size:30px; line-height:1.08; font-weight:900; letter-spacing:-.04em; }
        .lead { margin:0; color:#3f3f46; font-size:15px; line-height:1.8; }
        .cta-stack { display:grid; gap:10px; margin-top:18px; }
        .btn { min-height:54px; display:flex; align-items:center; justify-content:center; text-decoration:none; border-radius:18px; padding:14px 17px; font-weight:900; font-size:15px; text-align:center; transition:transform .16s ease, box-shadow .16s ease; }
        .btn:active { transform:scale(.98); }
        .btn-main { color:#fff; background:linear-gradient(90deg,#f97316 0%,#fb7185 100%); box-shadow:0 14px 30px rgba(249,115,22,.22); }
        .btn-cyan { color:#fff; background:linear-gradient(90deg,#06b6d4 0%,#38bdf8 100%); box-shadow:0 14px 30px rgba(6,182,212,.2); }
        .btn-soft { color:#18181b; background:#fff; border:1px solid #d4d4d8; }
        .section { margin-top:16px; padding:20px; }
        .kicker { margin-bottom:7px; color:#0891b2; font-size:11px; font-weight:900; letter-spacing:.2em; text-transform:uppercase; }
        .h2 { margin:0; font-size:30px; line-height:1.08; font-weight:900; letter-spacing:-.04em; }
        .text { margin:10px 0 0; color:#52525b; font-size:15px; line-height:1.85; }
        .release { overflow:hidden; margin-top:16px; border:1px solid #fed7aa; }
        .release-visual { aspect-ratio:16/9; overflow:hidden; background:#111827; }
        .release-visual img { width:100%; height:100%; object-fit:cover; display:block; }
        .release-body { padding:20px; }
        .release-title { margin:3px 0 0; font-size:31px; line-height:1.05; font-weight:950; letter-spacing:-.04em; }
        .chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:14px; }
        .chip { display:inline-flex; min-height:40px; align-items:center; padding:9px 12px; border-radius:999px; text-decoration:none; font-size:13px; font-weight:850; border:1px solid #e4e4e7; background:#fff; color:#27272a; }
        .limited { margin-top:16px; overflow:hidden; border:1px solid rgba(34,211,238,.3); }
        .limited-head { padding:18px 20px; color:#fff; background:linear-gradient(90deg,#06b6d4 0%,#38bdf8 52%,#f97316 100%); }
        .limited-head .kicker { color:rgba(255,255,255,.86); }
        .limited-body { padding:20px; }
        .song-grid { display:grid; gap:12px; margin-top:16px; }
        .song { display:block; padding:18px; border-radius:22px; text-decoration:none; color:inherit; box-shadow:0 10px 28px rgba(15,23,42,.05); transition:transform .16s ease; }
        .song:active { transform:scale(.985); }
        .song-hsh { border:1px solid #fed7aa; background:linear-gradient(180deg,#fff 0%,#fff7ed 100%); }
        .song-aym { border:1px solid #d9f99d; background:linear-gradient(180deg,#fff 0%,#f7fee7 100%); }
        .song-shogeki { border:1px solid #bae6fd; background:linear-gradient(180deg,#fff 0%,#f0f9ff 100%); }
        .song-label { font-size:11px; font-weight:900; letter-spacing:.18em; text-transform:uppercase; color:#71717a; }
        .song-name { margin:7px 0 7px; font-size:24px; font-weight:950; line-height:1.08; }
        .song-action { display:inline-flex; margin-top:13px; padding:9px 13px; border-radius:999px; font-size:13px; font-weight:900; }
        .song-hsh .song-action { background:#ffedd5; color:#c2410c; }
        .song-aym .song-action { background:#ecfccb; color:#4d7c0f; }
        .song-shogeki .song-action { background:#e0f2fe; color:#0369a1; }
        .topics { display:grid; gap:10px; margin-top:16px; }
        .topic { display:block; padding:16px; border-radius:20px; border:1px solid #e4e4e7; background:linear-gradient(135deg,#fff,#f8fafc); color:inherit; text-decoration:none; }
        .topic-row { display:flex; gap:12px; align-items:flex-start; }
        .topic-icon { font-size:23px; line-height:1; }
        .topic-title { margin:0; font-size:16px; font-weight:900; }
        .topic-text { margin:4px 0 0; color:#52525b; font-size:13px; line-height:1.6; }
        .live { margin-top:16px; padding:20px; border:1px solid #fdba74; background:linear-gradient(135deg,#fff7ed 0%,#fff 48%,#ecfeff 100%); }
        .live-badge { display:inline-flex; padding:7px 10px; border-radius:999px; background:#18181b; color:#fff; font-size:11px; font-weight:900; letter-spacing:.12em; }
        .live-date { margin-top:14px; color:#ea580c; font-size:18px; font-weight:950; }
        .live-title { margin:5px 0 0; font-size:30px; font-weight:950; line-height:1.06; }
        .live-tour { margin:7px 0 0; color:#3f3f46; font-size:17px; font-weight:850; line-height:1.5; }
        .live-meta { margin-top:13px; padding-top:13px; border-top:1px dashed #d4d4d8; color:#52525b; font-size:13px; line-height:1.8; }
        .socials { display:grid; gap:10px; margin-top:16px; grid-template-columns:repeat(2,minmax(0,1fr)); }
        .social { padding:15px; border-radius:19px; border:1px solid #e4e4e7; text-decoration:none; color:#18181b; background:#fff; }
        .social strong { display:block; font-size:16px; }
        .social span { display:block; margin-top:3px; color:#71717a; font-size:11px; line-height:1.4; }
        .footer { padding:25px 8px 6px; text-align:center; color:#71717a; }
        .footer-main { margin:0 0 8px; color:#18181b; font-size:18px; font-weight:900; }
        .footer-sub { margin:0; font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
        @media(min-width:720px){
          .wrap{padding:24px 20px 46px}.hero{padding:28px}.cta-stack{grid-template-columns:1fr 1fr}.section,.limited-body{padding:28px}.limited-head{padding:22px 28px}.song-grid{grid-template-columns:repeat(3,1fr)}.topics{grid-template-columns:repeat(2,1fr)}.socials{grid-template-columns:repeat(5,1fr)}.hero-title{font-size:38px}.h2{font-size:38px}
        }
      `}</style>

      <div className="page">
        <main className="wrap">
          <header className="surface hero">
            <nav className="nav">
              <a href="#home-sweet-home">HSH</a>
              <a href="#limited">Limited</a>
              <a href="#music">3 Songs</a>
              <a href="#topics">Topics</a>
              <a href="#next-live">Next Live</a>
            </nav>
            <img className="logo" src={logo} alt="ASAKIYUMEMISHI" />
            <h1 className="hero-title">ライブ、ありがとうございました！</h1>
            <p className="lead">今日出会ってくれてありがとうございます。まずは最新MV、そして会場限定コンテンツをお楽しみください。</p>
            <div className="cta-stack">
              <a className="btn btn-main" {...trackedHref('click_mv', links.hshMv, { content: 'hero' })}>▶ Home Sweet Home MVを見る</a>
              <a className="btn btn-cyan" href="#limited" onClick={() => track('click_limited_anchor', { content: 'hero' })}>🎁 会場限定コンテンツを見る</a>
            </div>
          </header>

          <section id="home-sweet-home" className="surface release">
            <div className="release-visual">
              <img src="https://img.youtube.com/vi/xaRBUh6sFl8/hqdefault.jpg" alt="Home Sweet Home Music Video" />
            </div>
            <div className="release-body">
              <div className="kicker">New Single / Home Sweet Home</div>
              <h2 className="release-title">今のASAKIYUMEMISHIを、まずこの曲から。</h2>
              <p className="text">“帰る場所”をテーマに、大切な人や居場所への想いを力強くも温かなサウンドで描いた最新曲です。</p>
              <div className="cta-stack">
                <a className="btn btn-main" {...trackedHref('click_mv', links.hshMv, { content: 'hsh_section' })}>▶ MVを見る</a>
                <a className="btn btn-soft" {...trackedHref('click_streaming', links.hshStream, { platform: 'all_streaming' })}>🎧 配信で聴く</a>
              </div>
              <div className="chips">
                <a className="chip" {...trackedHref('click_streaming', links.apple, { platform: 'apple_music' })}>Apple Music</a>
                <a className="chip" {...trackedHref('click_streaming', links.spotify, { platform: 'spotify' })}>Spotify</a>
                <a className="chip" {...trackedHref('click_streaming', links.youtubeMusic, { platform: 'youtube_music' })}>YouTube Music</a>
              </div>
            </div>
          </section>

          <section id="limited" className="surface limited">
            <div className="limited-head">
              <div className="kicker">Limited Benefit</div>
              <h2 className="h2">会場限定コンテンツ</h2>
            </div>
            <div className="limited-body">
              <p className="text" style={{ marginTop: 0 }}>ライブ写真とセットリストをまとめました！下のボタンから見られます。</p>
              <div className="cta-stack">
                <a className="btn btn-cyan" {...trackedHref('click_drive', links.drive)}>限定コンテンツを見る！</a>
              </div>
            </div>
          </section>

          <section id="music" className="surface section">
            <div className="kicker">3 Songs</div>
            <h2 className="h2">はじめましての方へ。まずはこの3曲。</h2>
            <div className="song-grid">
              {songs.map((song) => (
                <a
                  key={song.title}
                  className={`song ${song.cardClass}`}
                  {...trackedHref(song.event, song.href, { song: song.title, content: 'featured_song' })}
                >
                  <div className="song-label">{song.label}</div>
                  <h3 className="song-name">{song.title}</h3>
                  <p className="text" style={{ marginTop: 0 }}>{song.description}</p>
                  <span className="song-action">聴いてみる →</span>
                </a>
              ))}
            </div>
          </section>

          <section id="topics" className="surface section">
            <div className="kicker">Now Topics</div>
            <h2 className="h2">いま、こんな感じです。</h2>
            <div className="topics">
              {topics.map((topic) => {
                const content = (
                  <div className="topic-row">
                    <div className="topic-icon">{topic.icon}</div>
                    <div>
                      <h3 className="topic-title">{topic.title}</h3>
                      <p className="topic-text">{topic.text}</p>
                    </div>
                  </div>
                )
                return topic.href ? (
                  <a key={topic.title} className="topic" {...trackedHref('click_topic', topic.href, { topic: topic.title })}>{content}</a>
                ) : (
                  <div key={topic.title} className="topic">{content}</div>
                )
              })}
            </div>
          </section>

          <section id="next-live" className="surface section">
            <div className="kicker">Next Recommended Live</div>
            <h2 className="h2">次に観るなら、この日。</h2>
            <div className="live">
              <span className="live-badge">SPECIAL LIVE</span>
              <div className="live-date">2026.10.11 SUN</div>
              <h3 className="live-title">豊橋club KNOT</h3>
              <p className="live-tour">SABOTEN「Dessert in Desert」TOUR</p>
              <div className="live-meta">OPEN 17:00 / START 17:30<br />出演：SABOTEN / LOOSELY / THE BOOGIE JACK / ASAKIYUMEMISHI</div>
              <div className="cta-stack">
                <a className="btn btn-main" {...trackedHref('click_live', links.live, { live_date: '2026-10-11', venue: '豊橋club KNOT' })}>🎸 公演詳細を見る</a>
              </div>
            </div>
          </section>

          <section id="follow" className="surface section">
            <div className="kicker">Follow</div>
            <h2 className="h2">また見つけてもらえるように。</h2>
            <p className="text">気になった場所から、ゆるく追ってもらえたら嬉しいです。</p>
            <div className="socials">
              {socials.map((social) => (
                <a key={social.name} className="social" {...trackedHref(social.event, social.href, { platform: social.name })}>
                  <strong>{social.name}</strong>
                  <span>{social.note}</span>
                </a>
              ))}
            </div>
          </section>

          <footer className="footer">
            <p className="footer-main">またライブハウスでお会いしましょう！</p>
            <p className="footer-sub">© 2026 ASAKIYUMEMISHI / Flyer Limited Page</p>
          </footer>
        </main>
      </div>
    </>
  )
}
