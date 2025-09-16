"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Building2,
  Users,
  MapPin,
  Calendar,
  Mail,
  Phone,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AdminLayout } from "@/components/admin-layout"

export default function UniversitiesManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [regionFilter, setRegionFilter] = useState("all")

  // Mock universities data
  const universities = [
    {
      id: 1,
      name: "State University",
      location: "Capital City, State",
      region: "Central",
      status: "Active",
      adminName: "Dr. Sarah Johnson",
      adminEmail: "admin@stateuniv.edu",
      adminPhone: "(555) 123-4567",
      totalAlumni: 15234,
      activeAlumni: 11876,
      engagementRate: 78,
      joinedDate: "Jan 2020",
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      name: "Tech Institute",
      location: "Tech Valley, State",
      region: "Northern",
      status: "Active",
      adminName: "Prof. Michael Chen",
      adminEmail: "admin@techinst.edu",
      adminPhone: "(555) 234-5678",
      totalAlumni: 12847,
      activeAlumni: 10535,
      engagementRate: 82,
      joinedDate: "Mar 2020",
      lastActivity: "1 day ago",
    },
    {
      id: 3,
      name: "Metropolitan College",
      location: "Metro City, State",
      region: "Southern",
      status: "Pending",
      adminName: "Dr. Emily Rodriguez",
      adminEmail: "admin@metrocollege.edu",
      adminPhone: "(555) 345-6789",
      totalAlumni: 0,
      activeAlumni: 0,
      engagementRate: 0,
      joinedDate: "Pending",
      lastActivity: "Never",
    },
    {
      id: 4,
      name: "Engineering University",
      location: "Industrial City, State",
      region: "Eastern",
      status: "Active",
      adminName: "Dr. David Kim",
      adminEmail: "admin@enguni.edu",
      adminPhone: "(555) 456-7890",
      totalAlumni: 8543,
      activeAlumni: 6065,
      engagementRate: 71,
      joinedDate: "Jun 2020",
      lastActivity: "5 hours ago",
    },
    {
      id: 5,
      name: "Business School",
      location: "Commerce City, State",
      region: "Western",
      status: "Suspended",
      adminName: "Prof. Lisa Wang",
      adminEmail: "admin@bizschool.edu",
      adminPhone: "(555) 567-8901",
      totalAlumni: 7234,
      activeAlumni: 0,
      engagementRate: 0,
      joinedDate: "Sep 2020",
      lastActivity: "2 months ago",
    },
  ]

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      searchQuery === "" ||
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.adminName.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || university.status === statusFilter
    const matchesRegion = regionFilter === "all" || university.region === regionFilter

    return matchesSearch && matchesStatus && matchesRegion
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Suspended":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Pending":
        return "secondary"
      case "Suspended":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Universities Management</h1>
            <p className="text-muted-foreground">Monitor and manage registered universities</p>
          </div>
          <Button>
            <Building2 className="h-4 w-4 mr-2" />
            Add University
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Universities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by name, location, or admin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>

              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Central">Central</SelectItem>
                  <SelectItem value="Northern">Northern</SelectItem>
                  <SelectItem value="Southern">Southern</SelectItem>
                  <SelectItem value="Eastern">Eastern</SelectItem>
                  <SelectItem value="Western">Western</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredUniversities.length} of {universities.length} universities
          </p>
          <Select defaultValue="name">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="status">Sort by Status</SelectItem>
              <SelectItem value="alumni">Sort by Alumni Count</SelectItem>
              <SelectItem value="engagement">Sort by Engagement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Universities List */}
        <div className="space-y-4">
          {filteredUniversities.map((university) => (
            <Card key={university.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/abstract-geometric-shapes.png?height=48&width=48&query=${university.name}`} />
                      <AvatarFallback>
                        {university.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{university.name}</h3>
                        <Badge variant={getStatusVariant(university.status)} className="flex items-center gap-1">
                          {getStatusIcon(university.status)}
                          {university.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {university.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {university.adminEmail}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {university.adminPhone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Joined: {university.joinedDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Admin: {university.adminName}
                        </div>
                        <div className="text-sm">Last activity: {university.lastActivity}</div>
                      </div>

                      {university.status === "Active" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-muted rounded-lg">
                            <p className="text-2xl font-bold text-foreground">
                              {university.totalAlumni.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground">Total Alumni</p>
                          </div>
                          <div className="text-center p-3 bg-muted rounded-lg">
                            <p className="text-2xl font-bold text-foreground">
                              {university.activeAlumni.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground">Active Alumni</p>
                          </div>
                          <div className="text-center p-3 bg-muted rounded-lg">
                            <p className="text-2xl font-bold text-foreground">{university.engagementRate}%</p>
                            <p className="text-sm text-muted-foreground">Engagement Rate</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuItem>Contact Admin</DropdownMenuItem>
                      {university.status === "Pending" && (
                        <>
                          <DropdownMenuItem className="text-green-600">Approve</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Reject</DropdownMenuItem>
                        </>
                      )}
                      {university.status === "Active" && (
                        <DropdownMenuItem className="text-yellow-600">Suspend</DropdownMenuItem>
                      )}
                      {university.status === "Suspended" && (
                        <DropdownMenuItem className="text-green-600">Reactivate</DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No universities found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters to find universities.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
