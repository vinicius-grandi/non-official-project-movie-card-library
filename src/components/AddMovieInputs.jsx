import React from 'react';
import PropTypes from 'prop-types';

const AddMovieInputs = ({ info, fn }) => {
  const maxLine = 5;
  const minLine = 0;
  return (
    <label htmlFor={ info[1] } data-testid={ `${info[4]}-input-label` }>
      {info[3]}
      <input
        type={ info[0] }
        id={ info[1] }
        max={ info[0] === 'number' ? maxLine : undefined }
        min={ info[0] === 'number' ? minLine : undefined }
        data-testid={ `${info[4]}-input` }
        value={ info[2] }
        onChange={ (e) => fn(e) }
      />
    </label>
  );
};

AddMovieInputs.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
  fn: PropTypes.func.isRequired,
};

export default AddMovieInputs;
