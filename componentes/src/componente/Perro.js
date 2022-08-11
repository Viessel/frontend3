//const Perro = ({perro}) => {
function Perro ({perro}){
  const {nombre, edad, sexo, raza, tamanio} = perro
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
export default Perro;
