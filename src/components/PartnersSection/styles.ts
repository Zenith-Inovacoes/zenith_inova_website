import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 16px;
  border: 1px solid rgba(115, 39, 187, 0.5);
  > h2 {
    margin-top: 32px;
  }
`

export const PartnersContainer = styled.div`
  display: grid;
  margin: 56px 0px;
  padding-top: 100px;
  padding: 0px 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 58px;
  width: 100%;
  align-items: center;
`

export const PartnerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
`