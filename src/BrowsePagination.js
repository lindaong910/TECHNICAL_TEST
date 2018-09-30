import React, { Component } from 'react';
import Pagination from "react-js-pagination";

export default class BrowsePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
 
  handlePageChange = pageNumber => {
    console.log('active page is ${pageNumber}');
    this.setState({
      activePage: pageNumber,
    });
  }
 
  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={12}
          totalItemsCount={48}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
        <img src={images}/>
      </div>
    );
  } 
  }
  
  
