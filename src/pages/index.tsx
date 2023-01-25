import TesteIcon from '@/assets/Icon/TesteIcon.svg'
import MainSection from '@/components/MainSection'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import Typography from '@/components/Typography'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Burger from '@/components/Burger'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Zenith Inova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar open={open}>
        <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={128}/>
        <Burger open={open} setOpen={setOpen} />
      </Navbar>
      <Menu open={open} />
      {/* <MainSection /> */}
      <ProductCard.Root>
        <ProductCard.Icon>
          <Image alt="IconTeste" src={TesteIcon} />
        </ProductCard.Icon>
        <ProductCard.Text>
        <ProductCard.Title>
          <Typography level={4} fontWeight={700} color="white" size="normal">
            Omnia
          </Typography>
        </ProductCard.Title>
        <ProductCard.Description>
          <Typography level={4} fontWeight={100} color="white" size="normal">
            Lorem Ipsum ASnbsfbahsfsabfhbashfasshbfhas bfhas
          </Typography>
        </ProductCard.Description>
        </ProductCard.Text>
      </ProductCard.Root>
    </>
  )
}
