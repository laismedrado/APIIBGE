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
`;
