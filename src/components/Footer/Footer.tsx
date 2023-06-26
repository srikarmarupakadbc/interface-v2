import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';
import 'components/styles/Footer.scss';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 text-left'>
            <img
              src='data:image/png;base64,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'
              style={{
                width: '150px',
              }}
            />
            <p className='logo-dec'>
              Blackstallion Platform and The BS Token are products of
              (Blackstallion) company, which is based in Dubai - United Arab
              Emirates
            </p>
            {/*<div className='col-lg-12 social-icon'>*/}
            {/*  <a*/}
            {/*    href='https://www.reddit.com/r/BlackStallion_io/'*/}
            {/*    target='blank'*/}
            {/*  >*/}
            {/*    <img src='reddit.png' />{' '}*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href='https://t.me/blackstallionio_announcement'*/}
            {/*    target='blank'*/}
            {/*  >*/}
            {/*    <img src='telegram.png' />{' '}*/}
            {/*  </a>*/}
            {/*  <a href='https://black-stallion.medium.com/' target='blank'>*/}
            {/*    <img src='medium.png' />{' '}*/}
            {/*  </a>*/}
            {/*  <a href='https://twitter.com/BlackStallionio' target='blank'>*/}
            {/*    <img src='tweeter.webp' />{' '}*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href='https://www.youtube.com/@blackstallionio/featured'*/}
            {/*    target='blank'*/}
            {/*  >*/}
            {/*    <img src='youtube.webp' />*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href='https://www.linkedin.com/company/black-stallion'*/}
            {/*    target='blank'*/}
            {/*  >*/}
            {/*    <img src='linkdin.webp' />{' '}*/}
            {/*  </a>*/}
            {/*  <a href='https://discord.gg/cfKuN4BjNc' target='blank'>*/}
            {/*    <img src='discord.png' />{' '}*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          <div className='col-lg-5 flex-box'>
            <div className='menu-list'>
              <h2>MENU</h2>
              <ul>
                <li>
                  <a href='https://bsstaking.io/'>Overview</a>
                  <a href='https://bsstaking.io/dashboard'>Dashboard</a>
                  <a href='https://bsstaking.io/staking'>Staking</a>
                  <a href='https://bsstaking.io/rewards'>Rewards</a>
                </li>
              </ul>
            </div>
            <div className='menu-list'>
              <h2>PRODUCTS</h2>
              <ul>
                <li>
                  <a href='https://black-stallion.io/' target='blank'>
                    <a>Black Stallion</a>
                  </a>
                </li>
                <li>
                  <a
                    href='https://black-stallion.io/WhitePaper-BlackStallion.pdf'
                    target='blank'
                  >
                    Blackstallion Whitepaper
                  </a>
                </li>
                <li>
                  <a href='https://bswallet.io' target='blank'>
                    Wallet
                  </a>
                </li>
                <li>
                  <a href='https://bsmarketplace.io/' target='blank'>
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>
            <div className='menu-list'>
              <h2>COMPANY</h2>
              <ul>
                <li>
                  <a
                    target='_blank'
                    href='https://black-stallion.io/WhitePaper-BlackStallion.pdf'
                    rel='noreferrer'
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>
        Copyrights {copyrightYear} @ All Rights Reserved - Developed By
        Blackstallion Software LTD
      </p>
    </Box>
  );
};

export default Footer;
