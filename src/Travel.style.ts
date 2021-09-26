import styled from "styled-components";
import bg from "./assets/travel/bg.svg";

export const Travel = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-image: url(${bg});
  background-position: bottom;
  background-size: cover;
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1140px;
  @media (max-width: 1140px) {
    width: 960px;
  }
`;

export const Card = styled.div<{ img: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 382px;
  border-radius: 4px;
  background-color: #808080;
  background-image: url(${(p) => p.img});
  background-position: center;
  background-size: cover;
  @media (max-width: 1140px) {
    width: 180px;

  }
`;

export const Stars = styled.img`
  align-self: flex-start;
  margin: 18px 0 0 18px;
`;

export const Dest = styled.h2`
  font-family: var(--inline-font);
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 8px;
  margin-left: 20px;
  color: #ffffff;
`;

export const TripDesc = styled.p`
  font-family: var(--inline-font);
  font-size: 16px;
  margin-left: 20px;
  color: #ffffff;
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 0 0 4px 4px;
`;

export const OldPrice = styled.s`
  font-family: var(--inline-font);
  font-size: 18px;
  font-weight: lighter;
  color: #fff;
  &::after {
    content: "$";
  }
`;

export const CurrentPrice = styled.b`
  font-family: var(--inline-font);
  font-size: 26px;
  color: #fff;
  &::before {
    content: "$";
  }
`;
