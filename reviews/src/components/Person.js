import React from 'react';
import PropTypes from 'prop-types';
import { FaQuoteRight } from 'react-icons/fa';

const Person = ({ id, name, image, text, job }) => {
  return (
    <article className='review'>
      <div className='image-container'>
        <img src={image} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
    </article>
  );
};

Person.propTypes = {};

export default Person;
