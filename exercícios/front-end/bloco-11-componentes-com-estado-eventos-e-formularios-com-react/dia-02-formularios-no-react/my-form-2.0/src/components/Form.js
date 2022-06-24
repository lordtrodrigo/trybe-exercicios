import React, { Component } from 'react';

import Nome from './Forms/Nome';
import Email from './Forms/Email';
import Cpf from './Forms/Cpf';
import Endereço from './Forms/Endereço';
import Cidade from './Forms/Cidade';
import Estado from './Forms/Estado';
import Moradia from './Forms/Moradia';

class Form extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            nome: '',
            email: '',
            cpf: undefined,
            endereço: '',
            cidade: '',
            estado: '',
            moradia: '',
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    limiteDeCaracteres(limite) {

    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Preencha o formulário a seguir</legend>

                    <Nome
                        estado={this.state.nome}
                        handleChange={this.handleChange}
                    />

                    <Email
                        estado={this.state.email}
                        handleChange={this.handleChange}
                    />

                    <Cpf
                        estado={this.state.cpf}
                        handleChange={this.handleChange}
                    />

                    <Endereço
                        estado={this.state.endereco}
                        handleChange={this.handleChange}
                    />

                    <Cidade
                        estado={this.state.cidade}
                        handleChange={this.handleChange}
                    />

                    <Estado
                        estado={this.state.estado}
                        handleChange={this.handleChange}
                    />

                    <Moradia
                        estado={this.state.moradia}
                        handleChange={this.handleChange}
                    />

                </fieldset>
            </form>
        );
    }
}

export default Form;
