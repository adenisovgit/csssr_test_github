import React from 'react';
import connect from '../connect';

import Navbar from './navbar';
import Notification from '../features/ui/notification';
import Users from '../features/users/users';

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
          <div className="row">
            <Users />
            <main role="main" className="col-md-8 ml-sm-auto col-lg-8 pt-3 px-4">
              Здесь будет город сад
            </main>
          </div>
        </div>
        <Notification show={notificationShow} type={notificationType} message={message} />
      </>
    );
  }
}

export default App;
