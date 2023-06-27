import { Box, Divider, Grid } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { AdsSlider, SwapTokenDetailsHorizontal } from 'components';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SwapBuySellMiniWidget } from './BuySellWidget';
import LiquidityPools from './LiquidityPools';
import SwapMain from './SwapMain';
import SwapNewsWidget from './SwapNewWidget';
import { Orders as QuickSwapOrders } from '@orbs-network/twap-ui-quickswap';
import { useAllTokens } from '../../hooks/Tokens';
import { useActiveWeb3React } from '../../hooks';
import { getTokenLogoURL } from '../../utils/getTokenLogoURL';
import { getConfig } from '../../config';
import useParsedQueryString from '../../hooks/useParsedQueryString';

type NavParams = {
  swapIndex: string | undefined;
};

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SwapDefaultMode: React.FC<{
  token1: any;
  token2: any;
}> = ({ token1, token2 }) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const query = useQuery();
  const [disabledLeft, setDisabledLeft] = useState(false);
  const allTokens = useAllTokens();
  const { account, chainId, library } = useActiveWeb3React();
  const config = getConfig(chainId);

  const showLimitOrder = config['swap']['limitOrder'];
  const parsedQs = useParsedQueryString();
  const swapType = parsedQs.swapIndex;
  const getLogo = (value: string) => {
    return getTokenLogoURL(value).find((it) => it !== 'error') as any;
  };
  useEffect(() => {
    if (query.get('swapIndex') === '4') {
      setDisabledLeft(true);
      setLeftOpen(false);
    } else {
      setLeftOpen(true);
      setDisabledLeft(false);
    }
  }, [query]);

  return (
    <Grid>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box className='wrapper'>
            <SwapMain />
          </Box>
          {/* <Box sx={{ marginTop: '16px' }}>
            <AdsSlider sort='swap' />
          </Box> */}
        </Grid>
        {showLimitOrder && Number(swapType) === 3 && (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={'wrapper p-1'}>
              <QuickSwapOrders
                dappTokens={allTokens as any}
                provider={library?.provider}
                account={account}
                getTokenLogoURL={getLogo}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default SwapDefaultMode;
