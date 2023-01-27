import * as S from "./styles"
import Typography from "../../Typography"
import TagBox from "../../TagBox"

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
        <div style={{width: "100%", display: "flex", justifyContent: "center" }}>
          <div style={{backgroundColor: "rgba(217, 217, 217, 0.1)", height: "300px", width: "300px"}}></div>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}