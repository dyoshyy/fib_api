# プロジェクト構成

## ソースコード(`src/`)

- `__test__/`:
  - Jest を使用した単体テストのコードを格納
  - app.cases にテストケースのデータ、app.test にテストを実行するコードを記述
- `funcs/`:
  - アプリケーション内で使う関数を格納
  - 今回はフィボナッチ数を計算する関数を格納
    - メモリ再帰を使用し、計算量を削減
- `router/`:
  - 各ルーターのコードを格納
  - 今回は`/`と`/fib`の 2 つのルーターを実装
- `validations/`:
  - バリデーションスキーマを格納
  - 今回は`/fib`のクエリーパラメータのバリデーションスキーマを実装

## 設定ファイル

- `biome.json`: Biome の設定ファイルです。インポートの整理、リンター、フォーマッターの設定を記述
- `jest.config.js`: Jest の設定を格納
- `package.json`: プロジェクトの依存関係とスクリプトを定義
- `.github/workflows/deploy.yaml`: GitHub Actions のデプロイ設定を記述
  - デプロイ先には cloudflare workers を使用しており、main ブランチに push された際に自動でテストを実行し、デプロイを行う

## スクリプト

- `bun install`: 依存関係をインストールします。
- `bun run dev`: 開発サーバーを起動します。
- `bun run test`: Jest を使用してテストを実行します。
- `bun run deploy`: プロジェクトをデプロイします。
