import * as S from "./styles"
import {
  ProductCardRootProps,
  ProductCardIconProps,
  ProductCardDescriptionProps,
  ProductCardTitleProps,
  ProductCardTextProps
} from "./types"

const ProductCardRoot = function (props: ProductCardRootProps) {
  return (
    <S.Wrapper>
      {props.children}
    </S.Wrapper>
  )
}

const ProductCardIcon = function ({ children, href }: ProductCardIconProps) {
  function checkValidHref(e: any, href: string) {
    if (href === '/')
      e.preventDefault()
  }

  return (
    <S.IconWrapper href={href} target="_blank" onClick={e => checkValidHref(e, href)}>
      {children}
    </S.IconWrapper>
  )
}

const ProductCardText = function (props: ProductCardTextProps) {
  return (
    <S.TextWrapper>
      {props.children}
    </S.TextWrapper>
  )
}

const ProductCardTitle = function (props: ProductCardTitleProps) {
  return (
    <>
      {props.children}
    </>
  )
}

const ProductCardDescription = function (props: ProductCardDescriptionProps) {
  return (
    <>
      {props.children}
    </>
  )
}

export const ProductCard = {
  Root: ProductCardRoot,
  Icon: ProductCardIcon,
  Text: ProductCardText,
  Title: ProductCardTitle,
  Description: ProductCardDescription
}