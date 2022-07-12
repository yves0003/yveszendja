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
  loading: boolean
}

const auth = getAuth(firebaseApp)

const loginGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider())
    const { refreshToken, providerData } = user
    localStorage.setItem("user", JSON.stringify(providerData))
    localStorage.setItem("accessToken", JSON.stringify(refreshToken))
  } catch (error) {
    console.log(error)
  }
}

const loginTwitter = async () => {
  try {
    const { user } = await signInWithPopup(auth, new TwitterAuthProvider())
    const { refreshToken, providerData } = user
    localStorage.setItem("user", JSON.stringify(providerData))
    localStorage.setItem("accessToken", JSON.stringify(refreshToken))
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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser(undefined)
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <AuthContext.Provider value={{ user, loading, loginGoogle, loginTwitter, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
