# ASAKIYUMEMISHI QRページ 公開手順書

## 1. ZIPを解凍する
- ダウンロードした ZIP をダブルクリック
- `asakiyumemishi-qr-page-official` フォルダができればOK

## 2. GitHubに新規リポジトリを作る
- GitHubにログイン
- 右上の `+` を押す
- `New repository` を押す
- Repository name に `asakiyumemishi-qr-page` と入れる
- `Public` を選ぶ
- 下の `Create repository` を押す

## 3. GitHubにファイルをアップする
- 新しくできたリポジトリ画面で `uploading an existing file` を押す
- さきほど解凍したフォルダの中身を全部ドラッグして入れる
  - `package.json`
  - `index.html`
  - `vite.config.js`
  - `.env.example`
  - `README.md`
  - `MANUAL_JA.md`
  - `src` フォルダ
- 画面下の `Commit changes` を押す

## 4. Vercelアカウントを作る
- Vercelにアクセス
- `Continue with GitHub` を押してログイン

## 5. Vercelでサイトを公開する
- Vercel のダッシュボードで `Add New...` → `Project`
- GitHub の一覧から `asakiyumemishi-qr-page` を探して `Import`
- そのまま `Deploy`
- 数十秒〜数分で公開URLが出る

## 6. GA4を作る
- Google Analytics にログイン
- 左下 `Admin`
- `Create` → `Property`
- Property名を `ASAKIYUMEMISHI QR Page` にする
- タイムゾーンを `Japan` にする
- 作成後 `Data Streams` → `Web`
- 測定ID `G-XXXXXXXXXX` を控える

## 7. VercelにGA4のIDを入れる
- Vercel のプロジェクト画面を開く
- `Settings` → `Environment Variables`
- `Add New`
- Name: `VITE_GA_MEASUREMENT_ID`
- Value: GA4 の `G-XXXXXXXXXX`
- `Save`

## 8. 再デプロイする
- Vercel の `Deployments` に行く
- 最新デプロイ右側のメニューから `Redeploy`

## 9. スマホで確認する
- 公開URLをスマホで開く
- Instagram や X を押してみる
- GA4 の `Realtime` でアクセスが来ているか確認する

## 10. 後で直したいとき
- GitHub の `src/App.jsx` を編集
- 保存すると、Vercel 側で再反映しやすい

