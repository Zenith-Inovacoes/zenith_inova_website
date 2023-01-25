import * as S from './styles'
import { NavbarProps } from './types'
import Typography from '../Typography'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'

export default function Navbar({ children, open }: NavbarProps) {
    return (
        <S.NavbarWrapper open={open}>
            {children}
            <S.NavbarItemsWrapper>
                <a href="#Teste">
                    <Typography size='small' fontWeight={300}>Home</Typography>
                </a>
                <a href="#">
                    <Typography size='small' fontWeight={300}>Sobre nós</Typography>
                </a>
                <a href="#">
                    <Typography size='small' fontWeight={300}>Produtos</Typography>
                </a>
                <a href="#">
                    <Typography size='small' fontWeight={300}>Equipe</Typography>
                </a>
                <a href="#">
                    <Typography size='small' fontWeight={300}>Contato</Typography>
                </a>
            </S.NavbarItemsWrapper>
            <S.NavbarIconsWrapper>
                <a href="http://instagram.com/_u/zenith.inova/" rel="noreferrer" target="_blank">
                    <UilInstagram size="32"/>
                </a>
                <a href={`https://wa.me/5591989661300?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20projetos%20da%20Zenith%20Inova%20!!!`} rel="noreferrer" target="_blank">
                    <UilWhatsapp size="32"/>
                </a>
            </S.NavbarIconsWrapper>
        </S.NavbarWrapper>
    )
}