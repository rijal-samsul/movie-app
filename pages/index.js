import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <meta
        name="description"
        content="Getting Started With NextJS"
        key="desc"
      />
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

    </Layout>
  )
}