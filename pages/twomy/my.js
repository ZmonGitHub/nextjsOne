import Head from "next/head"

// import useSWR from 'swr'
// next专门用来获取数据的钩子，属于客户端渲染
// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export default function Twomy() {
    return (<div>
        <Head>我是my</Head>
    嘿嘿
    </div>)
}