import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import { getAlltData } from '../service/posts'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ data }: any) => {
  return (
   <>
    <Hero data={ data }/>
    <Blog data={ data }/>
   </>
  )
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const data = await getAlltData();
//   console.log(context)
  return {
    props: { data },
  };
}

export default Home
