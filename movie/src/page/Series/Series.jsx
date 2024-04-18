import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

import axios from "axios";
import TodosOsFilmes from '../../components/TodosOsFilmes/TodosOsFilmes';

export default function Series() {

    const[serie, setSerie] = useState([])

        const buscaDados = async () => {
      const dados = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1`)
    console.log(dados)
      setSerie(dados.data.results)

    }
 useEffect(()=>{
    buscaDados()
 },[])



  return (
    <section>
        <Header/>
        <div>
              {serie.map((item, id) => (
          <TodosOsFilmes
            key={id}
            imagem={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            title={item.name}
            id={item.id}
          />
        ))}
        </div>
    </section>
  )
}
