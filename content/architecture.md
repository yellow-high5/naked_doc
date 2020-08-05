---
title: 'しくみについて'
metaTitle: 'Naked Doc | しくみについて'
metaDescription: 'Naked Docのしくみについて解説します。'
---

# 概要

ドキュメントのページはすべて Markdown ファイルで書かれ、「content フォルダ」の中ですべて管理しています。  
Naked Doc はそれらの Markdown ファイルのデータソースを [GraphQL](https://graphql.org/) で取得して、React コンポーネントに表示させます。よって、**ドキュメントの変更管理は「content フォルダ」のみで完結**することができます。  
ドキュメントの設定や仕様を変更する場合は「config.ts」を編集することで柔軟に対応します。

![image](https://user-images.githubusercontent.com/14067398/89377824-8d290f80-d72d-11ea-8044-e501dee15566.png)

最後にビルド実行により、静的ページの作成が可能で、この静的ページを Web サーバーに配置することができます。
