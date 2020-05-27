import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1 className={'heading1'}>Page not found...</h1>
        <p className={'paragraph'}>
          Oops! The page you are looking for has been removed or relocated.
        </p>
        <img src="https://user-images.githubusercontent.com/14067398/83032878-5a99d100-a071-11ea-8f43-14848cd3b62b.png" />
      </div>
    );
  }
}

export default NotFound;
