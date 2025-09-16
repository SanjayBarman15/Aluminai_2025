"use client"

import { useAuth } from "@/components/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import type { ReactNode } from "react"

interface RouteGuardProps {
  children: ReactNode
  allowedUserTypes?: ("student" | "university" | "state")[]
  redirectTo?: string
}

export function RouteGuard({ children, allowedUserTypes, redirectTo = "/login" }: RouteGuardProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      // If no user is logged in, redirect to login
      if (!user) {
        router.push(redirectTo)
        return
      }

      // If user type restrictions exist, check if user is allowed
      if (allowedUserTypes && !allowedUserTypes.includes(user.userType)) {
        // Redirect to appropriate dashboard based on user type
        const dashboardMap = {
          student: "/student/dashboard",
          university: "/university/dashboard",
          state: "/admin/dashboard",
        }
        router.push(dashboardMap[user.userType])
        return
      }
    }
  }, [user, isLoading, router, allowedUserTypes, redirectTo])

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render children if user is not authenticated or not authorized
  if (!user || (allowedUserTypes && !allowedUserTypes.includes(user.userType))) {
    return null
  }

  return <>{children}</>
}
