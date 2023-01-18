import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="each_card">
      <p className="message">{props.message}</p>
      <ul className="card_info">
        <li className="like">
          <p
            onClick={() =>
              props.handleLikes(
                props.id,
                // props.board_id,
                props.boardId,
                props.message,
                // props.likes_count
                props.likesCount
              )
            }
          >
            +1❤️
          </p>
        </li>
        <li>
          <p>This message has {props.likesCount} ❤️s</p>
        </li>
        <li className="delete">
          <p onClick={() => props.handleDeleteCard(props.id)}>Delete Message</p>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  // board_id: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  // likes_count: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  handleLikes: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
};

export default Card;
