import { device } from 'constants/breakpoints';
import styled from 'styled-components';

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid grey;
border-radius: 2px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
  transform: scale(1.03);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
`;

export const ItemText = styled.h4`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ModalContentWrapper = styled.div`
  // display: flex;
  // margin-top: 30px;

  @media screen and (${device.mobile_only}) {
    margin-top: 40px;
  }
  @media screen and (${device.tablet}) {
    display: flex;
    margin-top: 40px;
  }
`;

export const ModalImgWrapper = styled.div`
  @media screen and (${device.mobile_only}) {
    margin-bottom: 30px;
  }
  @media screen and (${device.tablet}) {
    margin-right: 30px;
  }
  @media screen and (${device.desktop}) {
    margin-right: 30px;
  }
`;

export const ModalImg = styled.img`
  @media screen and (${device.mobile_only}) {
    width: 100%;
  }
  @media screen and (${device.tablet}) {
    width: 100%;
    max-width: 400px;
  }
  @media screen and (${device.desktop}) {
    width: 100%;
    max-width: 500px;
  }
`;

export const ModalDetailsWrapper = styled.div`
  @media screen and (${device.tablet}) {
    padding-left: 30px;
    border-left: 1px solid grey;
  }

  @media screen and (${device.desktop}) {
    padding-left: 30px;
    border-left: 1px solid grey;
  }
`;

export const BreedTitle = styled.h2`
  margin-bottom: 30px;
  text-decoration: underline;
`;

export const BreedText = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  box-shadow: 0px 6px 6px 0px #027df7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  font-size: 16px;
  color: #000000;

  transition: all 250ms linear;

  &:focus,
  &:hover {
    background-color: #027df7;
    border: 1px solid transparent;
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
