import * as S from './styles'
import Typography from '@/components/Typography'

import Image from 'next/image'
import TagBox from '@/components/TagBox'
import { interestAreas } from '@/model/interestAreas'

import PhoneImage from '@/assets/AboutImage.png'
import WaveLeft from '@/assets/WaveLeftAbout.svg'
import WaveRight from '@/assets/WaveRightAbout.svg'
import LeftLight from '@/assets/LeftLightAbout.png'
import RightLight from '@/assets/RightLightAbout.png'

export default function About() {
    return (
        <S.AboutWrapper id='about'>
            <Image src={PhoneImage} alt="Rectangle" />
            <div>
                <S.AbouTextsContainer>
                    <Typography level={1} size="xlarge" fontWeight={700} lineHeight="2.25rem">
                        Sobre Nós
                    </Typography>
                    <Typography level={6} size="xsmall" fontWeight={100} lineHeight="1.25rem">
                        A Zenith surgiu durante uma fase de transição mundial, fundada por quatro membros especialistas em trazer soluções de alta qualidade e tecnologia.
                    </Typography>
                    <Typography level={6} size="xsmall" fontWeight={100} lineHeight="1.25rem">
                        Que acreditam fortemente em um novo conceito de inovação que vai além da reestruturação de processos já estabelecidos, proporcionando aprimoramento de sua qualidade de vida e diferencial competitivo no mercado.
                    </Typography>
                    <Typography level={6} size="xsmall" fontWeight={100} lineHeight="1.25rem">
                        Atuamos no mercado de automação residencial, projetos voltados para área de telecomunicações. Com serviços pontuais em desenvolvimento de softwares. Sempre buscando resultados eficientes, através de produtos que atendam suas necessidades de forma simples e inovadora.
                    </Typography>
                </S.AbouTextsContainer>
                <S.TagsContainer>
                    {interestAreas.map(({ tagName, AreaIcon }) => (
                        <S.TagCardContainer key={tagName}>
                            <S.TagCard>
                                <AreaIcon />
                            </S.TagCard>
                            <TagBox>
                                {tagName}
                            </TagBox>
                        </S.TagCardContainer>
                    ))}
                </S.TagsContainer>
            </div>
            <Image src={WaveLeft} alt="Onda estilizada à esquerda" />
            <Image src={WaveRight} alt="Onda estilizada à direita" />
            <Image src={LeftLight} alt="Luz da Esquerda" />
            <Image src={RightLight} alt="Luz da Direita" />
        </S.AboutWrapper>
    )
}