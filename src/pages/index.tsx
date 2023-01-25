import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Burger from '@/components/Burger'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Home/Contact'

import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Zenith Inova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Navbar open={open}>
        <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={128} />
        <Burger open={open} setOpen={setOpen} />
      </Navbar>
      <Menu open={open} /> */}
      <Contact />
    </>
  )
}
