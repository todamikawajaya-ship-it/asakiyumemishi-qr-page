export default function AsakiyumemishiQrLandingPage() {
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

  const limitedContentHref = "https://drive.google.com/drive/folders/1jdgIG6OTmzWQozvAVY_WOHsfOzQtgDHH?usp=drive_link";

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

  const setlist = [
    "SE",
    "ショウゲキノカラ",
    "SUPER NOTHING",
    "Epic Summer",
    "Andromeda",
    "Footsteps",
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-2xl px-5 py-8 sm:px-8">
        <header className="border-b border-black pb-6">
          <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium tracking-[0.22em] text-zinc-600 uppercase">
            <a href="https://asakiyumemishi.ryzm.jp/" className="hover:opacity-60">Home</a>
            <a href="#benefit" className="hover:opacity-60">Limited</a>
            <a href="#songs" className="hover:opacity-60">Music</a>
            <a href="#next-live" className="hover:opacity-60">Next Live</a>
            <a href="#follow" className="hover:opacity-60">Follow</a>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Flyer Limited Page
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ASAKIYUMEMISHI
            </h1>
            <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              フライヤーを受け取ってくれてありがとうございます。
              このページは、ライブ会場で出会ってくれた方のための限定ページです。
              まず知ってほしい曲と、今日のセットリスト、次に来るならおすすめの日をまとめました。
            </p>
          </div>
        </header>

        <main className="space-y-12 py-8">
          <section id="benefit" className="border-b border-zinc-200 pb-10">
            <div className="mb-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Limited Benefit</p>
              <h2 className="text-2xl font-semibold">会場限定コンテンツ</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              ライブ写真とセットリストをまとめました。
              下のボタンから見られます。
            </p>

            <div className="mt-6 border border-black p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Limited Contents</p>
              <p className="mt-4 text-sm leading-7 text-zinc-700 sm:text-[15px]">
                Google Drive上で、会場限定コンテンツをまとめて公開しています。
              </p>
              <a
                href={limitedContentHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block border border-black px-4 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                限定コンテンツを見る！
              </a>
            </div>
          </section>

          <section id="songs" className="border-b border-zinc-200 pb-10">
            <div className="mb-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Music</p>
              <h2 className="text-2xl font-semibold">はじめましての方へ。まずはここから。</h2>
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                初めての方にも入りやすいように、まず触れてほしい3曲を置きました。
              </p>
            </div>

            <div className="space-y-4">
              {songs.map((song) => (
                <a
                  key={song.title}
                  href={song.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-zinc-300 p-5 transition hover:border-black"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Track</p>
                  <h3 className="mt-2 text-xl font-semibold">{song.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-[15px]">{song.description}</p>
                  <p className="mt-4 text-sm font-medium">聴いてみる →</p>
                </a>
              ))}
            </div>
          </section>

          <section className="border-b border-zinc-200 pb-10">
            <div className="mb-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">About</p>
              <h2 className="text-2xl font-semibold">ASAKIYUMEMISHIについて</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              愛知・三河発の4ピースバンド。衝動、哀しさ、熱量、まっすぐさを、ライブハウスの距離感で鳴らしています。
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              公式サイトでは、NEWS、LIVE、BIOGRAPHY、DISCOGRAPHY、MOVIE などが整理されており、この限定ページもその流れに沿って、シンプルに情報をまとめています。
            </p>
          </section>

          <section id="next-live" className="border-b border-zinc-200 pb-10">
            <div className="mb-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Next Live</p>
              <h2 className="text-2xl font-semibold">次に来るならこの日がおすすめです</h2>
            </div>
            <div className="border border-black p-5 sm:p-6">
              <p className="text-sm text-zinc-600">2026/05/29 (Fri)</p>
              <h3 className="mt-2 text-xl font-semibold">名古屋 栄R.A.D</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                公式サイトのLIVE SCHEDULEにも掲載されている次回公演のひとつです。気になった方がもう一度観に来る入口として案内しやすい日です。
              </p>
              <a
                href="https://asakiyumemishi.ryzm.jp/live"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block border border-black px-4 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                LIVE情報を見る
              </a>
            </div>
          </section>

          <section id="follow" className="pb-4">
            <div className="mb-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Follow</p>
              <h2 className="text-2xl font-semibold">気になったら、まずはここから</h2>
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                いちばん追いやすい入口を置いています。まずはInstagramか公式サイトからどうぞ。
              </p>
            </div>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-zinc-300 p-5 transition hover:border-black"
                >
                  <h3 className="text-lg font-semibold">{social.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700 sm:text-[15px]">{social.description}</p>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-black pt-6 text-xs uppercase tracking-[0.22em] text-zinc-500">
          © 2026 ASAKIYUMEMISHI / Flyer Limited Page
        </footer>
      </div>
    </div>
  );
}
