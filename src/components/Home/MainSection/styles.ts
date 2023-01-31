import styled, { keyframes } from "styled-components";

const Floating = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const Increasing = keyframes`
  0% {
    transform: scale(1, .2);
  }
  
  50% {
    transform: scale(1.2, .3);
  }
  
  100% {
    transform: scale(1, .2);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  word-wrap: break-word;

  > img {
    position: absolute;
  }

  > img:nth-child(1) {
    left: 0;
    width: 50%;
    height: auto;
    z-index: -1;
  }

  > img:nth-child(3) {
    left: 0;
    top: 35%;
    width: 80%;
    height: auto;
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: auto;
    }
  }

  > img:nth-child(4) {
    display: none;
    right: 0;
    top: 40%;
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      display: block;
    }
  }

  > img:nth-child(5) {
    display: none;
    right: 0;
    top: 0;
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  word-wrap: break-word;
  width: 40%;
  gap: 16px;

  em {
    color: ${({ theme }) => theme.colors.emphasisText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;

    > h1 {
      font-size: 2rem;
      line-height: 2.625rem;
    }

    > h4 {
      font-weight: 100;
      font-size: 1.5rem;
      line-height: 1.875rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 134px;
  gap: 16px;
  margin-top: 11.625rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;
    margin-top: 7.25rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  position: relative;

  > img {
    position: absolute;
    width: 100%;
    height: auto;
    object-fit: contain;

    :nth-child(1) {
      top: 10%;
      filter: drop-shadow(30px 10px 2rem #7327bb);
      animation-name: ${Floating};
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    :nth-child(2) {
      color: #7327bb;
      bottom: 10%;
      transform: scaleY(0.2);
      opacity: 0.55;
      animation-name: ${Increasing};
      animation-duration: 4s;
      animation-iteration-count: infinite;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        bottom: -10px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 2.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
    height: 300px;
  }
`;
