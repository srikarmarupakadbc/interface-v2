import React from 'react';
import { Box, Grid, Link } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';
import 'components/styles/Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Box className='footer'>
      <Grid container spacing={2} className='flex text-left'>
        <Grid item xs={6}>
          <Box className='quick-icon'>
            <QuickIcon />
          </Box>
          <p style={{ width: '90%' }}>
            {t(
              'Blackstallion Platform and The BS Token are products of (Blackstallion) company, which is based in Dubai - United Arab Emirates',
            )}
          </p>
        </Grid>
        <Grid item xs={6}>
          <Box className='flex justify-center'>
            <Grid container spacing={3}>
              <Grid item xs={3} spacing={3}>
                <h5>{t('MENU')}</h5>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Overview')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Dashboard')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Staking')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Rewards')}
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={3} spacing={3}>
                <h5>{t('PRODUCTS')}</h5>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Black Stallion')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Blackstallion Whitepaper')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Wallet')}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href='' underline='none' color='inherit'>
                    {t('Marketplace')}
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={3} spacing={3}>
                <h5>{t('COMPANY')}</h5>
                <Link href='' underline='none' color='inherit'>
                  {t('Whitepaper')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* <QuickIcon /> */}
      <p>
        Copyrights {copyrightYear} @ All Rights Reserved - Developed By
        Blackstallion Software LTD
      </p>
    </Box>
  );
};

export default Footer;
