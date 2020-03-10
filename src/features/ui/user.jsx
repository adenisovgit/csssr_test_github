import React from 'react';

const User = (props) => {
  const {
    userLogin, avatarURL,
  } = props;

  return (
    <div className="col col-lg-2">
      <a href={`https://github.com/${userLogin}`} target="_blank" rel="noopener noreferrer">
        <img className="img-fluid rounded" src={avatarURL} alt="" />
        <div className="username">{userLogin}</div>
      </a>
    </div>
  );
};

export default User;
