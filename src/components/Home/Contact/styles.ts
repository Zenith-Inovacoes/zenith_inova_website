import styled from "styled-components";

export const ContactWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5.625rem;
  padding-top: 10rem;
  padding-bottom: 2.8rem;
  gap: 3rem;
  overflow: hidden;

  > img:last-child {
    position: absolute;
    left: -1.5rem;
    bottom: -2.5rem;
    right: 0;
    z-index: -1;

    @media (min-width: ${({theme}) => theme.breakpoints.md}) {
      left: auto;
      right: 1.5rem;
      bottom: 0;
    }

    @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
      right: 8rem;
      transform: scaleX(1.2);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 4rem;
    padding-left: 6rem;
    padding-top: 12.5rem;
    padding-bottom: 8.125rem;
  }
`;

export const ContactLinksWrapper = styled.div`
  > a {
    display: flex;
    align-items: center;
    gap: 2rem;
    :not(:last-child) {
      margin-bottom: 3.25rem;
    }

    * {
      color: ${({ theme }) => theme.colors.white};
    }

    :hover * {
      color: ${({ theme }) => theme.colors.textHover};
    }

    :focus * {
      color: ${({ theme }) => theme.colors.textHover};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      :not(:last-child) {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftLight = styled.div`
  position: absolute;
  height: 600px;
  width: 600px;
  left: 0;
  z-index: -1;
  transform: translateX(-60%) translateY(40%);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(115, 39, 187, 0.5) 0%,
    rgba(115, 39, 187, 0) 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    transform: translateX(-55%) translateY(30%);
  }
`;

export const RightLight = styled.div`
  position: absolute;
  height: 600px;
  width: 600px;
  right: 0;
  z-index: -1;
  transform: translateX(60%) translateY(40%);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(115, 39, 187, 0.5) 0%,
    rgba(115, 39, 187, 0) 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    transform: translateX(55%) translateY(30%);
  }
`;
