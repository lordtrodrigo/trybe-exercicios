import React from 'react';

class Cidade extends React.Component {
    render() {
        const { handleChange, estado } = this.props;

        return (
            <label className="sec">
                Cidade:
                <input
                    name='cidade'
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

export default Cidade;