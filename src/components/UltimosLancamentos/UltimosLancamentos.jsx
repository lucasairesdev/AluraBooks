import { livros } from "./dadosUltimosLancamentos"
import './UltimosLancamentos.css'

export const UltimosLancamentos = () => {
    return(
        <section className="UltimosLancamentosContainer">
            <h2 className="Titulo">ULTIMOS LANÇAMENTOS</h2>
            {livros.map(livro => (
                <img className="NovosLivrosContainer" src={livro.src} key={''}/>
            ))}
        </section>
    )
}