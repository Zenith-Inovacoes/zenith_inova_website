import * as S from './styles';
import { BurgerProps } from './types';

export default function Burger({ open, setOpen }: BurgerProps) {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  )
}