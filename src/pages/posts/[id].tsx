import Layout from "src/components/layout";
import { getAllPostIds, getPostData } from "src/lib/posts";
import Head from "next/head";
import Date from 'src/components/molecules/date/date'
import utilStyles from 'src/styles/utils.module.scss'
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({
    postData
}: { 
    postData: {
        title: string,
        date: string,
        contentHtml: string
    }
 }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}