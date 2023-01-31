import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;
  margin-top: 1rem;

  > img {
    position: absolute;
    right: 0;
    top: -100%;
  }

  > h2 {
    display: block;
    margin-left: 134px;
    margin-bottom: 24px;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > h2 {
      display: none;
      visibility: hidden;
    }
  }

`

export const PartnersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 134px;
  border: 1px solid rgba(115, 39, 187, 0.5);
  
  > h2 {
    margin-top: 32px;
    display: none;
    visibility: hidden;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > h2 {
      display: block;
      visibility: visible;
    }

    margin: 0px 10px;
  }
`

export const PartnersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 58px;
  margin: 56px 0px;
  width: fit-content;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: flex;
    align-items: center;
    padding: 0px 10px;
  }
`

export const PartnerLogo = styled.div`
  width: 161px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: contain;
    transition: transform ease-out .4s;
  }

  :hover img{
    transition: transform ease .5s;
    transform: scale(1.1);
  }
`