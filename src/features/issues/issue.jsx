/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';


const Issue = (props) => {
  const {
    issue: {
      id, html, title, state, created, body, userLogin, avatarURL,
    },
  } = props;
  let stateClass = 'badge badge-warning';
  if (state === 'closed') {
    stateClass = 'badge badge-success';
  } else if (state === 'open') {
    stateClass = 'badge badge-info';
  }

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <a href={`https://github.com/${userLogin}`} target="_blank" rel="noopener noreferrer">
            <img className="avatar" src={avatarURL} alt="" />
            <div className="username">{userLogin}</div>
          </a>
        </div>
        <div className="col col-lg-3">
          <span>ID: {id} </span>
          <span className={stateClass}>{state}</span>
          <p>{title}</p>
          <p>Created: {created}</p>
        </div>
        <div className="col-lg-7">
          <a href={html} target="_blank" rel="noopener noreferrer">{html}</a>
          <p className="max-lines">{body}</p>
        </div>
      </div>
    </div>
  );
};


export default Issue;
