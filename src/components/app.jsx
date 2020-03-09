import React from 'react';
import connect from '../connect';

import Navbar from './navbar';
import Notification from '../features/ui/notification';
import Issues from '../features/issues/issues';

const mapStateToProps = ({ ui }) => {
  const props = { ui };
  return props;
};

@connect(mapStateToProps)
class App extends React.PureComponent {
  render() {
    const { ui: { notificationShow, notificationType, message } } = this.props;
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <Issues />
        </div>
        <Notification show={notificationShow} type={notificationType} message={message} />
      </>
    );
  }
}

export default App;
