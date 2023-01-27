import * as S from './styles'
import Typography from '@/components/Typography'
import Rectangle from '@/assets/Rectangle23.svg'
import Image from 'next/image'
import TagBox from '@/components/TagBox/TagBox'
import { areas } from '@/model/areas'

export default function About() {
    return (
        <S.AboutWrapper>
            <Image src={Rectangle} alt="Rectangle" />
            <div>
                <S.AbouTextsContainer>
                    <Typography level={1} size="xlarge" fontWeight={700} lineHeight="2.25rem">
                        Lorem Ipsum
                    </Typography>
                    <Typography level={6} size="xsmall" fontWeight={100} lineHeight="0.875rem">
                        Laborum do quis irure non. Ullamco pariatur pariatur labore incididunt consequat quis dolore elit cupidatat.
                    </Typography>
                </S.AbouTextsContainer>
                <S.TagsContainer>
                    {areas.map(({ tagName, AreaIcon }, index) => (
                        <S.TagCardContainer key={tagName} cardIndex={index}>
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
        </S.AboutWrapper>
    )
}