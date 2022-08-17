import '../styles/App.css';
import Titulo from '../component/titulo'
const cadenas = ["Hola","Hola", "Hola", "Mundo"];

function App() {
  return cadenas.map((cadena, index)=>
    { return (
      <>
        <Titulo  key={cadena+index} str={cadena}/>
      </> 
      );
    })
}

export default App;
