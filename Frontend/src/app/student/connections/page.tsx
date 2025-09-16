"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, MessageCircle, UserPlus, UserCheck, Clock, MapPin, GraduationCap } from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"

export default function ConnectionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [industryFilter, setIndustryFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  // Mock connections data
  const connections = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      graduationYear: "2019",
      major: "Computer Science",
      industry: "Technology",
      connectionDate: "2 months ago",
      mutualConnections: 5,
      lastInteraction: "1 week ago",
      status: "connected",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      graduationYear: "2018",
      major: "Business Administration",
      industry: "Technology",
      connectionDate: "3 months ago",
      mutualConnections: 3,
      lastInteraction: "2 days ago",
      status: "connected",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      graduationYear: "2020",
      major: "Statistics",
      industry: "Entertainment",
      connectionDate: "1 month ago",
      mutualConnections: 7,
      lastInteraction: "3 days ago",
      status: "connected",
    },
  ]

  const pendingRequests = [
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      graduationYear: "2021",
      major: "Design",
      industry: "Technology",
      requestDate: "2 days ago",
      mutualConnections: 2,
      status: "pending_received",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "Salesforce",
      location: "San Francisco, CA",
      graduationYear: "2017",
      major: "Marketing",
      industry: "Technology",
      requestDate: "1 week ago",
      mutualConnections: 4,
      status: "pending_sent",
    },
  ]

  const suggestions = [
    {
      id: 6,
      name: "James Thompson",
      role: "Financial Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      graduationYear: "2019",
      major: "Finance",
      industry: "Finance",
      mutualConnections: 3,
      matchScore: 85,
      status: "suggested",
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Software Engineer",
      company: "Apple",
      location: "Cupertino, CA",
      graduationYear: "2020",
      major: "Computer Science",
      industry: "Technology",
      mutualConnections: 6,
      matchScore: 92,
      status: "suggested",
    },
  ]

  const filteredConnections = connections.filter((connection) => {
    const matchesSearch =
      searchQuery === "" ||
      connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.role.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesIndustry = industryFilter === "all" || connection.industry === industryFilter
    const matchesLocation = locationFilter === "all" || connection.location.includes(locationFilter)

    return matchesSearch && matchesIndustry && matchesLocation
  })

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Network</h1>
            <p className="text-muted-foreground">Manage your professional connections and discover new opportunities</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/student/discover">
                <UserPlus className="h-4 w-4 mr-2" />
                Find Alumni
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="connections" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="connections" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Connections ({connections.length})
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Requests ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Suggestions ({suggestions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <Input
                      placeholder="Search by name, company, or role..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <Select value={industryFilter} onValueChange={setIndustryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="San Francisco">San Francisco</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Seattle">Seattle</SelectItem>
                      <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Connections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConnections.map((connection) => (
                <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/abstract-geometric-shapes.png?height=48&width=48&query=${connection.name}`}
                        />
                        <AvatarFallback>
                          {connection.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{connection.name}</h3>
                        <p className="text-sm text-muted-foreground">{connection.role}</p>
                        <p className="text-sm text-muted-foreground">{connection.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <UserCheck className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {connection.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Class of {connection.graduationYear} • {connection.major}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {connection.mutualConnections} mutual connections
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">
                      Connected {connection.connectionDate} • Last interaction {connection.lastInteraction}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link href="/student/messages">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/abstract-geometric-shapes.png?height=48&width=48&query=${request.name}`} />
                        <AvatarFallback>
                          {request.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{request.name}</h3>
                        <p className="text-sm text-muted-foreground">{request.role}</p>
                        <p className="text-sm text-muted-foreground">{request.company}</p>
                      </div>
                      <Badge
                        variant={request.status === "pending_received" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {request.status === "pending_received" ? "Received" : "Sent"}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {request.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Class of {request.graduationYear} • {request.major}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {request.mutualConnections} mutual connections
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">Request sent {request.requestDate}</div>

                    <div className="flex gap-2">
                      {request.status === "pending_received" ? (
                        <>
                          <Button size="sm" className="flex-1">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                            Request Sent
                          </Button>
                          <Button size="sm" variant="destructive">
                            Cancel
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((suggestion) => (
                <Card key={suggestion.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/abstract-geometric-shapes.png?height=48&width=48&query=${suggestion.name}`}
                        />
                        <AvatarFallback>
                          {suggestion.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{suggestion.name}</h3>
                        <p className="text-sm text-muted-foreground">{suggestion.role}</p>
                        <p className="text-sm text-muted-foreground">{suggestion.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {suggestion.matchScore}% match
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {suggestion.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Class of {suggestion.graduationYear} • {suggestion.major}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {suggestion.mutualConnections} mutual connections
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  )
}
