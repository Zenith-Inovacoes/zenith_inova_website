import MainSection from '@/components/Home/MainSection'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import Typography from '@/components/Typography'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Burger from '@/components/Burger'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Products from '@/components/Home/Products'
import Contact from '@/components/Home/Contact'
import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'
import { UilChannel } from '@iconscout/react-unicons'
import PartnersSection from '@/components/Home/PartnersSection'
import About from '@/components/Home/About'
import AcaiValleyLogo from '@/assets/Acai_Valley_Logo.png'
import CesupaLogo from '@/assets/CESUPA_LOGO_WHITE.png'
import ContaParaLogo from '@/assets/Conta_Para_Logo.png'
import EscritorioEngLogo from '@/assets/ESCRITORIO_DE_ENG_LOGO_WHITE.png'
import LPCTILogo from '@/assets/LPCTI_WHITE_LOGO_LAB.png'
import M3AutoLogo from '@/assets/M3_AUTO_LOGO.png'
import OnDroneLogo from '@/assets/ONDRONE_LOGO.png'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Zenith Inova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar open={open}>
        <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={128} />
        <Burger open={open} setOpen={setOpen} />
      </Navbar>
      <Menu open={open} setOpen={setOpen}/>
      <MainSection/>
      <PartnersSection title='Parceiros'>
        <Image src={AcaiValleyLogo} alt="Logo Açaí Valley"  height={68} />
        <Image src={CesupaLogo} alt="Logo CESUPA" width={162} height={68} />
        <Image src={ContaParaLogo} alt="Logo Açaí Valley" height={68} />
        <Image src={EscritorioEngLogo} alt="Logo CESUPA" width={162} height={68} />
        <Image src={LPCTILogo} alt="Logo Açaí Valley" width={162} height={68} />
        <Image src={M3AutoLogo} alt="Logo CESUPA" width={162} height={68} />
        <Image src={OnDroneLogo} alt="Logo CESUPA" width={162} height={68} />
      </PartnersSection>
      <About />
      <Products />
      <Contact />
    </>
  )
}