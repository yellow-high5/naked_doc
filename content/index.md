---
title: 'Landing Page'
---

import YoutubeEmbed from "../src/components/docParts/YoutubeEmbed.tsx";
import CommunityAuthor from "../src/components/docParts/CommunityAuthor.tsx";

> Learn about GraphQL, how it works, and how to use it in this series of articles. Looking for documentation on how to build a GraphQL service? There are libraries to help you implement GraphQL in many different languages. For an in-depth learning experience with practical tutorials, visit the How to GraphQL fullstack tutorial website. We have also partnered with edX to create a free online course, Exploring GraphQL: A Query Language for APIs.

<YoutubeEmbed link="https://www.youtube.com/embed/8t0vNu2fCCM" />

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this:

```
type Query {
  me: User
}

type User {
  id: ID
  name: String
}
```

Along with functions for each field on each type:

```
function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```

Once a GraphQL service is running (typically at a URL on a web service), it can receive GraphQL queries to validate and execute. A received query is first checked to ensure it only refers to the types and fields defined, then runs the provided functions to produce a result.

For example the query:

```
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

Could produce the JSON result:

```
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

Learn more about GraphQL — the query language, type system, how the GraphQL service works, as well as best practices for using GraphQL in the articles written in this section; they help to solve common problems.

<CommunityAuthor name="mush" imageUrl="https://avatars1.githubusercontent.com/u/14067398?s=460&u=15e6d0d0748bbd767be178096a4fc6b85b344a44&v=4" githubUrl="https://github.com/yellow-high5" description="I'm Developer.
Actually, I just copied it based on hasura/gatsby-gitbook-starter😁" />
