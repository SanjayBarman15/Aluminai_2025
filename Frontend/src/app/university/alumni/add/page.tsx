"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, UserPlus } from "lucide-react"
import Link from "next/link"
import { UniversityLayout } from "@/components/university-layout"

export default function AddAlumni() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduationYear: "",
    major: "",
    degree: "",
    currentRole: "",
    company: "",
    location: "",
    linkedin: "",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement alumni registration logic
    console.log("Adding alumni:", formData)
  }

  return (
    <UniversityLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/university/alumni">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Alumni
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Add New Alumni</h1>
            <p className="text-muted-foreground">Register a new alumni member to the platform</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Alumni Information
                </CardTitle>
                <CardDescription>Enter the details of the alumni member you want to register</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Education Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Education Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year *</Label>
                        <Select
                          value={formData.graduationYear}
                          onValueChange={(value) => handleInputChange("graduationYear", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 20 }, (_, i) => 2024 - i).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree Type *</Label>
                        <Select
                          value={formData.degree}
                          onValueChange={(value) => handleInputChange("degree", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select degree" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bachelor's">Bachelor's</SelectItem>
                            <SelectItem value="Master's">Master's</SelectItem>
                            <SelectItem value="PhD">PhD</SelectItem>
                            <SelectItem value="Associate">Associate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="major">Major/Field of Study *</Label>
                        <Input
                          id="major"
                          value={formData.major}
                          onChange={(e) => handleInputChange("major", e.target.value)}
                          placeholder="e.g., Computer Science"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Current Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentRole">Current Role</Label>
                        <Input
                          id="currentRole"
                          value={formData.currentRole}
                          onChange={(e) => handleInputChange("currentRole", e.target.value)}
                          placeholder="e.g., Software Engineer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="e.g., Google"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="e.g., San Francisco, CA"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange("linkedin", e.target.value)}
                          placeholder="https://linkedin.com/in/profile"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder="Any additional information about this alumni..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      Register Alumni
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <Link href="/university/alumni">Cancel</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Bulk Import */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Bulk Import
                </CardTitle>
                <CardDescription>Import multiple alumni at once using a CSV file</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload CSV File
                </Button>
                <p className="text-xs text-muted-foreground">Download our CSV template to ensure proper formatting</p>
                <Button variant="ghost" size="sm" className="w-full">
                  Download Template
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Registration Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground">Required Fields</h4>
                  <p className="text-muted-foreground">
                    First name, last name, email, graduation year, degree, and major are required.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email Verification</h4>
                  <p className="text-muted-foreground">
                    An invitation email will be sent to the alumni to complete their profile.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Privacy</h4>
                  <p className="text-muted-foreground">
                    Alumni can control their profile visibility and contact preferences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </UniversityLayout>
  )
}
