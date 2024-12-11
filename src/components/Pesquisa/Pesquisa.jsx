import './Pesquisa.css'
import { useState } from 'react'


export const Pesquisa = () =>{
    const [textoDigitado, setTextoDigitado] = useState('')
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
            onBlur={evento => setTextoDigitado(evento.target.value)}
            />
            
            <p>{textoDigitado}</p>
        </section>
    )
}