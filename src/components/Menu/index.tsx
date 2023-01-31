import * as S from './styles';
import { MenuProps } from './types';
import Typography from '../Typography';
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { sections } from '@/model/sections'
import { scrollScreenTo } from '@/services/scroll';

export default function Menu({ open, setOpen, activeLink }: MenuProps) {
    return (
        <S.StyledMenu open={open} activeLink={activeLink}>
            {sections.map(({ section, location }) => (
                <S.StyledLinkMenu key={section} open={open} onClick={() => scrollScreenTo(document.getElementById(location), setOpen)}>
                    <Typography level={1} size="xsmall">
                        {section}
                    </Typography>
                </S.StyledLinkMenu>
            ))}
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