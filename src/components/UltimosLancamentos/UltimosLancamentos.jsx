import { livros } from "./dadosUltimosLancamentos";
import "./UltimosLancamentos.css";


export const UltimosLancamentos = () => {
  return (
    <div>
        <h2 className="Titulo">ULTIMOS LANÇAMENTOS</h2>
      <section className="UltimosLancamentosContainer">
        {livros.map((livro) => (
          <img className="NovosLivrosContainer" src={livro.src} key={""} />
        ))}
      </section>
    </div>
  );
};
