---
title: 'tips about getStaticProps'
date: '2020-01-02'
---

fetch data from other sources, like an external API endpoint
```ts
export async function getSortedPostsData() {
  const res  = await fetch(`...`);
  return res.json();
}
```

query database directly
```ts
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  return databaseClient.query(`SELECT posts..`)
}
```

Development vs. Production

Only Allowed in a Page

What If I Need to Fetch Data at Request Time?
Server-side Rendering

Where does getStaticProps run?
Server-side