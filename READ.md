# Quick Search

選択したテキストを **Alt+S** で即座にGoogle検索するChrome拡張機能。

---

## ファイル構成

```
quick-search/
├── quick-search-extension/        # 拡張機能本体（ZIPに含める）
│   ├── manifest.json
│   ├── background.js
│   └── icons/
│       ├── icon16.png
│       ├── icon32.png
│       ├── icon48.png
│       └── icon128.png
├── store-assets/                  # ストア申請用画像（ZIPに含めない）
│   ├── promotional-440x280.png    # scripts/create-promo.js で生成済み
│   └── screenshot-1280x800.png   # 手動キャプチャ（未作成）
├── docs/                          # GitHub Pages でホスト
│   ├── privacy-policy.html
│   └── store-listing.md           # ストア申請テキスト（コピペ用）
├── scripts/                       # ビルドツール
│   ├── icon.svg                   # アイコン元データ（SVG）
│   ├── create-icons.js            # SVG → PNG 変換スクリプト
│   ├── create-promo.js            # プロモ画像生成スクリプト
│   └── build.sh                   # ZIP パッケージングスクリプト
├── package.json
└── quick-search-v1.0.zip          # 申請用パッケージ（scripts/build.sh で生成）
```

---

## 開発・ビルド手順

### 初回セットアップ

```bash
npm install
```

### アイコン・画像の再生成

```bash
npm run create-icons   # quick-search-extension/icons/*.png を生成
npm run create-promo   # store-assets/promotional-440x280.png を生成
```

### 申請用 ZIP の作成

```bash
npm run build
# → quick-search-v1.0.zip が生成される
```

### ローカルでの動作確認

1. `chrome://extensions` を開く
2. 「デベロッパーモード」をオン
3. 「パッケージ化されていない拡張機能を読み込む」→ `quick-search-extension/` を選択
4. 任意のページでテキストを選択して **Alt+G** を押す

---

## Chrome Web Store 申請手順

### 事前準備チェックリスト

| 項目 | ファイル | 状態 |
|---|---|---|
| 拡張機能 ZIP | `quick-search-v1.0.zip` | ✅ `npm run build` で生成済み |
| アイコン 128px | `icons/icon128.png` | ✅ `npm run create-icons` で生成済み |
| プロモ画像 440×280 | `store-assets/promotional-440x280.png` | ✅ `npm run create-promo` で生成済み |
| スクリーンショット 1280×800 | `store-assets/screenshot-1280x800.png` | ⬜ 手動キャプチャ必要 |
| プライバシーポリシー URL | GitHub Pages URL | ⬜ GitHub Pages 公開後に確定 |
| 申請テキスト | `docs/store-listing.md` | ✅ 作成済み（URL差し替え必要） |
| 開発者登録料 $5 | Chrome Web Store Developer Dashboard | ⬜ 初回のみ支払い必要 |

### スクリーンショット撮影手順

1. Chrome で任意のページ（Wikipedia 等）を開き、テキストを選択した状態にする
2. Chrome DevTools を開き、レスポンシブモードで **1280×800** にリサイズ
3. DevTools の「...」メニュー → 「Capture screenshot」で保存
4. `store-assets/screenshot-1280x800.png` として配置

### GitHub Pages でプライバシーポリシーを公開

1. リポジトリを GitHub に push
2. GitHub リポジトリの Settings → Pages → Source を `main` ブランチの `/docs` フォルダに設定
3. 公開 URL: `https://<USERNAME>.github.io/quick-search/privacy-policy.html`
4. `docs/store-listing.md` と `docs/privacy-policy.html` 内の `<USERNAME>` を実際のユーザー名に置き換える

### Developer Dashboard での申請

1. [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) にアクセス
2. 初回のみ $5 の開発者登録料を支払い
3. 「新しいアイテム」→ `quick-search-v1.0.zip` をアップロード
4. `docs/store-listing.md` の内容を各フィールドに入力:
   - **Short description**: 99文字のキャッチコピー
   - **Detailed description**: 使い方・機能説明・権限説明
   - **Category**: Productivity
   - **Privacy policy URL**: GitHub Pages の URL
5. プロモ画像・スクリーンショットをアップロード
6. 「公開」→ 審査（通常 1〜3 営業日）

---

## バージョンアップ時の手順

1. `quick-search-extension/manifest.json` の `"version"` を更新
2. `scripts/build.sh` の `ZIP_NAME` を新バージョン名に変更
3. `npm run build` で新しい ZIP を生成
4. Developer Dashboard で「パッケージを更新」→ 新 ZIP をアップロード
