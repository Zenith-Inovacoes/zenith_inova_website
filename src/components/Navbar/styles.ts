import styled from "styled-components";

type props = {
  open: boolean;
};

export const NavbarWrapper = styled.div<props>`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.125rem 2rem;
  min-height: 40px;
  height: auto;
  width: 100%;
  background-color: transparent;
  border-bottom: ${({ open }) =>
    open ? `1px solid rgba(255,255,255, .2)` : "transparent"};
  transition: border-bottom ease 1s;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.125rem 8rem;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    border-bottom: none;
  }
`;

export const NavbarItemsWrapper = styled.div`
  display: none;
  width: fit-content;

  > a {
    cursor: pointer;
  }

  > a:not(:last-child) {
    margin-right: 1rem;
  }

  > a:hover * {
    transform: scale(1.1);
    color: ${({theme}) => theme.colors.textHover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    > a:not(:last-child) {
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
    color: ${({theme}) => theme.colors.textHover};
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
