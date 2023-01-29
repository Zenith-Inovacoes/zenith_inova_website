import * as S from "./styles"
import Typography from "../../Typography"
import TagBox from "../../TagBox"
import Image from "next/image"

import Rectangle from '@/assets/Rectangle23.svg'

export default function MainSection(){
  return(
    <S.Wrapper id="main">
      <S.Container>
        <S.TextContainer>
          <TagBox>
            TECHNOLOGY
          </TagBox>
          <Typography level={1} fontWeight={700} color="white" size="xlarge" lineHeight="3.75rem">
            Lorem Ipsum ASnbsfbahsfsabfhbashfasshbfhas bfhas 
          </Typography>
          <Typography level={4} fontWeight={100} color="white" size="large" lineHeight="2.25rem">
            Lorem Ipsum ASnbsfbahsfsabfhbashfasshbfhas bfhas
          </Typography>
        </S.TextContainer>
        <Image src={Rectangle} alt="Imagem teste" />
      </S.Container>
    </S.Wrapper>
  )
}