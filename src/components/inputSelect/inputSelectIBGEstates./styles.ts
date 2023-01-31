import styled from "styled-components";

export const SelectCSS = styled.select`
  width: 30rem;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;

  .option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  ::after {
    border-color: white;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 30rem;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    width: 30rem;
  }

  @media screen and (min-device-width: 800px) {
    width: 20rem;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;

    .option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
    ::after {
      border-color: white;
    }
  }
`;
