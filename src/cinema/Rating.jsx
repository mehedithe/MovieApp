import React from 'react'

import Star from '../assets/star.svg';
const Rating = ({value}) => {

   const stars = Array(value).fill(Star);
  return (
     <div className='flex'>
        {
            stars.map((Star, index) => (
                <img key={index}
                src={Star}
                width="14"
                height="14"
                alt='star'
                />
            ) )
        }
     </div>
  )
}

export default Rating