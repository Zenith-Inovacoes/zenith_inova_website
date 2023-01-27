import { PartnersSectionProps } from "./types"
import * as S from "./styles"
import Typography from "../../Typography"

export default function PartnersSection(props: PartnersSectionProps) {
  return (
    <S.Wrapper>
        <Typography level={2} color="white">
          {props.title}
        </Typography>
      <S.PartnersWrapper>
        <Typography level={2} color="white">
          {props.title}
        </Typography>
        <S.PartnersContainer>
          {
            props.children.map((partner, index) => (
              <S.PartnerLogo key={index}>
                {partner}
              </S.PartnerLogo>
            ))
          }
        </S.PartnersContainer>
      </S.PartnersWrapper>
    </S.Wrapper>
  )
}