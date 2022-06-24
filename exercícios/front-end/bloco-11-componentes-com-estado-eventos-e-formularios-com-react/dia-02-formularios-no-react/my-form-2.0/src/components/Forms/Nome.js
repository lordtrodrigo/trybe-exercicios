import React from 'react';

class Nome extends React.Component {
    render() {
        const { handleChange, estado } = this.props;

        return (
            <label className="sec">
                Nome:
                <input
                    name="nome" 
                    value={ (estado).toUpperCase() } 
                    onChange={ handleChange } 
                    className="input" 
                    type="text"
                    required
                    maxLength={40}
                />
            </label>
        );
    }
}

export default Nome;
