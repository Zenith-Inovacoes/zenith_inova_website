import * as S from './styles';
import { MenuProps } from './types';
import Typography from '../Typography';
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'

export default function Menu({ open }: MenuProps) {
    return (
        <S.StyledMenu open={open}>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Home
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Parceiros
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Sobre nós
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Produtos
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Equipe
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledLinkMenu href="/" open={open}>
                <Typography level={1} size="xsmall">
                    Contato
                </Typography>
            </S.StyledLinkMenu>
            <S.StyledIconsMenu>
                <a href="http://instagram.com/_u/zenith.inova/" rel="noreferrer" target="_blank">
                    <UilInstagram size="32" />
                </a>
                <a href={`https://wa.me/5591989661300?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20projetos%20da%20Zenith%20Inova%20!!!`} rel="noreferrer" target="_blank">
                    <UilWhatsapp size="32" />
                </a>
            </S.StyledIconsMenu>
        </S.StyledMenu>
    )
}