import styled from "styled-components";

type IndicatorsProps = {
  activeIndicator: number;
  fixedIndicator?: number;
  isQuantityEven?: boolean;
};

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: auto;
  overflow-x: hidden;

  > div:nth-child(1) {
    padding: 1.5rem 0;
  }

  > div:nth-child(2) {
    margin: 1rem 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 1rem 15rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 1rem 23rem;
    }
  }
`;

export const ProductsContainer = styled.div<IndicatorsProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(
    ${({ fixedIndicator, isQuantityEven }) =>
      fixedIndicator == undefined || isQuantityEven == undefined
        ? "none"
        : `${340 * fixedIndicator + Number(isQuantityEven ? 170 : 0)}px`}
  );
  transition: transform ease 0.7s;

  > * {
    transition: transform ease 0.3s;
  }

  > *:nth-child(${({ activeIndicator }) => activeIndicator}) {
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      transition: transform ease 0.2s;
      transform: translateY(-2%);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    transform: translateX(
      ${({ fixedIndicator, isQuantityEven }) =>
        fixedIndicator == undefined || isQuantityEven == undefined
          ? "none"
          : `${372 * fixedIndicator + Number(isQuantityEven ? 186 : 0)}px`}
    );
  }
`;

export const CarouselIndicators = styled.div<IndicatorsProps>`
  display: flex;
  gap: 15px;
  margin-top: 5rem;
  button {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 100%;
    background: rgba(217, 217, 217, 0.1);
    cursor: pointer;
    transition: background-color ease 0.2s;

    :hover {
      background-color: ${({ theme }) => theme.colors.purpleZenith};
      transition: background-color ease 0.4s;
    }
  }

  button:nth-child(${(props) => props.activeIndicator}) {
    background-color: ${({ theme }) => theme.colors.purpleZenith};
  }
`;
