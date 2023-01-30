import styled from 'styled-components';
import { Tab } from '@headlessui/react';

export const ContainerData = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:1rem;
    margin-top: 4rem;
`;
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;
export const Tablete = styled(Tab)`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  color: green;
  margin-right: 0.1em;
  font-size: 1em;
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;


