"use client"

import { useAuth } from "@/components/auth-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Home, User, Search, MessageCircle, Calendar, Settings, LogOut, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface StudentLayoutProps {
  children: ReactNode
}

export function StudentLayout({ children }: StudentLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/student/dashboard", icon: Home },
    { name: "My Profile", href: "/student/profile", icon: User },
    { name: "Discover", href: "/student/discover", icon: Search },
    { name: "Connections", href: "/student/connections", icon: Users },
    { name: "Messages", href: "/student/messages", icon: MessageCircle },
    { name: "Events", href: "/student/events", icon: Calendar },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/student/dashboard" className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Alumni Portal</h1>
                <p className="text-xs text-muted-foreground">Student Dashboard</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={`/abstract-geometric-shapes.png?height=40&width=40&query=${user?.firstName} ${user?.lastName}`}
                    />
                    <AvatarFallback>
                      {user?.firstName?.[0]}
                      {user?.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/student/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/student/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-b border-border bg-card">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-4 overflow-x-auto">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
