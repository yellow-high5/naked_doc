---
title: 設定
metaTitle: '設定 | Naked Doc'
metaDescription: 'ドキュメントの設定をする方法について解説します。'
---

Naked Doc はヘッダー、サイドバー、コンテンツの 3 つの要素で構成されています。
`config.ts` を編集することであなた好みのドキュメントにカスタマイズ可能です。

![image](https://user-images.githubusercontent.com/14067398/89377395-a8dfe600-d72c-11ea-9ab3-c230ef288fb2.png)

以下に主に設定する必要性の高い項目について紹介します。

# 1. ヘッダー

簡単にソーシャルリンクを設定することができます。 (ex: Github, Twitter...)

## ロゴ

`config.header.logo`にロゴの画像リンクをしてください

ロゴをクリックして、リンクへアクセスできるようにしたい場合は、`config.header.logoLink`を編集してください。

## 検索エンジン

使用するドキュメントの検索エンジンを選択できます。

### Lunr

チーム内部のみで公開する秘匿性の高いドキュメントの場合はこちらを推奨します。

`config.header.search`を**lunr**にするだけです。

### Algolia

検索エンジンのパフォーマンスを求めるのであればこちらを推奨します。ただし、事前に Algolia へユーザー登録しておく必要があります。

`config.header.search`に**algolia**を設定して、`.env`ファイルに Algolia API Keys を設定してください。ダッシュボードから取得できます。

その後、`npm run build`でドキュメントのデータを Algolia へプッシュするようにしてください。

# 2. サイドバー

ドキュメントのセクションの順序を制御する場合は、`config.sidebar.forcedNavOrder`を編集します。

セクションを折りたたむかどうかを制御する場合は、`config.sidebar.collapsedNav`を編集します。

# 3. マークダウンコンテント

ドキュメントを記述するマークダウンファイルを`content`フォルダに配置してください。

セクションを作成する場合は、`content`フォルダーにフォルダーを作成します。

## Edit this page ボタン

Naked Doc はドキュメントからソースリポジトリリンクにアクセスできる仕組みがあります。

`config.siteMetadata.docsLocation`にリポジトリの URL を設定してください。
