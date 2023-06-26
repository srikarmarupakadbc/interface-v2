import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';
import 'components/styles/Footer.scss';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box className='footer'>
      <QuickIcon />
      <p>© {copyrightYear} Black Stallion.</p>
    </Box>
  );
};

export default Footer;
