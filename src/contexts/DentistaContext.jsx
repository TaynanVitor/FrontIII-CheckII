import React, { createContext, useEffect, useState } from 'react'
import api from '../Services/api';

export const DentistaContext = createContext();

export function DentistaProvider({children}) {

  const [dentistas, setDentistas] = useState([]);
  const [dentista, setDentista] = useState({});

  async function getAllDentistas() {
    try {
      const response = await api.get('/dentista')
      setDentistas(response.data)
      console.log(response);
    } catch (error) {
      alert("Erro ao buscar dentistas " + error)
    }
  } 

  useEffect(() => {
    getAllDentistas();
  }, [])

  async function getDentista(id) {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get(`/dentista?matricula=${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(response)
      setDentista(response.data)
    } catch (error) {
      console.log("Erro ao buscar dentista " + error)
    }
  };

  useEffect(() => {
    getDentista();
  }, [])

  return (
    <DentistaContext.Provider value={{dentistas, dentista, getAllDentistas, getDentista}}>
      {children}
    </DentistaContext.Provider>
  )}