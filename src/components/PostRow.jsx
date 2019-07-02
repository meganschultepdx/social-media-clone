import React from 'react';
import PropTypes from 'prop-types';

function PostRow(props) {
  return (
    <div>
      <img src="{props.userPic}" alt="profile Picture"></img>
      <h2>{props.userName}</h2>
      <h3>{props.userPost}</h3>
    </div>
  );
}

PostRow.propTypes = {
  userPic: PropTypes,
  userName: PropTypes.string.isRequired,
  userPost: PropTypes.string.isRequired,
};

export default Header;