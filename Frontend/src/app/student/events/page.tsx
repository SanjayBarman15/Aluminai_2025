"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Search, Plus } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Annual Alumni Gala",
      description: "Join us for an elegant evening of networking, dining, and celebrating our alumni achievements.",
      date: "December 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, Downtown Hotel",
      type: "In-person",
      category: "Networking",
      attendees: 245,
      maxAttendees: 300,
      status: "upcoming",
      organizer: "State University Alumni Association",
      isRegistered: true,
    },
    {
      id: 2,
      title: "Tech Career Fair",
      description: "Connect with leading tech companies and explore career opportunities in the technology sector.",
      date: "December 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event Platform",
      type: "Virtual",
      category: "Career",
      attendees: 189,
      maxAttendees: 500,
      status: "upcoming",
      organizer: "Tech Institute",
      isRegistered: false,
    },
    {
      id: 3,
      title: "Alumni Mentorship Workshop",
      description: "Learn effective mentoring strategies and connect with potential mentees or mentors.",
      date: "January 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "University Conference Center",
      type: "In-person",
      category: "Professional Development",
      attendees: 67,
      maxAttendees: 100,
      status: "upcoming",
      organizer: "Career Services",
      isRegistered: true,
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      description: "Watch alumni entrepreneurs pitch their innovative startups to a panel of investors.",
      date: "November 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Hub",
      type: "In-person",
      category: "Entrepreneurship",
      attendees: 156,
      maxAttendees: 200,
      status: "past",
      organizer: "Entrepreneurship Center",
      isRegistered: true,
    },
    {
      id: 5,
      title: "Healthcare Alumni Reunion",
      description: "Reconnect with fellow healthcare professionals and discuss industry trends.",
      date: "January 25, 2025",
      time: "12:00 PM - 6:00 PM",
      location: "Medical Center Auditorium",
      type: "In-person",
      category: "Industry Specific",
      attendees: 89,
      maxAttendees: 150,
      status: "upcoming",
      organizer: "Medical College Alumni",
      isRegistered: false,
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || event.type === typeFilter
    const matchesStatus = statusFilter === "all" || event.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  const upcomingEvents = filteredEvents.filter((event) => event.status === "upcoming")
  const pastEvents = filteredEvents.filter((event) => event.status === "past")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "default"
      case "past":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "Virtual" ? "secondary" : "outline"
  }

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Events</h1>
            <p className="text-muted-foreground">Discover and join alumni networking events</p>
          </div>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Suggest Event
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search events by title, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="In-person">In-person</SelectItem>
                  <SelectItem value="Virtual">Virtual</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="past">Past Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getStatusColor(event.status)}>{event.status}</Badge>
                          <Badge variant={getTypeColor(event.type)}>{event.type}</Badge>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                      </div>
                      {event.isRegistered && (
                        <Badge variant="default" className="bg-green-600">
                          Registered
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.attendees} / {event.maxAttendees} attendees
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-3">Organized by {event.organizer}</p>
                      <div className="flex gap-2">
                        {event.isRegistered ? (
                          <>
                            <Button variant="outline" className="flex-1 bg-transparent">
                              View Details
                            </Button>
                            <Button variant="destructive" size="sm">
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button className="flex-1">Register</Button>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Past Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getStatusColor(event.status)}>{event.status}</Badge>
                          <Badge variant={getTypeColor(event.type)}>{event.type}</Badge>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.attendees} attendees
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground mb-3">Organized by {event.organizer}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Event Summary
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters to find events.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  )
}
