import styled from "styled-components"

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

    @media (min-width: ${({theme}) => theme.breakpoints.sm}) {
      width: auto;
    }
  }

  > img:nth-child(4) {
    display: none;
    right: 0;
    top: 40%;
    z-index: -1;

    @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
      display: block;
    }
  }

  > img:nth-child(5) {
    display: none;
    right: 0;
    top: 0;
    z-index: -1;

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
      display: block;
    }
  }
`

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
    color: ${({theme}) => theme.colors.emphasisText}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.lg}) {
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
  
`

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

  > img {
    width: 500px;
    height: 500px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 2.75rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;
    margin-top: 7.25rem;
  } 
`
