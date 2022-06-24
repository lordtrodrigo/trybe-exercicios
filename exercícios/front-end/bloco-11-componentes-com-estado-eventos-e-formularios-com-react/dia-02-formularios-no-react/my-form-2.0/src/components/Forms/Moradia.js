import React from 'react';

class Moradia extends React.Component {
    render() {
        return (
            <div className="sec">
                Moradia:
                <label htmlFor="casa" >
                    Casa<input name="home" required id="casa" type="radio" />
                </label>

                <label htmlFor="apartamento" >
                    Apartamento<input name="home" required id="apartamento" type="radio" />
                </label>
            </div>
        );
    }
}

export default Moradia;