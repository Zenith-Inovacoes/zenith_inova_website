import MainSection from '@/components/Home/MainSection'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Burger from '@/components/Burger'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Products from '@/components/Home/Products'
import Contact from '@/components/Home/Contact'
import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'
import PartnersSection from '@/components/Home/PartnersSection'
import About from '@/components/Home/About'
import AcaiValleyLogo from '@/assets/Acai_Valley_Logo.png'
import CesupaLogo from '@/assets/CESUPA_LOGO_WHITE.png'
import ContaParaLogo from '@/assets/Conta_Para_Logo.png'
import EscritorioEngLogo from '@/assets/ESCRITORIO_DE_ENG_LOGO_WHITE.png'
import LPCTILogo from '@/assets/LPCTI_WHITE_LOGO_LAB.png'
import M3AutoLogo from '@/assets/M3_AUTO_LOGO.png'
import OnDroneLogo from '@/assets/ONDRONE_LOGO.png'
import { sections } from '@/model/sections'
import { watchScroll } from '@/services/scroll'

export default function Home() {
  const [activeLink, setActiveLink] = useState(1)
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollposition] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollposition(window.scrollY)
      sections.forEach(({ section, location }, index) => {
        watchScroll(document.getElementById(location), index + 1, setActiveLink)
      })
    })
  })

  return (
    <>
      <Head>
        <title>Zenith Inova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description"
          content="Essa é a página web e mobile da startup Zenith Inova, focada em inovações e soluções tecnológicas." />
        <meta name="author" content="Zenith Inova" />
        <meta name="keywords" content="Inovação, Design, Falken, Nexus, Omnia, Rai-Watch, Maya, Automação Residencial, Automação Comercial, Automação Industrial, Zenith Inova, Zenith, Inova, Startup, Empresa, Gestão, Negócios, Transformação Digital, Drone, Água, Monitoramento" />
      </Head>
      <Navbar open={open} activeLink={activeLink} scrollPosition={scrollPosition}>
        <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={128} />
        <Burger open={open} setOpen={setOpen} />
      </Navbar>
      <Menu open={open} setOpen={setOpen} activeLink={activeLink} />
      <MainSection />
      <PartnersSection title='Parceiros'>
        <Image src={AcaiValleyLogo} alt="Logo Açaí Valley" width={162} height={68} />
        <Image src={CesupaLogo} alt="Logo CESUPA" width={162} height={68} />
        <Image src={ContaParaLogo} alt="Logo Conta Pará" width={162} height={68} />
        <Image src={EscritorioEngLogo} alt="Logo Escritório de Engenharia" width={162} height={68} />
        <Image src={LPCTILogo} alt="Logo LPCTI" width={162} height={68} />
        <Image src={M3AutoLogo} alt="Logo M3" width={162} height={68} />
        <Image src={OnDroneLogo} alt="Logo Ondrone" width={162} height={68} />
      </PartnersSection>
      <About />
      <Products />
      <Contact />
    </>
  )
}