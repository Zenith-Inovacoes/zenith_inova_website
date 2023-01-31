import styled from "styled-components";

type props = {
  open: boolean;
  activeLink?: number;
};

export const StyledMenu = styled.nav<props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryColor};
  height: 100vh;
  padding: 2rem;
  padding-bottom: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

  > button:nth-child(${props => props.activeLink}) *{
    color: ${({theme}) => theme.colors.textHover}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledLinkMenu = styled.button<props>`
  text-transform: uppercase;
  padding: 1.5rem 0;
  margin: 0.5rem 0;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 0.3s linear;
  background-color: ${({ theme }) => theme.colors.darkPrimaryColor};
  background: linear-gradient(
    90deg,
    rgba(3, 4, 36, 1) 0%,
    rgba(3, 4, 36, 0.2) 100%
  );
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: transform ease 0.8s, opacity ease 2s;

  * {
    text-align: left;
    padding-left: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledIconsMenu = styled.div`
  position: absolute;
  bottom: 2rem;
  justify-self: center;
  align-self: center;
  text-align: center;
  padding-top: 2rem;

  > a * {
    color: ${({ theme }) => theme.colors.purpleZenith};
  }

  > a:not(:last-child) {
    margin-right: 4rem;
  }
`;
