import styled from "styled-components";
import image from "./assets/first-screen/first-screen-bg.jpg";

export const FirstScreen = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40%;
  margin-top: 10%;
`;

export const FirstScreenHeading = styled.h1`
  line-height: 40px;
`;

export const TravelWithUs = styled.span`
  font-family: var(--inline-font);
  font-size: 50px;
  letter-spacing: 6px;
  color: #fff;
`;

export const Mountains = styled.span`
  font-family: "Bringin";
  font-size: 66px;
  color: #56c7ff;
`;

export const FirstScreenDescription = styled.p`
  font-family: var(--inline-font);
  font-size: 18px;
  color: #fff;
  opacity: 0.75;
  margin-top: 30px;
`;

export const FirstScreenOrderNow = styled.button`
  width: 253px;
  height: 60px;
  border-radius: 4px;
  border: none;
  background-color: var(--accent-color);
  font-family: var(--primary-font);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2881ad;
  }
`;
