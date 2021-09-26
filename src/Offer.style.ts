import styled from "styled-components";
import bg from "./assets/offer/bg.jpg";
import lock from "./assets/offer/lock-locked.svg";

export const Offer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 650px;
  background-color: #f6f4f4;
  background-image: url(${bg});
  background-position: bottom;
  background-size: cover;
`;

export const OfferDescription = styled.p`
  align-self: flex-start;
  font-family: var(--inline-font);
  font-size: 16px;
  color: #777777;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
  height: 62px;
  margin-top: 34px;
  border-radius: 4px;
  background: #fff;
  @media (max-width: 1140px) {
    width: 300px;
    justify-content: flex-start;
    height: 112px;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  border-radius: 4px;
  width: 300px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const Separartor = styled.hr`
  width: 1px;
  height: 35px;
  border: none;
  color: #ebebeb;
  background-color: #ebebeb;
  @media (max-width: 1140px) {
    width: 100%;
    height: 1px;
  }
`;

export const OrderNow = styled.input`
  min-width: 225px;
  height: 56px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background: var(--accent-color);
  font-family: var(--inline-font);
  font-size: 16px;
  font-weight: 600;
  margin-right: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2881ad;
  }
  @media (max-width: 1140px) {
    margin-top: 50px;
  }
`;

export const Notification = styled.p`
  align-self: flex-start;
  color: var(--accent-color);
  font-family: var(--inline-font);
  font-size: 14px;
  margin-top: 20px;
  &::before {
    content: url(${lock});
    margin-right: 10px;
  }
`;
