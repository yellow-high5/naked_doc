# Naked Doc

Naked Doc can be used for your projects and internal documents. You just set up a little bit and add markdown content.

Let's create your document!

![nake_logo_header](https://user-images.githubusercontent.com/14067398/83019721-63cf7180-a062-11ea-894f-3c3e9c5a566f.png)

↓Here is sample document

https://yellow-high5.github.io/naked_doc/

## How to Install

```sh
$ gatsby new [YOUR_DOCUMENT_NAME] https://github.com/yellow-high5/naked_doc
```

### Local Development

```sh
$ npm run start
```

## Configure

Naked Doc consists of three elements, header, sidebar, content.  
Edit the config.ts file and it will be your favorite document in no time.

![image](https://user-images.githubusercontent.com/14067398/84039554-5c05ba80-a9dc-11ea-9cc7-d250791b9b9d.png)

### 1. Header

You can embed any social link in the document header. (ex: Github, Twitter...)

#### Logo

You edit `config.header.logo` in config.ts

If you want the link to be accessible when you click on the logo, you edit `config.header.logoLink` in config.ts

#### Search Engine

##### [Lunr](https://lunrjs.com/)

Recommended if you want to create an internal document.

You just only edit `config.header.search`

##### [Algolia](https://www.algolia.com/)

Recommended if you want search performance. You must be registered for Algorlia in advance.

You edit `config.header.search` and describe `.env` file about Algolia API Keys. You can get API Keys from Algolia Dashboard.

After that, you should command `npm run build` to push document content data.

### 2. Sidebar

If you control the order of sections in the document, edit `config.sidebar.forcedNavOrder`.

If you want to control whether sections of the document are collapsed, edit `config.sidebar.collapsedNav`.

### 3. Markdown Content

Please put the markdown file that describes the document in the `content` folder.
If you want to create a section, create a folder in the `content` folder.

#### Edit this page

![image](https://user-images.githubusercontent.com/14067398/83247192-25f75800-a1de-11ea-9024-fafe4aa6c428.png)

Naked Doc can access source repository link from document, so you edit `config.siteMetadata.docsLocation` in config.ts.

#### React Component([MDX](https://mdxjs.com/))

MDX is a great format to embed JSX in Markdown and makes the document richer

You store the JSX component you want to insert in Markdown in `src/components/docParts` folder and import it with mdx to use it.

## Deploy

You check [Deploying and Hosting | GatsbyJS](https://www.gatsbyjs.org/docs/deploying-and-hosting/)

By default, it is set to deploy to Github pages.

```sh
$ npm run deploy
```

## PWA

You can add this document to mobile home screen.

![image](https://user-images.githubusercontent.com/14067398/86019345-707c2680-ba61-11ea-8497-a651a191109f.png)

## Thanks OSS and the Predecessor!

- [GatsbyJS](https://www.gatsbyjs.org/)
- [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter)

## Licence

- [MIT](https://opensource.org/licenses/MIT)
