import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, {siteTitle} from '@/components/layout'
import {getSortedPostedData} from '../lib/posts';
import Link from 'next/link';
import Date from '@/components/date';

export default function Home({allPostsData}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Haru]</p>
        <p>
        (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles['padding1px']}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>      
            <br />
            {id}
            <br/>
            <small className={utilStyles.lightText}>
              <Date dateString={date}/>
            </small>
          </li>)}
        </ul>
      </section>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostedData()

  return {
    props: {
      allPostsData,
    }
  }
}
