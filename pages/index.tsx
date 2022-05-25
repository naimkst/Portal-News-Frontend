import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <>
    <Hero/>
    <Blog />
   </>
  )
}

export default Home
