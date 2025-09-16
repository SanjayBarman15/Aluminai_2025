"use client"

import { useAuth } from "@/components/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, Target, MessageCircle, Calendar, TrendingUp, Search } from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"
import { RouteGuard } from "@/components/route-guard"

export default function StudentDashboard() {
  const { user } = useAuth()

  // Mock data for demonstration
  const connections = 12
  const profileCompletion = 75
  const upcomingEvents = [
    { id: 1, title: "Tech Career Fair", date: "Dec 15, 2024", type: "Virtual" },
    { id: 2, title: "Alumni Networking Mixer", date: "Dec 20, 2024", type: "In-person" },
  ]

  const suggestedAlumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      graduationYear: "2019",
      matchScore: 95,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Microsoft",
      graduationYear: "2018",
      matchScore: 88,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      graduationYear: "2020",
      matchScore: 82,
    },
  ]

  const recentActivity = [
    { id: 1, type: "connection", message: "John Smith accepted your connection request", time: "2 hours ago" },
    { id: 2, type: "message", message: "New message from Lisa Wang", time: "5 hours ago" },
    { id: 3, type: "event", message: "Reminder: Tech Career Fair tomorrow", time: "1 day ago" },
  ]

  return (
    <RouteGuard allowedUserTypes={["student"]}>
      <StudentLayout>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.firstName}!</h1>
              <p className="text-muted-foreground">Here's what's happening in your network today</p>
            </div>
            <Button asChild>
              <Link href="/student/discover">
                <Search className="h-4 w-4 mr-2" />
                Discover Alumni
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Connections</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{connections}</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{profileCompletion}%</div>
                <Progress value={profileCompletion} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 unread messages</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Events</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{upcomingEvents.length}</div>
                <p className="text-xs text-muted-foreground">Upcoming this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Suggested Alumni */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Suggested Connections
                </CardTitle>
                <CardDescription>Alumni who match your career interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedAlumni.map((alumni) => (
                  <div
                    key={alumni.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/abstract-geometric-shapes.png?height=40&width=40&query=${alumni.name}`} />
                        <AvatarFallback>
                          {alumni.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{alumni.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {alumni.role} at {alumni.company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            Class of {alumni.graduationYear}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {alumni.matchScore}% match
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/student/discover">View All Suggestions</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Stay updated with your network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Don't miss these networking opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <Badge variant={event.type === "Virtual" ? "secondary" : "outline"}>{event.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </StudentLayout>
    </RouteGuard>
  )
}
