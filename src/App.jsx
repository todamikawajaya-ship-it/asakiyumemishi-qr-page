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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50 text-zinc-900">
      <div className="mx-auto max-w-2xl px-5 py-6 sm:px-8 sm:py-8">
        <header className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_left,rgba(236,72,153,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_28%)]" />
          <div className="relative p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              <a href="https://asakiyumemishi.ryzm.jp/" className="transition hover:text-orange-500">Home</a>
              <a href="#benefit" className="transition hover:text-orange-500">Limited</a>
              <a href="#songs" className="transition hover:text-orange-500">Music</a>
              <a href="#next-live" className="transition hover:text-orange-500">Next Live</a>
              <a href="#follow" className="transition hover:text-orange-500">Follow</a>
            </div>

            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">
                Flyer Limited Page
              </p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                ASAKIYUMEMISHI
              </h1>
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                フライヤーを受け取ってくれてありがとうございます。
                このページは、ライブ会場で出会ってくれた方のための限定ページです。
                気になった曲、次に来るならおすすめの日、そして会場限定コンテンツをまとめました。
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#benefit"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.01] hover:shadow-xl"
              >
                限定コンテンツを見る
              </a>
              <a
                href="#songs"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-orange-300 hover:text-orange-500"
              >
                まず聴いてほしい3曲へ
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-8 py-8">
          <section
            id="benefit"
            className="overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-amber-400 px-6 py-4 text-white sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Limited Benefit</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">会場限定コンテンツ</h2>
            </div>
            <div className="p-6 sm:p-8">
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                ライブ写真とセットリストをまとめました。
                下のボタンから見られます。
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-pink-50 to-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Special Contents</p>
                <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-[15px]">
                  当日の余韻をもう少し持ち帰ってもらえるように、会場限定でまとめています。
                </p>
                <a
                  href={limitedContentHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.01] hover:shadow-xl"
                >
                  限定コンテンツを見る！
                </a>
              </div>
            </div>
          </section>

          <section id="songs" className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="mb-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Music</p>
              <h2 className="text-2xl font-black sm:text-3xl">はじめましての方へ。まずはここから。</h2>
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                初めての方にも入りやすいように、まず触れてほしい3曲を置きました。
              </p>
            </div>

            <div className="grid gap-4">
              {songs.map((song, index) => (
                <a
                  key={song.title}
                  href={song.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.5rem] border border-zinc-200 bg-gradient-to-r from-white to-orange-50/40 p-5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
                    Track 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-black">{song.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-[15px]">{song.description}</p>
                  <p className="mt-4 text-sm font-bold text-orange-500 transition group-hover:translate-x-1">
                    聴いてみる →
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="mb-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">About</p>
              <h2 className="text-2xl font-black sm:text-3xl">ASAKIYUMEMISHIについて</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              愛知・三河発の4ピースバンド。衝動、哀しさ、熱量、まっすぐさを、ライブハウスの距離感で鳴らしています。
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
              この限定ページでは、初めて出会ってくれた方がもう一歩入りやすいように、入口をぎゅっとまとめています。
            </p>
          </section>

          <section id="next-live" className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="mb-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Next Live</p>
              <h2 className="text-2xl font-black sm:text-3xl">次に来るならこの日がおすすめです</h2>
            </div>
            <div className="rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-pink-50 p-5 sm:p-6">
              <p className="text-sm font-medium text-zinc-500">2026/05/29 (Fri)</p>
              <h3 className="mt-2 text-2xl font-black">名古屋 栄R.A.D</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                気になった方がもう一度観に来る入口として案内しやすい日です。ライブ情報は公式サイトでもまとめて見られます。
              </p>
              <a
                href="https://asakiyumemishi.ryzm.jp/live"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-zinc-900 transition hover:border-orange-300 hover:text-orange-500"
              >
                LIVE情報を見る
              </a>
            </div>
          </section>

          <section id="follow" className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="mb-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">Follow</p>
              <h2 className="text-2xl font-black sm:text-3xl">気になったら、まずはここから</h2>
              <p className="max-w-xl text-sm leading-7 text-zinc-700 sm:text-[15px]">
                いちばん追いやすい入口を置いています。まずはInstagramか公式サイトからどうぞ。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.5rem] border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-black">{social.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">{social.description}</p>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="pb-2 pt-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          © 2026 ASAKIYUMEMISHI / Flyer Limited Page
        </footer>
      </div>
    </div>
  );
}
