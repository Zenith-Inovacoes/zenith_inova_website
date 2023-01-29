import * as S from './styles'
import { NavbarProps } from './types'
import Typography from '../Typography'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { useEffect, useState } from 'react'

export default function Navbar({ children, open }: NavbarProps) {
    const [scrollPosition, setScrollposition] = useState(0)
    const [activeLink, setActiveLink] = useState(1)

    useEffect(() => {
        window.addEventListener("scroll", function () {
            setScrollposition(window.scrollY)
            // seeScroll(document.getElementById("main"), 1)
            // seeScroll(document.getElementById("about"), 3)
            // seeScroll(document.getElementById("products"), 4)
            // seeScroll(document.getElementById("contacts"), 5)
        })
    }, [])

    function scrollScreenTo(section: any) {
        window?.scroll({
            top: section?.offsetTop - 200,
            behavior: 'smooth',
        })
    }

    // function seeScroll(section: any, sectionNumber: number) {
    //     console.log(section?.offsetHeight)
    //     if(window?.scrollY >= section?.offsetTop - 200) {
    //         setActiveLink(sectionNumber)
    //     }
    // }

    return (
        <S.NavbarWrapper open={open} scrollPosition={scrollPosition}>
            {children}
            <S.NavbarItemsWrapper activeLink={activeLink}>
                <button onClick={() => scrollScreenTo(document.getElementById("main"))}>
                    <Typography size='small' fontWeight={300}>Home</Typography>
                </button>
                <button>
                    <Typography size='small' fontWeight={300}>Parceiros</Typography>
                </button>
                <button onClick={() => scrollScreenTo(document.getElementById("about"))}>
                    <Typography size='small' fontWeight={300}>Sobre nós</Typography>
                </button>
                <button onClick={() => scrollScreenTo(document.getElementById("products"))}>
                    <Typography size='small' fontWeight={300}>Produtos</Typography>
                </button>
                <button onClick={() => scrollScreenTo(document.getElementById("contacts"))}>
                    <Typography size='small' fontWeight={300}>Contato</Typography>
                </button>
            </S.NavbarItemsWrapper>
            <S.NavbarIconsWrapper>
                <a href="http://instagram.com/_u/zenith.inova/" rel="noreferrer" target="_blank">
                    <UilInstagram size="32" />
                </a>
                <a href={`https://wa.me/5591989661300?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20projetos%20da%20Zenith%20Inova%20!!!`} rel="noreferrer" target="_blank">
                    <UilWhatsapp size="32" />
                </a>
            </S.NavbarIconsWrapper>
        </S.NavbarWrapper>
    )
}