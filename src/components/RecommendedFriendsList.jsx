import React from 'react';
import RecommendedFriendsRow from './PRecommendedFriendsRow';

let masterRecommendedFriendsList = [
  {
    userPic: '',
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  },
  {
    userPic: '',
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  },
  {
    userPic: '',
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  }
];



function RecommendedFriendsList() {
  return (
    <div>
      <hr/>
      {masterRecommendedFriendsList.map((recommendedFriendsRow, index) =>
        <Post userPic={recommendedFriendsRow.userPic}
          userName={recommendedFriendsRow.userName}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;