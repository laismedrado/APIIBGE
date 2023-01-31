import React from "react";
import { CitiesSelect } from "../../components/inputSelect/inputSelectedCities.tsx";

import { IBGEstatesSelect } from "../../components/inputSelect/inputSelectIBGEstates.";

// import { SelectCities } from '../../components/inputSelect/inputSelectCidade';

import {
  // ButtonCSS,
  Container,

  ContainerSelect,
  BoxSelect,
  Texto,
  ContainerInterface,
  ContainerDataInfo,
} from "./styles";

import { CityInfo } from "../../components/cardCity";

// import { Container } from './styles';

export const Homepage: React.FC = () => {
  return (
    <Container>
    <ContainerInterface>
        <ContainerSelect>
          <BoxSelect>
            <Texto> ESCOLHA O ESTADO:</Texto>
            <IBGEstatesSelect />
          </BoxSelect>
          <BoxSelect>
            <Texto> ESCOLHA A CIDADE: </Texto>
            <CitiesSelect />
          </BoxSelect>
        </ContainerSelect>
        <ContainerDataInfo>
          <CityInfo />
        </ContainerDataInfo>
      </ContainerInterface>
    </Container>
  );
};
