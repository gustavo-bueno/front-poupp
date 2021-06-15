import React, { createContext, useState } from 'react';

const MovimentationContext = createContext<any>({ Movimentation: null });

const MovimentationProvider: React.FC<{}> = ({ children }) => {
  const [movimentations, setMovimentations] = useState<any>([]);

  const addMovimentation = (movimentation: any) => {
    setMovimentations((state: any) => [...state, movimentation]);
  };

  return (
    <MovimentationContext.Provider value={{ movimentations, addMovimentation }}>
      {children}
    </MovimentationContext.Provider>
  );
};

export { MovimentationContext, MovimentationProvider };
