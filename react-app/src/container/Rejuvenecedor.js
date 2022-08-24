import { Component } from "react"
import Swal from 'sweetalert2'
import '../styles/App.css'
export class Rejuvenecedor extends Component{
  constructor (props){
    super(props);
    this.state = {
      nombre: "",
      edad: "",
      error: true 
    }
    this.nombreHandler = this.nombreHandler.bind(this);
    this.edadHandler = this.edadHandler.bind(this);
  }

  nombreHandler(evt) {
    evt.preventDefault();
    const res = {
      nombre: evt.target.value,
      error: true 
    }  
    if (res.nombre.length >= 2)
      res.error = false;
    this.setState(res);
  }

  edadHandler(evt){
    evt.preventDefault();
    this.setState({
      edad: evt.target.value
    });
  }
  submit = (evt) => {
    evt.preventDefault();
    if(this.state.error)
      return;
    this.setState(
      {
	edad : this.state.edad - 10
      }, ()=>{
        //alert w/ library Swal
	  Swal.fire(this.state.nombre + " tenes " + this.state.edad + " años ;)");
      });
  }

  render(){
    return (<>
      <form onSubmit={this.submit}>
	<label htmlFor="fname"> Nombre </label>
	<input type="text" value={this.state.nombre} onChange={this.nombreHandler} id="name" name="fname" key="name"/>
	{this.state.error  && <span>Este campo debe tener mas de 2 caracteres</span>}
	<label htmlFor="edad"> Edad</label>
	<input type="text" value={this.state.edad} onChange={this.edadHandler} id="edad" name="edad" key="edad"/>
	<button type="submit"> Submit!</button>
      </form>
    </>);
  }
}
