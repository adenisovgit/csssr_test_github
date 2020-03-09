/* eslint-disable camelcase */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../../connect';

import Paginator from '../ui/paginator';

const mapStateToProps = ({ users }) => ({ usersData: users.data });

@connect(mapStateToProps)
class Users extends React.PureComponent {
  render() {
    const {
      usersData, // activeChannel, setActiveChannel,
    } = this.props;
    console.log('!!!!!!!!!!!!!!!!!!!!  ', usersData);
    return (
      <div className="col-md-4 bg-light sidebar users scroll">
        <Paginator />
        {/* <ListGroup as="ul">
          {usersData.map(({
            login, id, avatar_url,
          }) => (
            <ListGroup.Item as="li" key={id}>
              <span>
                <img className="avatar" src={avatar_url} alt="" />
                <div className="usernameClassnames">{login}</div>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup> */}
      </div>
    );
  }
}


export default Users;
