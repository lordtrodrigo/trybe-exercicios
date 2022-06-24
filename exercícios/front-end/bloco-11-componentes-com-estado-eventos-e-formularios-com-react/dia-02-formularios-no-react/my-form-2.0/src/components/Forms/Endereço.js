import React from 'react';

class Endereço extends React.Component {
    render() {
        const { handleChange, estado } = this.props;

        return (
            <label className="sec">
                Endereço:
                <input
                    name="endereco"
                    value={ estado }
                    onChange={ handleChange }
                    className="input"
                    type="text"
                    required
                />
            </label>
        );
    }
}

export default Endereço;