import styled from "styled-components";

export const Scheme = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 670px;
`;

export const SchemeTextContainer = styled.div`
  display: flex;
  width: 1150px;
  height: 83px;
  margin-top: 30px;
  @media (max-width: 1140px) {
    width: 870px;
  }
`;

export const IconDescriptionContainer = styled.div`
  margin: 0 40px;
`;

export const SchemeSVG = styled.img`
  width: 1150px;
  @media (max-width: 1140px) {
    width: 800px;
  }
`;

export const IconTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const IconDescription = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #949494;
`;
