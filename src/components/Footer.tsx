import styled from '@emotion/styled';
import React from 'react';

import config from '../../config.ts';

const StyledFooter = styled('div')`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${config.footer.background_color};
  color: ${config.footer.color};
  position: relative;
`;

const Footer = ({}) => (
  <StyledFooter>
    <span>{`© ${new Date().getFullYear()} ${config.footer.supporter}`}</span>
  </StyledFooter>
);

export default Footer;
