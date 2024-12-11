import { IconesHeader } from "../IconesHeader/Icones";
import { Logo } from "../Logo/Logo";
import { OpcoesHeader } from "../OpcoesHeader/Opcoes";
import './Header.css'

export const Header = () => {
  return (
    <div>
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
};
