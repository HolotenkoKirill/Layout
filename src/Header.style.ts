import styled from "styled-components";
import burger from "./assets/header/burger.svg";

export const Header = styled.header`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 119px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const LogoContainer = styled.div`
  margin-right: 36px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 10px 0 10px;
`;

export const MenuLink = styled.a`
  color: #9daeb6;
  text-decoration: none;
  font-family: var(--inline-font);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 25px;
  padding-bottom: 10px;
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 3px solid var(--accent-color);
  }
  @media (max-width: 1140px) {
    display: none;
  }
`;

export const BurderMenu = styled.div`
  background-image: url(${burger});
  width: 20px;
  height: 20px;
  margin-left: auto;
  cursor: pointer;
  display: none;

  @media (max-width: 1140px) {
    display: block;
  }
`;

export const CallUsButton = styled.button`
  min-width: 153px;
  height: 46px;
  background-color: rgba(255, 255, 255, 0);
  color: var(--accent-color);
  font-family: var(--primary-font);
  letter-spacing: 3px;
  border: 3px solid var(--accent-color);
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 40px 0 auto;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
  }
  @media (max-width: 1140px) {
    display: none;
  }
`;
