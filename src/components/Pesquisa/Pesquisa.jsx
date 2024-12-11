import './Pesquisa.css'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

export const Pesquisa = () =>{
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)
    return(
        <section className='ContainerPesquisa'>
            <h2 className='TituloPesquisa'>
                Já sabe por onde começar?
            </h2>

            <h3 className='SubtituloPesquisa'>
                Encontre seu livro em nossa estante.
            </h3>

            <input 
            placeholder="Pesquise sua próxima leitura"
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            
            
        </section>
    )
}