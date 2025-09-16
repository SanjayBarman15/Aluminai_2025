"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, GraduationCap, TrendingUp, Building2, Plus, BarChart3, Calendar } from "lucide-react"
import Link from "next/link"
import { UniversityLayout } from "@/components/university-layout"
import { RouteGuard } from "@/components/route-guard"

export default function UniversityDashboard() {
  // Mock data for demonstration
  const stats = {
    totalAlumni: 2847,
    activeAlumni: 1923,
    newRegistrations: 47,
    engagementRate: 68,
  }

  const recentAlumni = [
    {
      id: 1,
      name: "Alex Johnson",
      graduationYear: "2024",
      major: "Computer Science",
      currentRole: "Software Engineer",
      company: "Tech Startup",
      registeredDate: "2 days ago",
    },
    {
      id: 2,
      name: "Maria Garcia",
      graduationYear: "2023",
      major: "Business Administration",
      currentRole: "Marketing Manager",
      company: "Fortune 500",
      registeredDate: "1 week ago",
    },
    {
      id: 3,
      name: "David Chen",
      graduationYear: "2024",
      major: "Engineering",
      currentRole: "Product Manager",
      company: "Startup Inc",
      registeredDate: "2 weeks ago",
    },
  ]

  const topIndustries = [
    { name: "Technology", count: 892, percentage: 31 },
    { name: "Healthcare", count: 568, percentage: 20 },
    { name: "Finance", count: 427, percentage: 15 },
    { name: "Education", count: 341, percentage: 12 },
    { name: "Manufacturing", count: 284, percentage: 10 },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Gala",
      date: "Dec 15, 2024",
      attendees: 245,
      type: "In-person",
    },
    {
      id: 2,
      title: "Career Networking Session",
      date: "Dec 22, 2024",
      attendees: 89,
      type: "Virtual",
    },
  ]

  return (
    <RouteGuard allowedUserTypes={["university"]}>
      <UniversityLayout>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">University Dashboard</h1>
              <p className="text-muted-foreground">Manage your alumni network and track engagement</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/university/alumni/add">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Alumni
                </Link>
              </Button>
              <Button asChild>
                <Link href="/university/reports">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalAlumni.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Registered in system</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Alumni</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeAlumni.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Active in last 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{stats.newRegistrations}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.engagementRate}%</div>
                <Progress value={stats.engagementRate} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Alumni Registrations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Alumni Registrations</CardTitle>
                <CardDescription>New alumni who joined the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlumni.map((alumni) => (
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
                          {alumni.currentRole} at {alumni.company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            Class of {alumni.graduationYear}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {alumni.major}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{alumni.registeredDate}</p>
                      <Button size="sm" variant="outline" className="mt-1 bg-transparent">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/university/alumni">View All Alumni</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Top Industries */}
            <Card>
              <CardHeader>
                <CardTitle>Alumni by Industry</CardTitle>
                <CardDescription>Where your graduates are working</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topIndustries.map((industry) => (
                  <div key={industry.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{industry.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {industry.count} ({industry.percentage}%)
                      </span>
                    </div>
                    <Progress value={industry.percentage} className="h-2" />
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/university/analytics">View Detailed Analytics</Link>
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
              <CardDescription>Alumni events and networking opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <Badge variant={event.type === "Virtual" ? "secondary" : "outline"}>{event.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-sm text-muted-foreground mb-3">{event.attendees} registered attendees</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Manage Event
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="ghost" asChild>
                  <Link href="/university/events">View All Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks for managing your alumni network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/university/alumni/add">
                    <Plus className="h-6 w-6" />
                    Register New Alumni
                  </Link>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/university/events/create">
                    <Calendar className="h-6 w-6" />
                    Create Event
                  </Link>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
                  <Link href="/university/reports">
                    <BarChart3 className="h-6 w-6" />
                    Generate Report
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </UniversityLayout>
    </RouteGuard>
  )
}
