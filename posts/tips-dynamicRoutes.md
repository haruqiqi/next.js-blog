---
title: 'Tips about Dynamic Routes'
date: '2023-02-24'
---

1 Fetch External API or Query Database
like getStaticProps getStaticPaths can fetch data from any data source.

```tsx
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('...');
  const posts = await res.json();
  return posts.map(post => ({params: {id: post.id}}))
}
```

2 Development vs. Production
  - in **development** `npm run dev` or `yarn dev`, `getStaticPaths` runs on every request.
  - In **production**, `getStaticPaths` runs at build time.

3 Fallback - fallback documentation.
`fallback: false`, result in 404 page.
`fallback: true`, `getStaticPaths` changes.
`fallback: blocking`

4 Catch-all Routes
extended `...` inside the barckets
```tsx
return [
  {
    params: {
      id: ['a', 'b', 'c']
    }
  }
]

export async function getStaticProps({params}) {
  // params.id will be like ['a', 'b', 'c']
}
```

5 Routers
import useRouter from 'next/router'

6 404 Pages
create `pages/404.js`
```tsx
export default function Custom404() {
  return <h1>404</h1>
}
```

