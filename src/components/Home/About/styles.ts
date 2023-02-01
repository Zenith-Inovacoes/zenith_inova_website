import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 4.25rem;
  position: relative;

  > div {
    margin-right: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      margin-right: 5rem;
    }
  }

  > img:first-child {
    width: 300px;
    height: 300px;
    margin: 3rem;
    margin-bottom: 3rem;
    z-index: -1;
  }

  > img:not(:first-child) {
    position: absolute;
    z-index: -1;
  }

  > img:nth-child(3) {
    left: 0;
    bottom: -5rem;
    width: 80%;
    height: auto;
    z-index: -1;

    @media (min-width: ${({theme}) => theme.breakpoints.sm}) {
      width: auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      left: -8.5rem;
      bottom: 0rem;
    }
  }

  > img:nth-child(4) {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      display: block;
      right: -4.5rem;
    }
  }

  > img:nth-child(5) {
    left: 0;
    width: 80%;
    height: 2000px;
    /* height: auto; */

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      left: -8.5rem;
    }
  }

  > img:nth-child(6) {
    right: 0;
    bottom: -60%;

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      right: -4.5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-right: 4.5rem;
    margin-left: 8.5rem;
    margin-top: 12rem;
    text-align: left;

    > img:first-child {
      width: 500px;
      height: 500px;
      margin: 0;
    }
  }
`;

export const AbouTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  > *:not(:nth-child(1)) {
    padding: 0 2.75rem;
    margin: 0 1rem;
  }

  > *:nth-child(1) {
    margin-top: 3rem;
    margin-bottom: 0.875rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1rem;

    > *:nth-child(1) {
      padding: 1.2rem 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: flex-start;
    margin-right: 5rem;

    > *:not(:nth-child(1)) {
      padding: 0;
      margin: 0;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3.25rem;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    justify-content: space-between;
  }
`;

export const TagCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  transition: transform ease-out 0.3s;

  > *:nth-child(2) {
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    transition: transform ease-out 0.3s;
  }

  :focus {
    transform: scale(1.1);
    transition: transform ease-out 0.3s;
  }
`;

export const TagCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 90px;
  background: rgba(217, 217, 217, 0.05);
  border: 1px solid rgba(115, 39, 187, 0.5);
  border-radius: 4px;
  color: white;
`;

export const BiggerLight = styled.div`
  position: absolute;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(21, 1, 133, 0.25) 0%,
    rgba(115, 39, 187, 0) 100%
  );
  width: 1906px;
  height: 1916px;
  left: -40rem;
  z-index: -1;
`;

export const SmallerLight = styled.div`
  position: absolute;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(21, 1, 133, 0.25) 0%,
    rgba(115, 39, 187, 0) 100%
  );
  width: 552px;
  height: 556px;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
  z-index: 2;
`;
