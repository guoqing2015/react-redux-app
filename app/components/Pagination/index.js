import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './index.css';

export class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.handlePageClick = this.handlePageClick.bind(this)
  }

  static PropTypes = {
    goPage: PropTypes.func,
    pageCount: PropTypes.number,
    initialPage: PropTypes.number,
    isShowLast: PropTypes.bool,
    isShowNext: PropTypes.bool,
  }

  static defaultProps = {
    initialPage: 0
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.props.goPage(selected);
  };


  render() {

    const {pageCount, isShowLast, isShowNext, initialPage} = this.props;
    const previousLabel = isShowLast ? <div>返回上一题</div> : "";
    const nextLabel = isShowNext ? <div>确认，继续下一题</div> : "";


    return (
      <div className="pagination-wrap border-bottom">
        <ReactPaginate previousLabel={previousLabel}
                       nextLabel={nextLabel}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pageCount}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}
                       pageClassName={'page-li'}
                       previousClassName={'none page-last'}
                       nextClassName={'none page-next'}
                       initialPage={initialPage}
        />
      </div>
    );
  }

}


export default Pagination;