import * as S from "./styles";
import Typography from "../Typography";
import { TagBoxProps } from "./types";


export default function TagBox(props: TagBoxProps) {
  return(
    <S.Wrapper>
      <Typography level={6} fontWeight={400} color="white" size="xsmall">
        {props.children}
      </Typography>
    </S.Wrapper>
  )
}