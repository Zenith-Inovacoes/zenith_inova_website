import TesteIcon from '@/assets/Icon/TesteIcon.svg'
import MainSection from '@/components/MainSection'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import Typography from '@/components/Typography'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Burger from '@/components/Burger'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Home/Contact'
import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'
import { UilChannel } from '@iconscout/react-unicons'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Zenith Inova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}