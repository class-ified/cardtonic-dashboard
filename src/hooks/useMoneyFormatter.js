import {balanceFormatter} from 'utils';
import React from 'react';

export function useMoneyformatter(balance) {
  return React.useMemo(() => balanceFormatter(balance || 0), [balance]);
}
