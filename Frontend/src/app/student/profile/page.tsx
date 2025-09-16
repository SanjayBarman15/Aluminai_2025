"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, MapPin, Briefcase, GraduationCap, Plus, X } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function StudentProfile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "Python"])
  const [newSkill, setNewSkill] = useState("")

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    location: "San Francisco, CA",
    graduationYear: "2024",
    major: "Computer Science",
    currentRole: "Software Engineer",
    company: "Tech Startup",
    bio: "Passionate software engineer with experience in full-stack development. Looking to connect with alumni in the tech industry.",
    careerGoals:
      "Seeking opportunities in AI/ML and looking to transition into product management within the next 2 years.",
    linkedin: "",
    github: "",
    website: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSave = () => {
    // TODO: Save profile data
    setIsEditing(false)
  }

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <Button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={`/abstract-geometric-shapes.png?height=96&width=96&query=${profileData.firstName} ${profileData.lastName}`}
                />
                <AvatarFallback className="text-lg">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {profileData.currentRole} at {profileData.company}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    Class of {profileData.graduationYear}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={!isEditing}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>

          {/* Education & Career */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Education & Career
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Select
                  value={profileData.graduationYear}
                  onValueChange={(value) => handleInputChange("graduationYear", value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <Input
                  id="major"
                  value={profileData.major}
                  onChange={(e) => handleInputChange("major", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input
                  id="currentRole"
                  value={profileData.currentRole}
                  onChange={(e) => handleInputChange("currentRole", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={profileData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bio & Career Goals */}
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                disabled={!isEditing}
                rows={3}
                placeholder="Tell other alumni about yourself..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Textarea
                id="careerGoals"
                value={profileData.careerGoals}
                onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                disabled={!isEditing}
                rows={3}
                placeholder="What are your career aspirations?"
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Add skills to help alumni find you based on expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  {isEditing && (
                    <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                />
                <Button onClick={addSkill} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>Connect your professional profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={profileData.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                disabled={!isEditing}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={profileData.github}
                onChange={(e) => handleInputChange("github", e.target.value)}
                disabled={!isEditing}
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Personal Website</Label>
              <Input
                id="website"
                value={profileData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                disabled={!isEditing}
                placeholder="https://yourwebsite.com"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
