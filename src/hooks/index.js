import React from 'react';
import { BattleProvider } from './battle';

const AppProvider = ({ children }) => (
  <>
    <BattleProvider>{children}</BattleProvider>
  </>
);

export default AppProvider;
