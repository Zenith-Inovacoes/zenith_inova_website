import * as S from "./styles"
import Typography from "@/components/Typography"
import TagBox from "@/components/TagBox"
import Image from "next/image"

import Mountain from '@/assets/MainImage.png'
import MountainFloor from '@/assets/MainFloorImage.png'
import WaveLeft from '@/assets/WaveLeftMain.svg'
import WaveRightBottom from '@/assets/WaveRightMain.svg'
import WaveRightTop from '@/assets/WaveRightTopMain.svg'
import LeftLightMain from '@/assets/LeftLightMain.png'

export default function MainSection() {
  return (
    <S.Wrapper id="main">
      <Image src={LeftLightMain} alt="Luz do canto superior esquerdo" priority={true} />
      <S.Container>
        <S.TextContainer>
          <TagBox>
            TECNOLOGIA
          </TagBox>
          <Typography level={1} fontWeight={700} color="white" size="xlarge" lineHeight="3.75rem">
            O ponto mais alto da <em>Tecnologia</em> e <em>Inovação</em>.
          </Typography>
          <Typography level={4} fontWeight={100} color="white" size="normal" lineHeight="2.25rem">
            Desenvolvida por pessoas como você. Para você.
          </Typography>
        </S.TextContainer>
        <S.ImageContainer>
          <Image src={Mountain} alt="Imagem teste" />
          <Image src={MountainFloor} alt="Imagem teste" />
        </S.ImageContainer>
      </S.Container>
      <Image src={WaveLeft} alt="Onda estilizada à esquerda" />
      <Image src={WaveRightBottom} alt="Onda estilizada à direita e em baixo" priority={true} />
      <Image src={WaveRightTop} alt="Onda estilizada à direita e em cima" />
    </S.Wrapper>
  )
}