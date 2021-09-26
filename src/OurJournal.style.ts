import styled from "styled-components";

export const OurJournal = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1064px;
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1139px;
  height: 759.32px;
  box-shadow: 0 0 21px #a8a8a8;
  @media (max-width: 1140px) {
    width: 600px;
  height: 400px;

  }
`;

export const PostImg = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 379.66px;
  height: 379.66px;
  @media (max-width: 1140px) {
    width: 200px;
    height: 200px;
  }
`;

export const Icon = styled.img`
  width: 21%;
`;

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 33.33%;
  height: 50%;
 
`;

export const Title = styled.h3`
  font-family: var(--inline-font);
  font-size: 11px;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 56px;
   @media (max-width: 1140px) {
    margin-bottom: 15px;
    font-size: 10px;

  }
`;

export const Subtitle = styled.h4`
  font-family: var(--inline-font);
  font-size: 16.15px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 33px;
   @media (max-width: 1140px) {
    margin-bottom: 15px;
    font-size: 10px;
  }
`;

export const Description = styled.p`
  font-family: var(--inline-font);
  font-size: 14px;
  text-align: center;
  color: #777777;
  margin-bottom: 38px;
  @media (max-width: 1140px) {
    margin-bottom: 15px;
    font-size: 10px;
  }
`;

export const PostNumber = styled.p`
  font-family: "Times New Roman";
  font-size: 14px;
  font-style: italic;
  @media (max-width: 1140px) {
    font-size: 8px;
  }
`;
