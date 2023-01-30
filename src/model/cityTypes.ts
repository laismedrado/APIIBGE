export interface CityTypes {
  //target: any;
  id: string;
  nome: string;
}

export interface CityDataTypes {
  id: number;
  nome: string;
  municipio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
    "regiao-imediata": {
      id: number;
      nome: string;
      "regiao-intermediaria": {
        id: number;
        nome: string;
        UF: {
          id: number;
          nome: string;
          sigla: string;
          regiao: {
            id: number;
            nome: string;
            sigla: string;
          };
        };
      };
    };
  };
}
