import React from 'react';
import PropTypes from 'prop-types';



class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <div className='text'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight: {this.props.pokemon.averageWeight.value}{this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={this.props.pokemon.image} alt='pokemon' />
      </div >
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired
  })
};

export default Pokemon;
