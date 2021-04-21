import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategorie = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value)
    console.log('object')
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired,
}