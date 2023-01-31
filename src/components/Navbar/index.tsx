import * as S from './styles'
import { NavbarProps } from './types'
import Typography from '../Typography'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { useEffect, useState } from 'react'
import { sections } from '@/model/sections'
import { scrollScreenTo, watchScroll } from '@/services/scroll'

export default function Navbar({ children, open, activeLink, scrollPosition }: NavbarProps) {
    return (
        <S.NavbarWrapper open={open} scrollPosition={scrollPosition}>
            {children}
            <S.NavbarItemsWrapper activeLink={activeLink}>
                {sections.map(({ section, location }) => (
                    <button key={section} onClick={() => scrollScreenTo(document.getElementById(location))}>
                        <Typography size='small' fontWeight={300}>
                            {section}
                        </Typography>
                    </button>
                ))}
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