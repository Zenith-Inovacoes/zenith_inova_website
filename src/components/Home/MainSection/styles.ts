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
  
`

export const Container = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: row;
  padding: 0px 134px;
  //justify-content: center;
  gap: 16px;

  margin-top: 125px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;
  }
`

export const ImageContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 50%;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;
  }
`