import { ReactNode } from "react";


export interface ProductCardRootProps {
  children: ReactNode
}

export interface ProductCardIconProps {
  children: ReactNode
  href?: string
}

export interface ProductCardTextProps {
  children: ReactNode
}

export interface ProductCardTitleProps {
  children: ReactNode
}

export interface ProductCardDescriptionProps {
  children: ReactNode
}