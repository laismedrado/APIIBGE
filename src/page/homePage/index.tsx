import React from "react";
import { CitiesSelect } from "../../components/inputSelect/inputSelectedCities.tsx";

import { IBGEstatesSelect } from "../../components/inputSelect/inputSelectIBGEstates.";

// import { SelectCities } from '../../components/inputSelect/inputSelectCidade';

import {
  // ButtonCSS,
  Container,
  ContainerButton,
  ContainerSelect,
  BoxSelect,
  Texto,
  ContainerInterface,
} from "./styles";

import {CityInfo} from "../../components/cardCity";

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
          <CityInfo />
        <ContainerButton>
          {/* <ButtonCSS variant="outlined">limpar</ButtonCSS>
          <ButtonCSS variant="outlined">pesquisar</ButtonCSS> */}
        </ContainerButton>
        </ContainerInterface>
    </Container>
  );
};
