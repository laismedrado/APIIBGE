import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { IBGEstatesTypes } from "../../../model/IBGEstatesTypes";
import { cidadesFetch } from "../../../redux/slices/citySlice";
import { IBGEstatesFetch } from "../../../redux/slices/IBGEstatesSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/types/reduxTypes";

import { SelectCSS } from "./styles";

export const IBGEstatesSelect = () => {
  const dispatch = useAppDispatch();
  const { estados } = useAppSelector((state) => state.estados);
  const [selected, setSelected] = useState<IBGEstatesTypes>();

  useEffect(() => {
    dispatch(IBGEstatesFetch);
  }, [dispatch]);

  function handleSelectedEstado(event: any) {
    console.log({ teste: event?.target?.value });
    const selectedState = event?.target?.value;
    setSelected(selectedState);
    dispatch(cidadesFetch(selectedState));
  }

  return (
    <SelectCSS
      autoFocus
      name="estados"
      id="estados"
      onChange={(event: any) => handleSelectedEstado(event)}
    >
      <option value="selected">Escolha o estado</option>

      {estados.length !== 0
        ? estados.map((state: any) => {
            return (
              <option key={state.id} value={state.sigla}>
                {state.nome}
              </option>
            );
          })
        : ""}
    </SelectCSS>
  );
};
