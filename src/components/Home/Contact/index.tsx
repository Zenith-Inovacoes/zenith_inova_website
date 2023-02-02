import * as S from './styles'
import Image from 'next/image'
import Typography from '@/components/Typography'

import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'
import Wave from '@/assets/WaveContact.svg'

import { UilEnvelope } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'

export default function Contact() {
    return (
        <S.ContactWrapper id='contacts'>
            <S.LeftLight/>
            <S.RightLight/>
            <S.ContactLinksWrapper>
                <a href='mailto:contato@zenithinova.com.br' target="_blank" rel='noreferrer'>
                    <UilEnvelope size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        contato@zenithinova.com.br
                    </Typography>
                </a>
                <a href='https://wa.me/5591989661300?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20projetos%20da%20Zenith%20Inova%20!!!' target="_blank" rel='noreferrer'>
                    <UilPhone size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        (91) 98966-1300
                    </Typography>
                </a>
                <a href="https://www.google.com.br/maps/place/Cesupa+-+Campus+Alcindo+Cacela+I+(Argo)/@-1.4504419,-48.4770187,19z/data=!4m6!3m5!1s0x92a48c26da0bbc99:0x3e7fb16332282dbd!8m2!3d-1.4502267!4d-48.4773593!16s%2Fg%2F1q2w5t725" target="_blank" rel='noreferrer'>
                    <UilMapMarker size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        Av. Alcindo Cacela, 1523 - 3º Andar - Pier 4
                    </Typography>
                </a>
            </S.ContactLinksWrapper>
            <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={200} />
            <Image src={Wave} alt="Onda estilizada" />
        </S.ContactWrapper>
    )
}