"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Briefcase, GraduationCap, MessageCircle } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [industryFilter, setIndustryFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [graduationYearFilter, setGraduationYearFilter] = useState("all")

  // Mock alumni data
  const alumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      graduationYear: "2019",
      major: "Computer Science",
      skills: ["JavaScript", "React", "Python", "Machine Learning"],
      bio: "Passionate about building scalable web applications and mentoring new developers.",
      matchScore: 95,
      industry: "Technology",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      graduationYear: "2018",
      major: "Business Administration",
      skills: ["Product Strategy", "Data Analysis", "Agile", "Leadership"],
      bio: "Leading product initiatives for cloud services with focus on user experience.",
      matchScore: 88,
      industry: "Technology",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      graduationYear: "2020",
      major: "Statistics",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
      bio: "Using data to drive content recommendations and improve user engagement.",
      matchScore: 82,
      industry: "Entertainment",
    },
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      graduationYear: "2021",
      major: "Design",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      bio: "Creating intuitive experiences that connect people around the world.",
      matchScore: 76,
      industry: "Technology",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "Salesforce",
      location: "San Francisco, CA",
      graduationYear: "2017",
      major: "Marketing",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Leadership"],
      bio: "Building brand awareness and driving growth through innovative marketing strategies.",
      matchScore: 71,
      industry: "Technology",
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Financial Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      graduationYear: "2019",
      major: "Finance",
      skills: ["Financial Modeling", "Excel", "Bloomberg", "Risk Analysis"],
      bio: "Analyzing market trends and providing investment recommendations.",
      matchScore: 68,
      industry: "Finance",
    },
  ]

  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch =
      searchQuery === "" ||
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesIndustry = industryFilter === "all" || person.industry === industryFilter
    const matchesLocation = locationFilter === "all" || person.location.includes(locationFilter)
    const matchesGradYear = graduationYearFilter === "all" || person.graduationYear === graduationYearFilter

    return matchesSearch && matchesIndustry && matchesLocation && matchesGradYear
  })

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Discover Alumni</h1>
          <p className="text-muted-foreground">Connect with alumni who share your interests and career goals</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Search by name, company, role, or skills..."
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

              <Select value={graduationYearFilter} onValueChange={setGraduationYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Grad Year" />
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
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Found {filteredAlumni.length} alumni matching your criteria</p>
          <Select defaultValue="match">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Sort by Match Score</SelectItem>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="year">Sort by Graduation Year</SelectItem>
              <SelectItem value="company">Sort by Company</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person) => (
            <Card key={person.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`/abstract-geometric-shapes.png?key=4mlxj&height=40&width=40&query=${person.name}`}
                      />
                      <AvatarFallback>
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {person.matchScore}% match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  {person.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {person.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  Class of {person.graduationYear} • {person.major}
                </div>

                <p className="text-sm text-foreground line-clamp-2">{person.bio}</p>

                <div className="flex flex-wrap gap-1">
                  {person.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {person.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{person.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Connect
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
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
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters to find more alumni.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  )
}
