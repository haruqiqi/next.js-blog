import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostedData() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData  = fileNames.map(fileName => {
    const  id = fileName.replace(/\.md$/, '');  

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    }
  })               

  return allPostsData.sort((a,b) => {
    if(a.date < b.date){
      return 1;
    } else {
      return -1;
    }
  })
  // const allPostsData =
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileNames => ({params: {id: fileNames.replace(/\.md$/,'')}}))
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // use remark to covert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml  = processedContent.toString()


  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}