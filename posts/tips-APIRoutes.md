---
title: 'Tips about API Routes'
date: '2023-02-24'
---

 1 Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`

 2 A Good Use Case: Handling Form Input

 ```tsx
 export default function handler(req, res) {
  const email = req.body.email；
  // Then save email to your databace, etc
 }
 ```

 3 Preview Mode

4 Dynamic API Routes

Which of the following is a good use case for an API Route
 saving incoming data to ur database
 securely communicating with a third-party API
 previewing draft content from ur CMS