import React, { createContext, useState } from 'react';

const UserContext = createContext<any>({ user: null });

const UserProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
