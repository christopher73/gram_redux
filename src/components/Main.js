import React from 'react';
// import { Link } from 'react-router-dom';
// import PhotoGrid from './PhotoGrid';
class Main extends React.Component {
  render() {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center m-auto">
            <h1 className="blog-header-logo text-dark">THE_GRAM</h1>
          </div>
        </div>
      </header>
    );
  }
}
export default Main;
