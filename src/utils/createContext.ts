import React, {useContext, createContext} from 'react';

function createVmContext<T>(defaultValue: T): {
  useVmContext: () => T;
  context: React.Context<T>;
} {
  const context = createContext<T>(defaultValue);

  function useVmContext(): T {
    const c = useContext(context);
    if (c === undefined) {
      throw new Error('useVmContext must be used within a Provider');
    }
    return c;
  }

  return {context, useVmContext};
}

export default createVmContext;
