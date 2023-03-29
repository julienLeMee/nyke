import { NavbarUp } from '@/components/NavbarUp'
import { NavbarDown } from '@/components/NavbarDown'
import { Hero } from '@/components/Hero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>NYKE. | Nike clone with Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </Head>
      <NavbarUp />
      <NavbarDown />
      <Hero />
    </>
  )
}
