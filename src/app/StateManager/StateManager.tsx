import { StoreContext, store } from '@/contexts/Store';

import type { ReactNode } from 'react';

interface IStateManagerProperties {
  children: ReactNode;
}

export const StateManager = ({
  children,
}: IStateManagerProperties): JSX.Element => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
