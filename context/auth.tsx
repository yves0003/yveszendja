import { createContext, FC, useContext, useEffect, useState } from "react"
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth"
import firebaseApp from "../config/firebase"

interface IAuth {
  user: User | undefined
  loginGoogle: () => void
  loginTwitter: () => void
  logout: () => void
}

const auth = getAuth(firebaseApp)

const loginGoogle = async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider())
  } catch (error) {
    console.log(error)
  }
}

const loginTwitter = async () => {
  try {
    await signInWithPopup(auth, new TwitterAuthProvider())
  } catch (error) {
    console.log(error)
  }
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

const AuthContext = createContext<IAuth>({} as IAuth)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser(undefined)
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <AuthContext.Provider value={{ user, loginGoogle, loginTwitter, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
