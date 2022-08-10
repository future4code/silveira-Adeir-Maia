
import './App.css';
import { GlobalState } from './GlobalState/globalState';
import Home from './Pages/home';

function App() {
  return (
    <GlobalState>
      <Home/>
    </GlobalState>
  );
}

export default App;
