import { PartnersSectionProps } from "./types"
import * as S from "./styles"
import Typography from "@/components/Typography"
import RightLight from '@/assets/RightLightPartners.png'
import Image from "next/image"


export default function PartnersSection(props: PartnersSectionProps) {
  return (
    <S.Wrapper id="partners">
      <Image src={RightLight} alt="Luz da direita" priority={true}/>
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