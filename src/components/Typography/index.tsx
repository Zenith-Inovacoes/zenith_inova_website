import { TypographyProps } from "./types"
import * as S from './styles'

export default function Typography({children, level, color, size, fontWeight, lineHeight}: TypographyProps) {
    return (
        <S.Heading level={level} size={size} color={color} fontWeight={fontWeight} lineHeight={lineHeight}>
            {children}
        </S.Heading>
    )
}