/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import User from '../ui/user';

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
        <User userLogin={userLogin} avatarURL={avatarURL} />
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
