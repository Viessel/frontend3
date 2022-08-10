import logo from './logo.svg';
import './App.css';
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
const Perro = ({perro}) => {
  const {nombre, edad, sexo, raza, tamanio} = perro;
  return(

    <>
    <h2>{nombre}</h2>
    <ul>
      <li>Edad: {edad}</li>
      <li>Sexo: {sexo}</li>
      <li>Raza: {raza}</li>
      <li>Tamanio: {tamanio}</li>
    </ul>
    </>
  );
}


function App() {
  return (
    <div className="App">
      {perros.map(unPerro => (
        <Perro perro={unPerro} />
      ))}
    </div>
  );
}

export default App;
