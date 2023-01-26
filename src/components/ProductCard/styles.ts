import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  width: 300px;
  min-height: 250px;
  background: linear-gradient(180deg, rgba(115, 39, 187, 0) 0%, rgba(115, 39, 187, 0.25) 100%);
  border: double 1px transparent;
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-image-source: linear-gradient(180deg, rgba(115, 39, 187, 0) 0%, #7327BB 99.48%);
  border-image-slice: 1;
  word-break: break-word;
  transform: translateY(40px);

  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    width: 372px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(141.88deg, #260E42 21.36%, #010102 80.2%);
  border-radius: 50px;

  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    left: 0;
    transform: translate(0%, -50%);
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin: 0 1.625rem;
  margin-top: 50px;
  margin-bottom: 2.375rem;

  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    align-items: flex-start;
    text-align: left;
  }
`