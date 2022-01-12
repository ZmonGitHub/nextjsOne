import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout"
export default function First() {
  return (
    <Layout>
      呵呵
      <Head>
        <title>我是first-post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <Image src="/images/yellow.jfif" width="200px" height="200px"></Image>
    </Layout>
  );
}
