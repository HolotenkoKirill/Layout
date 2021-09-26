import styled from "styled-components";
import bg from "./assets/about-us/background.svg";

export const AboutUs = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 667px;
  background-image: url(${bg});
  background-color: #f6f4f4;
  background-position: right;
  background-size: 90%;
  background-repeat: no-repeat;
`;

export const TextBlockAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;



export const AboutUsDescription = styled.p`
  font-family: var(--inline-font);
  font-size: 14px;
  line-height: 24px;
  color: #949494;
  width: 80%;
`;

export const ReadMore = styled.button`
  font-family: var(--inline-font);
  text-transform: uppercase;
  width: 130px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: var(--accent-color);
  font-family: var(--primary-font);
  font-size: 12px;
  letter-spacing: 3px;
  color: #fff;
  font-weight: 600;
  margin-top: 34px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2881ad;
  }
`;

export const Images = styled.img`
  margin-left: auto;
  width: 55%;
`;
