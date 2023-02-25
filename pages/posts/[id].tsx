import Layout from "@/components/layout";
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

type PostDataType = {
 title: string;
 id: string;
 [k: string]: string;
}

//1 A React Component to render this page
export default function Post({postData}: {postData: PostDataType}) {
  return <Layout home={false}>
      <Head>
        <title> {postData.title} </title>
      </Head>
   
 <br/>
 {postData.id}
 <br/>

  <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date}/>
    </div>
    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
  </article>
  
  </Layout>
}
// 2 getStaticPaths which returns an array of possible values for id
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}
// 3 getStaticProps which fetches necessary data for the post with id
export async function getStaticProps({params}: {params:PostDataType }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}