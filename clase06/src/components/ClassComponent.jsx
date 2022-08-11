import React, { Component } from 'react'
export default class ClassComponent extends Component {
    render() {
        const {nombre, estaEnLista} = this.props;
        return (
            //<li>TuNombre está invitado a la fiesta</li>
            <li>{nombre} {estaEnLista ? "esta" : "no está"} invitado a la fiesta</li>
        )
    }
}