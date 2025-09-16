"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  userType: "student" | "university" | "state"
  organization?: string
  description?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, userType: string) => Promise<boolean>
  register: (userData: any) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("alumni-portal-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      document.cookie = `alumni-portal-auth=true; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, userType: string): Promise<boolean> => {
    try {
      // TODO: Replace with actual API call
      const mockUser: User = {
        id: "1",
        email,
        firstName: "John",
        lastName: "Doe",
        userType: userType as "student" | "university" | "state",
        organization: "Example University",
      }

      setUser(mockUser)
      localStorage.setItem("alumni-portal-user", JSON.stringify(mockUser))
      document.cookie = `alumni-portal-auth=true; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
      return true
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const register = async (userData: any): Promise<boolean> => {
    try {
      // TODO: Replace with actual API call
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        userType: userData.userType,
        organization: userData.organization,
        description: userData.description,
      }

      setUser(newUser)
      localStorage.setItem("alumni-portal-user", JSON.stringify(newUser))
      document.cookie = `alumni-portal-auth=true; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
      return true
    } catch (error) {
      console.error("Registration failed:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("alumni-portal-user")
    document.cookie = "alumni-portal-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
