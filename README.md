<div id="top"></div>

## 概要

リハサクの現在の[コーポレートサイト](https://rehasaku.net/)をリニューアルすることを目的とした、  
Next.js と microCMS を用いた Jamstack でのサイト構築プロジェクトです。

## 使用技術一覧

<p style="display: inline">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-000000?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-TypeScript-000000.svg?style=for-the-badge&logo=typescript&">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
</p>

## 目次

1. [環境](#環境)
2. [ディレクトリ構成](#ディレクトリ構成)
3. [開発環境構築](#開発環境構築)

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Next.js              | 14.1.0     |
| React                | ^18        |
| TypeScript           | ^5         |
| Tailwindcss          | ^3.3.0     |
| Node.js              | 20.11.1    |

その他のパッケージについては package.json を参照してください

## ディレクトリ構成

❯ tree -a -I "node_modules|.next|.git" -L 2
.
├── .env.local
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── public
│   └── images
│   ├── common
│   ├── recruit
│   ├── service
│   └── top
├── src
│   ├── app
│   │   ├── about
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── news
│   │   ├── page.tsx
│   │   ├── philosophy
│   │   ├── recruit
│   │   └── service
│   ├── components
│   │   ├── common
│   │   ├── organisms
│   │   ├── pages
│   │   └── templates
│   ├── lib
│   │   ├── const.ts
│   │   ├── date.ts
│   │   ├── font.ts
│   │   └── microcms.ts
│   ├── middleware.ts
│   └── pages
│   ├── about
│   ├── philosophy
│   ├── recruit
│   └── service
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock

## 開発環境構築

### 環境変数

[環境変数の一覧](#環境変数の一覧)を元に作成

.env.local
BASIC_USER
BASIC_PASSWORD
MICROCMS_SERVICE_DOMAIN
MICROCMS_API_KEY

### パッケージのインストール

```bash
npm
# or
yarn
```

### ローカルサーバーの起動

```bash
npm run dev
# or
yarn dev
```

### ビルド

```bash
npm run build
# or
yarn build
```

その他のスクリプトについては package.json を参照してください

### 動作確認

- ローカル環境  
  http://localhost:3000/ にアクセス
- 本番環境  
  https://rehasaku-corporate.vercel.app/ にアクセス

### 環境変数の一覧

| 変数名                  | 役割                        | 補足                               |
| ----------------------- | --------------------------- | ---------------------------------- |
| BASIC_USER              | Basic 認証時の id           | 本番リリース後、削除想定           |
| BASIC_PASSWORD          | Basic 認証時の password     | 本番リリース後、削除想定           |
| MICROCMS_SERVICE_DOMAIN | microCMS のサービスドメイン | テスト環境がないため全環境で共通   |
| MICROCMS_API_KEY        | microCMS の API KEY         | テスト環境がないため全環境で共通通 |

<p align="right">(<a href="#top">トップへ</a>)</p>
