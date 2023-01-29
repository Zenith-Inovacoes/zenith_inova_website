import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  word-wrap: break-word;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  word-wrap: break-word;
  width: 50%;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
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
  align-items: center;
  justify-content: space-between;
  padding: 0px 134px;
  gap: 16px;
  margin-top: 11.625rem;

  > img {
    width: 500px;
    height: 500px;

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
