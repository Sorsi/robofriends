import React from 'react';

const Card = (props) => {
  return (
    <div className='tc bg-gold dib br3 pa3 ma2 grow dim bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?200x200`} alt='robots' />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
