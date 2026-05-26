export default function App() {
  const songs = [
    {
      title: 'ショウゲキノカラ',
      description: 'ライブで引っかかった方に、まず触れてほしい代表的な1曲。',
      href: 'https://www.youtube.com/watch?v=isg9fBgeHp8',
    },
    {
      title: 'SUPER NOTHING',
      description: '深夜の焦燥と衝動をそのまま鳴らした最新リリース。',
      href: 'https://linkco.re/uV6N1M5U',
    },
    {
      title: 'Epic Summer',
      description: 'メロディと空気感から入りやすい、入口向きの1曲。',
      href: 'https://big-up.style/4L6g8LWrN2',
    },
  ]

  const socials = [
    {
      name: 'Instagram',
      description: 'ライブ情報、写真、動画を一番見やすく追える場所。',
      href: 'https://www.instagram.com/aym0716band/',
    },
    {
      name: 'X',
      description: '最新情報や日々の動きを早く追いたい方はこちら。',
      href: 'https://x.com/AYM0716BAND',
    },
    {
      name: 'Official Site',
      description: 'ライブ日程、ニュース、ディスコグラフィーをまとめて確認できます。',
      href: 'https://asakiyumemishi.ryzm.jp/',
    },
  ]

  const setlist = [
    'SE',
    'ショウゲキノカラ',
    'SUPER NOTHING',
    'Epic Summer',
    'Andromeda',
    'Footsteps',
  ]

  return (
    <div className="page-shell">
      <div className="container">
        <header className="site-header">
          <nav className="top-nav" aria-label="page navigation">
            <a href="https://asakiyumemishi.ryzm.jp/" target="_blank" rel="noreferrer">Home</a>
            <a href="#benefit">Limited</a>
            <a href="#songs">Music</a>
            <a href="#next-live">Next Live</a>
            <a href="#follow">Follow</a>
          </nav>

          <div className="hero-copy">
            <p className="eyebrow">Flyer Limited Page</p>
            <h1>ASAKIYUMEMISHI</h1>
            <p className="lead">
              フライヤーを受け取ってくれてありがとうございます。<br />
              このページは、ライブ会場で出会ってくれた方のための限定ページです。<br />
              まず知ってほしい曲と、今日のセットリスト、次に来るならおすすめの日をまとめました。
            </p>
          </div>
        </header>

        <main className="content-stack">
          <section id="benefit" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Limited Benefit</p>
              <h2>このページを見てくれた方限定</h2>
            </div>
            <p className="body-copy">
              フライヤーを受け取って、このページまで来てくれてありがとうございます。<br />
              今日のライブの余韻を少しでも持ち帰ってもらえたら嬉しいです。<br />
              このページでは、本日のセットリストを限定公開します。
            </p>

            <div className="outlined-box">
              <p className="eyebrow">Today&apos;s Setlist</p>
              <ol className="setlist-list">
                {setlist.map((item, index) => (
                  <li key={`${item}-${index}`}>
                    <span className="setlist-number">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p className="body-copy compact">
                気になった曲があれば、下のリンクからぜひもう一度聴いてみてください。
              </p>
            </div>
          </section>

          <section id="songs" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Music</p>
              <h2>はじめましての方へ。まずはここから。</h2>
              <p className="body-copy compact">
                初めての方にも入りやすいように、まず触れてほしい3曲を置きました。
              </p>
            </div>

            <div className="card-stack">
              {songs.map((song) => (
                <a
                  key={song.title}
                  href={song.href}
                  target="_blank"
                  rel="noreferrer"
                  className="info-card"
                >
                  <p className="eyebrow">Track</p>
                  <h3>{song.title}</h3>
                  <p className="body-copy compact">{song.description}</p>
                  <p className="cta-text">聴いてみる →</p>
                </a>
              ))}
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <p className="eyebrow">About</p>
              <h2>ASAKIYUMEMISHIについて</h2>
            </div>
            <p className="body-copy">
              愛知・三河発の4ピースバンド。衝動、哀しさ、熱量、まっすぐさを、ライブハウスの距離感で鳴らしています。
            </p>
            <p className="body-copy compact">
              公式サイトでは、NEWS、LIVE、BIOGRAPHY、DISCOGRAPHY、MOVIE などが整理されており、この限定ページもその流れに沿って、シンプルに情報をまとめています。
            </p>
          </section>

          <section id="next-live" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Next Live</p>
              <h2>次に来るならこの日がおすすめです</h2>
            </div>
            <div className="outlined-box">
              <p className="event-date">2026/05/29 (Fri)</p>
              <h3>名古屋 栄R.A.D</h3>
              <p className="body-copy compact">
                公式サイトのLIVE SCHEDULEにも掲載されている次回公演のひとつです。気になった方がもう一度観に来る入口として案内しやすい日です。
              </p>
              <a
                href="https://asakiyumemishi.ryzm.jp/live"
                target="_blank"
                rel="noreferrer"
                className="button-link"
              >
                LIVE情報を見る
              </a>
            </div>
          </section>

          <section id="follow" className="section-block follow-last">
            <div className="section-heading">
              <p className="eyebrow">Follow</p>
              <h2>気になったら、まずはここから</h2>
              <p className="body-copy compact">
                いちばん追いやすい入口を置いています。まずはInstagramか公式サイトからどうぞ。
              </p>
            </div>
            <div className="card-stack">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="info-card"
                >
                  <h3>{social.name}</h3>
                  <p className="body-copy compact">{social.description}</p>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="site-footer">© 2026 ASAKIYUMEMISHI / Flyer Limited Page</footer>
      </div>
    </div>
  )
}
