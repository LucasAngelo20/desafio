import React, { createContext, useCallback, useState } from "react";
import API from "../services/api";
import moment from "moment";
interface CovidProviderProps {
  children: React.ReactNode;
}

interface CovidContextData {
  listaEstados: Array<ListaEstadoProps>;
  listaPaises: Array<ListaPaisesProps>;
  estado: any;
  estadoSelecionado: any;
  listaEstadosSelecionados: any;
  setEstadoSelecionado: React.SetStateAction<any>;
  paisSelecionado: any;
  setPaisSelecionado: React.SetStateAction<any>;
  getEstado: () => void;
  getTodosEstados: () => void;
  getTodosPaises: () => void;
  getDataEspecifica: (data: any) => void;
}

interface ListaEstadoProps {
  cases: number;
  datetime: string;
  deaths: number;
  refuses: number;
  state: string;
  suspects: number;
  uf: string;
  uid: number;
}

interface ListaPaisesProps {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
}

export const CovidContext = createContext({} as CovidContextData);
const CovidProvider = ({ children }: CovidProviderProps) => {
  const [listaEstados, setListaEstados] = useState<Array<ListaEstadoProps>>([]);
  const [listaPaises, setListaPaises] = useState<Array<ListaPaisesProps>>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<any>(
    listaEstados[0]
  );
  const [listaEstadosSelecionados, setListaEstadosSelecionados] = useState<any>(
    
  );
  const [paisSelecionado, setPaisSelecionado] = useState<any>(listaPaises[0]);

  const [estado, setEstado] = useState("");

  const getEstado = useCallback(async () => {
    try {
      const response = await API.get("/brazil/uf/sp");
      setEstado(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao fazer chamado!");
    }
  }, []);
  const getTodosEstados = useCallback(async () => {
    try {
      const response = await API.get("");
      setListaEstados(response.data.data);
      setEstadoSelecionado(response.data.data[0]);
    } catch (error) {
      console.log("Erro ao fazer chamado!");
    }
  }, []);
  const getTodosPaises = useCallback(async () => {
    try {
      const response = await API.get("/countries");
      setListaPaises(response.data.data);
      setPaisSelecionado(response.data.data[0]);
    } catch (error) {
      console.log("Erro ao fazer chamado!");
    }
  }, []);

  const getDataEspecifica = useCallback(async (data: any) => {
    const dataEspecifica = moment(data).format("YYYYMMDD");
    try {
      const response = await API.get(`/brazil/${dataEspecifica}`);
      console.log("teste", response.data);
      setListaEstadosSelecionados(response.data.data)
    } catch (error) {
      console.log("Erro ao fazer chamado!");
    }
  }, []);

  return (
    <CovidContext.Provider
      value={{
        listaEstados,
        estado,
        getEstado,
        getTodosEstados,
        getDataEspecifica,
        getTodosPaises,
        listaPaises,
        paisSelecionado,
        setPaisSelecionado,
        estadoSelecionado,
        setEstadoSelecionado,
        listaEstadosSelecionados
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};

export default CovidProvider;
