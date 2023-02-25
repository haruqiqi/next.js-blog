---
title: 'Tips about GetServerSideProps'
date: '2020-01-02'
---

Using getServerSideProps
```tsx
export async function  getServerSideProps(context) {
  return {
    props: {
      // props for the component
    }
  }
}
```

Client-side Rendering

SWR
```tsx
import useSWR from 'swr'

function Profile() {
  const {data error} = useSWR('/api/user', fetch);

  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>

  return <div>hello {data.name}</div>
}
```

When should you use Client-side rendering
when you need to fetch data at request time instead of buid time.

