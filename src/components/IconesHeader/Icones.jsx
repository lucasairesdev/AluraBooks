import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './Icones.css'

const icones = [perfil, sacola];

export const IconesHeader = () =>{
    return(
        <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone' key={''}><img src={icone} ></img></li>
            )) }
        </ul>
    )
}