import './App.css';
import {Header} from './components/Header/Header'
import { Pesquisa } from './components/Pesquisa/Pesquisa';
import { UltimosLancamentos } from './components/UltimosLancamentos/UltimosLancamentos';


function App() {
  return (
    <div className='App'>
      <Header />
      <Pesquisa /> 
      <UltimosLancamentos/>
      
    </div>
  );
}

export default App;