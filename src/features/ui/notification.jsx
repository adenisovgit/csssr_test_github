/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';

import connect from '../../connect';


// export const notifications = {
//   requestStart: { text: 'requeststart', status: 'secondary' },
//   requestSuccess: { text: 'requestsuccess', status: 'success' },
//   requestFailure: { text: 'requestfailure', status: 'warning' },
// };

const autoCloseTime = 3000;

function Notification(props) {
  const {
    show, type, message, closeNotification,
  } = props;

  const [timerId, timerIdUpdate] = useState(0);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeNotification(type));
  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    if (show) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseTime);
      timerIdUpdate(timer);
    }
  }, [show, type]);

  return show && (
    <Alert
      className="zindex-tooltip fixed-bottom"
      show={show}
      variant={type}
      onClose={handleClose}
      dismissible
    >
      {message}
    </Alert>
  );
}

export default connect(null)(Notification);
