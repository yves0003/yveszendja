import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuth } from "../context/auth"

const account = () => {
  const router = useRouter()
  const { user, loading } = useAuth()
  useEffect(() => {
    if (!loading && !user) {
      router.push("/", undefined, {
        shallow: true,
      })
    }
    user
  }, [router, user])
  return <>{user && <div className="container">account</div>}</>
}

export default account
