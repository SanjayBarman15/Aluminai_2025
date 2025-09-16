"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Download, Plus, MapPin, Briefcase, GraduationCap, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { UniversityLayout } from "@/components/university-layout"

export default function AlumniManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [graduationYearFilter, setGraduationYearFilter] = useState("all")
  const [majorFilter, setMajorFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock alumni data
  const alumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      graduationYear: "2019",
      major: "Computer Science",
      currentRole: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      status: "Active",
      lastLogin: "2 days ago",
      connections: 23,
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "(555) 234-5678",
      graduationYear: "2018",
      major: "Business Administration",
      currentRole: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      status: "Active",
      lastLogin: "1 week ago",
      connections: 18,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      phone: "(555) 345-6789",
      graduationYear: "2020",
      major: "Data Science",
      currentRole: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      status: "Active",
      lastLogin: "3 days ago",
      connections: 31,
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "(555) 456-7890",
      graduationYear: "2021",
      major: "Design",
      currentRole: "UX Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      status: "Inactive",
      lastLogin: "2 months ago",
      connections: 12,
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      phone: "(555) 567-8901",
      graduationYear: "2017",
      major: "Marketing",
      currentRole: "Marketing Director",
      company: "Salesforce",
      location: "San Francisco, CA",
      status: "Active",
      lastLogin: "1 day ago",
      connections: 45,
    },
  ]

  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch =
      searchQuery === "" ||
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesGradYear = graduationYearFilter === "all" || person.graduationYear === graduationYearFilter
    const matchesMajor = majorFilter === "all" || person.major === majorFilter
    const matchesStatus = statusFilter === "all" || person.status === statusFilter

    return matchesSearch && matchesGradYear && matchesMajor && matchesStatus
  })

  return (
    <UniversityLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alumni Management</h1>
            <p className="text-muted-foreground">Manage and track your alumni network</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button asChild>
              <Link href="/university/alumni/add">
                <Plus className="h-4 w-4 mr-2" />
                Add Alumni
              </Link>
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Alumni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Search by name, company, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Select value={graduationYearFilter} onValueChange={setGraduationYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                </SelectContent>
              </Select>

              <Select value={majorFilter} onValueChange={setMajorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Major" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Majors</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Business Administration">Business Administration</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredAlumni.length} of {alumni.length} alumni
          </p>
          <Select defaultValue="name">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="year">Sort by Graduation Year</SelectItem>
              <SelectItem value="company">Sort by Company</SelectItem>
              <SelectItem value="status">Sort by Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alumni List */}
        <div className="space-y-4">
          {filteredAlumni.map((person) => (
            <Card key={person.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/abstract-geometric-shapes.png?height=48&width=48&query=${person.name}`} />
                      <AvatarFallback>
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                        <Badge variant={person.status === "Active" ? "default" : "secondary"}>{person.status}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {person.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {person.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Class of {person.graduationYear} • {person.major}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {person.currentRole} at {person.company}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {person.location}
                        </div>
                        <div className="text-sm">
                          {person.connections} connections • Last login: {person.lastLogin}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No alumni found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters to find alumni.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </UniversityLayout>
  )
}
