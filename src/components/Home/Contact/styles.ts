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

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 7.5rem;
    padding-left: 10rem;
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

    :hover {
      * {
        color: ${({ theme }) => theme.colors.textHover};
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      :not(:last-child) {
        margin-bottom: 0;
        margin-right: 3.25rem;
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
