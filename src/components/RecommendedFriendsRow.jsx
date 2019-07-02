import React from 'react';
import PropTypes from 'prop-types';

function RecommendedFriendsRow(props) {
  return (
    <div>
      <img src="{props.userPic}" alt="profile Picture"></img>
      <h2>{props.userName}</h2>
    </div>
  );
}

PostRow.propTypes = {
  userPic: PropTypes,
  userName: PropTypes.string.isRequired,
};

export default Header;