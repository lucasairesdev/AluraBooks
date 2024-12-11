import './Opcoes.css'

const opcoesDeTexto = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export const OpcoesHeader = () => {

  return (
    <ul className="opcoes">
        {opcoesDeTexto.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
};
