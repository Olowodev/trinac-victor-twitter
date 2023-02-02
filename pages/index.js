import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../containers/header/Header'
import Footer from '../containers/footer/Footer'
import About from '../containers/about/About'
import Services from '../containers/services/Services'
import Works from '../containers/work/Works'
import Intro from '../components/intro/Intro'
import { useState } from 'react'

export default function Home() {
  const [introOut, setIntroOut] = useState(false)
  const [offset, setOffset] = useState({
    top: '',
    left: ''
})
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro offset={offset} setIntroOut={setIntroOut} introOut={introOut} />
      <main className={styles.main}>
        <Header setOffset={setOffset} />
        <About />
        <Works />
        <Services />
        <Footer />
      </main>
    </div>
  )
}
