import styled from "styled-components";

type propsNavbar = {
  open: boolean;
  scrollPosition: number;
};

type propsNavbarItems = {
  activeLink: number;
};

export const NavbarWrapper = styled.div<propsNavbar>`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ scrollPosition }) =>
      scrollPosition > 64 ? ".8rem" : "2.125rem"}
    2rem;
  min-height: 40px;
  height: auto;
  width: 100%;
  z-index: 100000;
  background-color: ${({ theme, scrollPosition }) =>
    scrollPosition > 64 ? theme.colors.primaryColor : "transparent"};
  border-bottom: ${({ open }) =>
    open ? `1px solid rgba(255,255,255, .2)` : "transparent"};
  transition: border-bottom ease 1s, padding ease 1s, background-color ease 1s;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ scrollPosition }) =>
        scrollPosition > 64 ? ".8rem" : "2.125rem"}
      8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border-bottom: none;
  }
`;

export const NavbarItemsWrapper = styled.div<propsNavbarItems>`
  display: none;
  width: fit-content;

  > button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  > button:not(:last-child) {
    margin-right: 1rem;
  }

  > button:hover * {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.textHover};
  }
  > button:focus {
    border: none;
  }

  > button:focus * {
    color: ${({ theme }) => theme.colors.textHover};
  }

  > button:nth-child(${(props) => props.activeLink}) * {
    color: ${({ theme }) => theme.colors.textHover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    > button:not(:last-child) {
      margin-right: 3.375rem;
    }
  }
`;

export const NavbarIconsWrapper = styled.div`
  display: none;

  > a * {
    color: ${({ theme }) => theme.colors.purpleZenith};
  }

  > a:not(:last-child) {
    margin-right: 1rem;
  }

  > a:hover * {
    transform: scale(1.025);
    transition: transform ease 0.2s;
    color: ${({ theme }) => theme.colors.textHover};
  }

  > a:hover {
    border: none;
  }

  > a:focus * {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    width: fit-content;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    > a:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
