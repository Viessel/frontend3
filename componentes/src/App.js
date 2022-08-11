import logo from './logo.svg';
import './App.css';
import Perro from './componente/Perro';
const perros = [
  {
    nombre: "Firulais",
    edad: "11",
    sexo: "Macho",
    raza: "Pastor Aleman",
    tamanio: "Grande"
  },
  {
    nombre: "Maya",
    edad: "13",
    sexo: "Hembra",
    raza: "Pug",
    tamanio: "Chico"
  },
  {
    nombre: "Pipo",
    edad: "5",
    sexo: "Macho",
    raza: "Schnauzer",
    tamanio: "mediano"
  },
  {
    nombre: "Pacha",
    edad: "2",
    sexo: "Hembra",
    raza: "Mestizo",
    tamanio: "Chico"
  }
];

function App() {
  return (
    <div className="App">
      {perros.map(unPerro => {
        console.log(typeof(unPerro))
        return(<Perro perro={unPerro} />);
      })}
    </div>
  );
}

export default App;
