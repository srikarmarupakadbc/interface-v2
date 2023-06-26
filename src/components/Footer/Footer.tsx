import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';
import 'components/styles/Footer.scss';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box className='footer'>
      {/* <Grid>
        <Box className='quick-icon'>
          <QuickIcon />
        </Box>
      </Grid> */}
      <QuickIcon />
      <p>
        Copyrights {copyrightYear} @ All Rights Reserved - Developed By
        Blackstallion Software LTD
      </p>
    </Box>
  );
};

export default Footer;
