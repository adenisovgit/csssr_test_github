/* eslint-disable camelcase */
import React from 'react';
import { ListGroup } from 'react-bootstrap';

import connect from '../../connect';
import ControlPanel from '../ui/controlpanel';
import Issue from './issue';

const mapStateToProps = ({ issues }) => ({ issues });

@connect(mapStateToProps)
class Issues extends React.PureComponent {
  render() {
    const {
      issues, setCurrentPage, setPerPage, handleIssuesSearch, setIssuesState,
    } = this.props;
    const {
      perPage, currentPage, data: loadedIssues, issuesState, user, repo,
    } = issues;

    const handleChangePage = (newPage) => {
      setCurrentPage(newPage);
      handleIssuesSearch();
    };

    const handleChangePerPage = (newPerPage) => {
      setPerPage(newPerPage);
      handleIssuesSearch();
    };

    const handleChangeIssuesState = (state) => {
      setIssuesState(state);
      handleIssuesSearch();
    };

    const disabledControl = user === '' || repo === '';
    const issuesData = loadedIssues.map((issue) => ({
      id: issue.id,
      html: issue.html_url,
      title: issue.title,
      state: issue.state,
      created: issue.created_at,
      body: issue.body,
      userLogin: issue.user.login,
      avatarURL: issue.user.avatar_url,
    }));

    return (
      <main role="main" className="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4">
        <ControlPanel
          perPage={perPage}
          issuesState={issuesState}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          handleChangePerPage={handleChangePerPage}
          handleChangeIssuesState={handleChangeIssuesState}
          disabled={disabledControl}
        />
        <ListGroup as="ul">
          {issuesData.map((issue) => (
            <ListGroup.Item as="li" key={issue.id}>
              <Issue issue={issue} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </main>
    );
  }
}


export default Issues;
