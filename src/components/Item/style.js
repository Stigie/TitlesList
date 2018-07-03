import styled, { css } from 'styled-components';
import bgImage from "../../assets/background-svg.svg"

const ItemView = styled.div`
  overflow: hidden;
  display: inline;
  position: relative;
  padding-left: 26px;
  box-sizing: border-box;
  background-size: cover;
  padding-bottom: 10px;
  margin-bottom: 7px;
  background-color: #d2d3d5;
  background-position-x: 50%;
  background-image: url(${bgImage});
  background-size: cover;
`;

const Dark = styled.div`
  transform: rotate(-21deg) scale(1,3);
  display: block;
  min-width: 50%;
  width: 50%;
  height: 100%;
  min-height: 100%;
  background-color: #4b4b4d;
  position: absolute;
  overflow: hidden;
  top: -50%;
  right: -4%;
  z-index: 10;
`;

const Rectangular = styled.div`
  position: absolute;
  transform: rotate(15deg);
  height: 100%;
  width: 34px;
  left: -1%;
  background-color: #363435;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 38px;
  z-index: 11;
  display: block;
  position: relative;
  color: #383636;
  max-width: 50%;
`;

const Source = styled.div`
  background-color: #890e4f;
  display: inline-block;
  position: relative;
  color: #fff;
  font-size: 24px;
  z-index: 15;
  margin-top: 9px;
  padding: 9px 100px 17px 26px;
  left: -25px;
  width: 77%;
  box-sizing: border-box;
  line-height: 24px;
`;
export { ItemView, Dark, Rectangular, Title, Source }