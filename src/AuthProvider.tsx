import {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext(false);

const AuthProvider = ({children}) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/authenticated');
        const data = await response.json();
        const isAuthenticated = data.authenticated;
        console.log(isAuthenticated);

        setAuthenticated(isAuthenticated);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthenticationStatus();
  }, []);

  return (
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth};
