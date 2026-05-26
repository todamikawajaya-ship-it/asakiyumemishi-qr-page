# ASAKIYUMEMISHI QR Page

Vercel Hobby + GA4 前提の、フライヤー限定ページ用 React / Vite プロジェクトです。

## 使い方

1. `.env.example` を参考に、Vercel の環境変数 `VITE_GA_MEASUREMENT_ID` に GA4 の測定IDを設定
2. GitHub にアップロード
3. Vercel で Import して Deploy

## ローカル起動

```bash
npm install
npm run dev
```

## 編集ポイント

- 曲リンク: `src/App.jsx` の `songs`
- SNSリンク: `src/App.jsx` の `socials`
- セトリ: `src/App.jsx` の `setlist`
- 次回ライブ情報: `src/App.jsx` の `next-live` セクション本文
