import React from 'react';

class Cpf extends React.Component {
    render() {
        const { handleChange, estado } = this.props;

        return (
            <label className="sec">
                CPF:
                <input
                    name='cpf'
                    value={ estado }
                    onChange={ handleChange }
                    className="input"
                    type="number"
                    required
                />
            </label>
        );
    }
}

export default Cpf;