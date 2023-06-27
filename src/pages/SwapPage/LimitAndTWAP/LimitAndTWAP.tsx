import {
  Limit as QuickSwapLimit,
  TWAP as QuickSwapTWAP,
  Orders as QuickSwapOrders,
} from '@orbs-network/twap-ui-quickswap';
import { CurrencySearchModal } from 'components';
import { useIsProMode, useActiveWeb3React } from 'hooks';
import { useAllTokens, useCurrency } from 'hooks/Tokens';
import useSwapRedirects from 'hooks/useSwapRedirect';
import React, { FC, useCallback } from 'react';
import { useWalletModalToggle } from 'state/application/hooks';
import {
  useDefaultsFromURLSearch,
  useSwapActionHandlers,
} from 'state/swap/hooks';
import { Field } from 'state/swap/v3/actions';
import { getTokenLogoURL } from 'utils/getTokenLogoURL';

const getLogo = (value: string) => {
  return getTokenLogoURL(value).find((it) => it !== 'error') as any;
};

function TWAPBase({ Component }: { Component: FC<any> }) {
  const { account, chainId, library } = useActiveWeb3React();
  const loadedUrlParams = useDefaultsFromURLSearch();
  const inputCurrencyId = loadedUrlParams?.inputCurrencyId;
  const outputCurrencyId = loadedUrlParams?.outputCurrencyId;

  const inputCurrency = useCurrency(inputCurrencyId);
  const outputCurrency = useCurrency(outputCurrencyId);

  const allTokens = useAllTokens();
  const toggleWalletModal = useWalletModalToggle();
  const onCurrencySelection = useSwapActionHandlers().onCurrencySelection;
  const { isProMode } = useIsProMode();
  const { redirectWithCurrency } = useSwapRedirects();

  const onSrcSelect = useCallback(
    (token: any) => {
      onCurrencySelection(Field.INPUT, token);
      redirectWithCurrency(token, true);
    },
    [onCurrencySelection, redirectWithCurrency],
  );

  const onDstSelect = useCallback(
    (token: any) => {
      onCurrencySelection(Field.OUTPUT, token);
      redirectWithCurrency(token, false);
    },
    [onCurrencySelection, redirectWithCurrency],
  );

  return (
    <>
      <Component
        isProMode={isProMode}
        connect={toggleWalletModal}
        connectedChainId={chainId}
        provider={library?.provider}
        account={account}
        dappTokens={allTokens as any}
        srcToken={inputCurrency?.symbol}
        dstToken={outputCurrency?.symbol}
        TokenSelectModal={CurrencySearchModal}
        onSrcTokenSelected={onSrcSelect}
        onDstTokenSelected={onDstSelect}
        getTokenLogoURL={getLogo}
      />
    </>
  );
}
export const TWAP = () => {
  return <TWAPBase Component={QuickSwapTWAP} />;
};

export const Limit = () => {
  return <TWAPBase Component={QuickSwapLimit} />;
};
