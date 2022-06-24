import React from 'react';

class Email extends React.Component {
    render() {
        const { handleChange, estado } = this.props;

        return (
            <label className="sec">
                E-mail:
                <input
                    name="email"
                    value={ estado }
                    onChange={ handleChange }
                    className="input"
                    type="email"
                    required
                />
            </label>
        );
    }
}

export default Email;