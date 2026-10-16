# ASAKIYUMEMISHI QR Limited Page v2.3

ライブ会場フライヤーQR用ランディングページ。

## v2.3 更新内容
- Home Sweet Home を最上位CTAに配置
- 会場限定Google Drive導線
- おすすめ3曲：Home Sweet Home / アサキユメミシ / ショウゲキノカラ
- NOW TOPICS追加
- おすすめライブ：2026/11/01 安城RADIO CLUB「FL▲G presents.『11 / 1 / 11』ANJO RADIO CLUB 11th ANNIVERSARY」。公式の個別ライブ詳細ページへ直接リンク
- 水都音楽祭2026を「出演済み・グランプリ獲得」に更新
- 2026/10/19 21:00〜 Mudia「sonar-u community」1時間生配信のトピックと公式イベントリンク
- スマホUI最適化
- GA4カスタムイベント計測

## GA4
Vercel Environment Variables に以下を設定してください。

- Key: `VITE_GA_MEASUREMENT_ID`
- Value: GA4の `G-XXXXXXXXXX`

現在使用中の測定IDを継続する場合、Vercel側の既存環境変数はそのままでOKです。

### 主なカスタムイベント
- `click_mv`
- `click_drive`
- `click_song`
- `click_streaming`
- `click_live`
- `click_instagram`
- `click_youtube`
- `click_tiktok`
- `click_x`
- `click_official`
- `click_topic`
- `click_sonar`
