import { useState } from "react";
import { useEffect } from "react";
import { SelectCSS } from "./styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/types/reduxTypes";
import { CityTypes } from "../../../model/cityTypes";
import { dataFetch } from "../../../redux/slices/dataCardSlice";

export const CitiesSelect = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.cidades);
  const { cidades } = useAppSelector((state) => state.cidades);
  const [selectedCity, setSelectedCity] = useState<any>();
  const [query, setQuery] = useState("");

  let filteredCities =
    query === ""
      ? cidades
      : cidades.filter((cidade: CityTypes) =>
          cidade.nome
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    if (status !== "fulfilled") {
      setSelectedCity({} as CityTypes);
    } else {
    }
  }, [status]);

  function handleSelectedCity(event: any) {
    console.log({ teste: event?.target?.value });

    const selectedCity = event?.target?.value;
    setSelectedCity(selectedCity);
    dispatch(dataFetch(selectedCity));
  }

  return (
    <SelectCSS
      autoFocus
      name="cidades"
      id="cidades"
      onChange={(item: any) => handleSelectedCity(item as CityTypes)}
    >
      <option value="selected">Escolha a cidade</option>

      {filteredCities.length !== 0
        ? filteredCities.map((cidade: CityTypes) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))
        : ""}
    </SelectCSS>
  );
};
