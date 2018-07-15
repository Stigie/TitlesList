import styled from 'styled-components';

const Main = styled.form`
  display: flex;
  justify-content: flex-start;
  padding-top: 29px;
  padding-bottom: 32px;
  padding-left: 19px;
  box-sizing: border-box;
  flex-basis: 103px;
  background-color: #d2d3d5;
  margin-top: 8px;
  width: 100%;
`;

const Input = styled.input`
  margin-top: 0;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 1px;
  border: none;
  font-size: 25px;
  line-height: 40px;
  margin-left: 2px;
  margin-right: 17px;
  flex-basis: 399px;
  height: 42px;
  margin-top: -1px;
  padding-top: 4px;
`;

const Button = styled.button`
  background: #890e4f;
  color: #fff;
  border-radius: 1px;
  border: 0;
  -webkit-appearance: none;
  font-size: 24px;
  border: none;
  padding-left: 17px;
  padding-right: 65px;
  /* display: none; */
  font-weight: 100;
`;
export {
  Main, Input, Button,
};
