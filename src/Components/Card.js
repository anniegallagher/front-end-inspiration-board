import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {


  return (
  <div className='each_card'> 
    <p>{props.card.message}</p>
    <ul className='card_info'>
      <li><p>{props.card.likes_count} 👍</p></li>
      <li><p onClick={() => props.handleLikes(props.card)}>+1</p></li>
      <li><p onClick={() => props.deleteCard(props.card)}>Delete</p></li>
    </ul>
  </div>);
};


Card.propTypes = {
  card: PropTypes.string,
  handleLikes: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default Card;