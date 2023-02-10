import * as React from "react"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter, Router } from 'next/router'
import Error from 'next/error'
import Layout, { Body, Footer, Header } from "./components/views/partial/layout";
import NewsDetaisShowData from './components/views/news/newsdetail'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })



const BASE_LINK = process.env.LINK_WEB

export default function GetNews({ errorCode, posts }) {
    if (!errorCode) {
        return <Error statusCode={errorCode} />
    }
    const router = useRouter()

    return (
        <>
            <Layout>
                <Head>
                    
                </Head>
                <Layout.Header></Layout.Header>
                <Layout.Body props={posts}>{posts[0].Title}</Layout.Body>
                <Layout.Footer></Layout.Footer>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {

    const request = await fetch(`http://localhost:3000/api/news/getall`)

    const news = await request.json()

    const paths = news.map((item) => ({
        params: { id: item.PostName },
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {



    const res = await fetch(`http://localhost:3000/api/news/${params.id}`)
    const errorCode = res == null ? false : true;
    const data = await res.json();
    return {
        props: {
            errorCode,
            posts: data,
        }
    }
}
