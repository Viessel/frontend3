import '../styles/App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Gatitos from './Gatitos';
import Perritos from './Perritos';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/gatos" element={<Gatitos />}/>
          <Route path="/perros" element={<Perritos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
