/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import connect from '../../connect';


const mapStateToProps = ({ users: { perPage, page, total } }) => {
  const props = { perPage, page, total };
  return props;
};

@connect(mapStateToProps)
class Paginator extends React.PureComponent {
  render() {
    const { perPage, page, total } = this.props;
    return (
      <nav aria-label="Paginator">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Paginator;
