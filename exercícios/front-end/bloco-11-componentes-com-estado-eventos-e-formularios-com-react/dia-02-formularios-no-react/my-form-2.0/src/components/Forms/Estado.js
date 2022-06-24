import React from 'react';
import estados from '../Data/estados';

class Estados extends React.Component {
    constructor() {
        super();

        this.adicionaEstados = this.adicionaEstados.bind(this);
    }
    
    
    adicionaEstados(array) {
        const { handleChange, estado } = this.props;

        return array.map((province) =>
            <option
                onChange={ handleChange }
                key={province.nome}
                value={province.nome}
            >{province.nome}</option>)
    }
    render() {

        return (
            <label className="sec">
                Estado:
                <select required >
                    {this.adicionaEstados(estados)}
                </select>

            </label>
        );
    }
}

export default Estados;
