import * as S from './styles'
import Image from 'next/image'
import Typography from '@/components/Typography'

import ZenithLetterLogo from '@/assets/zenith-letter-logo.svg'

import { UilEnvelope } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'

export default function Contact() {
    return (
        <S.ContactWrapper id='contacts'>
            <S.LeftLight/>
            <S.RightLight/>
            <S.ContactLinksWrapper>
                <a href='#'>
                    <UilEnvelope size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        johndoe@email.com
                    </Typography>
                </a>
                <a href='#'>
                    <UilPhone size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        (91) 99999-9999
                    </Typography>
                </a>
                <a href="#">
                    <UilMapMarker size={32} />
                    <Typography level={6} size="small" fontWeight={100} lineHeight="1.5rem">
                        Alcindo Cacela
                    </Typography>
                </a>
            </S.ContactLinksWrapper>
            <Image src={ZenithLetterLogo} alt="Logo só de letra da Zenith" width={200} />
        </S.ContactWrapper>
    )
}