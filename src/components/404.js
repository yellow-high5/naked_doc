import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1 className={'heading1'}>Page not found...</h1>
        <p className={'paragraph'}>
          Oops! The page you are looking for has been removed or relocated.
        </p>
        <img src="https://github.com/yellow-high5/naked_doc/blob/master/src/components/static/images/404.png?raw=true" />
      </div>
    );
  }
}

export default NotFound;
