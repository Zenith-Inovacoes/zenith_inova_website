import * as S from "./styles"
import Typography from "../Typography"
import TagBox from "../TagBox/TagBox"

export default function MainSection(){
  return(
    <S.Wrapper>
      <S.Container>
        <S.TextContainer>
          <TagBox>
            TECHNOLOGY
          </TagBox>
          <Typography level={4} fontWeight={700} color="white" size="normal">
            Lorem Ipsum ASnbsfbahsfsabfhbashfasshbfhas bfhas 
          </Typography>
          <Typography level={4} fontWeight={100} color="white" size="normal">
            Lorem Ipsum ASnbsfbahsfsabfhbashfasshbfhas bfhas
          </Typography>
        </S.TextContainer>
      </S.Container>
    </S.Wrapper>
  )
}