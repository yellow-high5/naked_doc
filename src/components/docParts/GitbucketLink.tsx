import React from 'react';

const gitbucketIcon = require('../static/images/gitbucket.svg');

const GitbucketLink = ({ link, text }) => {
  return (
    <a href={link} className="githubSection" target="_blank">
      <img className="githubIcon" src={gitbucketIcon} alt="github" />
      {text}
    </a>
  );
};

export default GitbucketLink;
