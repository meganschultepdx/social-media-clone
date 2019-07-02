import React from 'react';
import UserCard from './UserCard';
import UserAbout from './UserAbout';

function LeftColumn() {
  return (
    <div>
      <UserCard/>
      <UserAbout/>
    </div>
  );
}

export default Header;