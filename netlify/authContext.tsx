import { useState, createContext, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
})

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)
  const [authReady, setAuthReady] = useState<boolean>(false)

  //initialize the netlify identity widget
  useEffect(() => {
    netlifyIdentity.on('login', user => {
      setUser(user)
      netlifyIdentity.close()
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
    })

    netlifyIdentity.on('init', user => {
      setUser(user)
      setAuthReady(true)
    })

    //initializes netlify connection
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  const context = { user, login, logout, authReady }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
