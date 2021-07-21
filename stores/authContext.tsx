import { useState, createContext, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
});

export function AuthContextProvider({children}: any) {
  const [ user, setUser ] = useState<any>(null)

  //initialize the netlify identity widget
  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user)
      netlifyIdentity.close()
      console.log("Login event")
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
      console.log("logout event")
    })

    //initializes netlify connection
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  },[])

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = { user, login, logout }

  return(
    <AuthContext.Provider value = {context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;