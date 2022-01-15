import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../components/date";
import utilStyles from "../../styles/utils.module.css";
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <br />
        {postData.id}
        <br />
        {/* {postData.date} */}
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date}></Date>
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(1,paths)
  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }
// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//    // Add the "await" keyword like this:
//    const postData = await getPostData(params.id)
//    // ...
// }

export async function getStaticProps({ params }) {
    console.log(2,params)
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
