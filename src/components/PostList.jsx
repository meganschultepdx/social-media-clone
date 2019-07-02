import React from 'react';
import PostRow from './PostRow';

let masterPostList = [
  {
    userPic: '' ,
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  },
  {
    userPic: '',
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  },
  {
    userPic:'',
    userName: 'Lorem ipsum',
    userPost: 'Lorem ipsum dolor sit',
  }
];



function PostList() {
  return (
    <div>
      <hr/>
      {masterPostList.map((postRow, index) =>
        <Post userPic={postRow.userPic}
          userName={postRow.userName}
          post={postRow.userPost}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;