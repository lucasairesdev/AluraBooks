import logo from '../../imagens/logo.svg'
import './Logo.css'
export const Logo = () => {
    return (
      <div className='logo'>
      <img
          src={logo}
          alt='logo'
          className='logo-img'
      ></img>
      <p className='NomeLogo'><strong>Alura</strong>Books</p>
  </div>
    )
}