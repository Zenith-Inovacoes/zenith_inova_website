import styled, { css } from "styled-components";
import { Inter } from "@next/font/google";
import theme from "@/styles/theme";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: number;
  lineHeight?: string;
  level?: number;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "white",
    size = "normal",
    fontWeight = 700,
    lineHeight = 1.5,
  }) => css`
    font-family: ${inter.style.fontFamily};
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;
