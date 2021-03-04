import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import Person from './Person';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const reviewsUrl = 'http://localhost:3001/reviews';

const Reviews = (props) => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(reviewsUrl)
      .then((review) => {
        setUsers(review.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const displayPrevious = () =>
    index === 0 ? setIndex(users.length - 1) : setIndex(index - 1);

  const displayNext = () =>
    index >= users.length - 1 ? setIndex(0) : setIndex(index + 1);

  return (
    <>
      <Person {...users[index]}></Person>
      <div className='nav-container'>
        <FaChevronLeft onClick={displayPrevious} className='prev-btn'>
          Previous
        </FaChevronLeft>
        <FaChevronRight onClick={displayNext} className='next-btn'>
          Next
        </FaChevronRight>
      </div>
      <button
        onClick={() => setIndex(Math.floor(Math.random() * users.length))}
        className='random-btn'
      >
        surprise me
      </button>
    </>
  );
};

Reviews.propTypes = {};

export default Reviews;
