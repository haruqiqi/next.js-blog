---
title: 'Tips about Dynamic Routes'
date: '2023-02-24'
---

1 Fetch External API or Query Database

```tsx
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('...');
  const posts = await res.json();
  return posts.map(post => ({params: {id: post.id}}))
}