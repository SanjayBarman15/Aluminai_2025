"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Building2, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function UniversitySignupPage() {
  const [formData, setFormData] = useState({
    universityName: "",
    universityId: "",
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
    universityType: "",
    establishedYear: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    website: "",
    description: "",
    accreditation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle university registration
    console.log("University registration:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-semibold text-foreground">Alumni Portal</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Register Your University</h1>
            <p className="text-muted-foreground">Join the state-level alumni management platform</p>
          </div>

          <Alert className="mb-6 border-secondary/20 bg-secondary/5">
            <Shield className="h-4 w-4 text-secondary" />
            <AlertDescription>
              <strong>Verification Required:</strong> You must provide your state-issued University ID for verification.
              This ensures only authorized institutions can register on the platform.
            </AlertDescription>
          </Alert>

          <Card className="border-2 border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Institution Registration</CardTitle>
              <CardDescription className="text-center">
                Complete the form below to register your university
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Verification Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary" />
                    Verification Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="universityId">State-Issued University ID *</Label>
                    <Input
                      id="universityId"
                      value={formData.universityId}
                      onChange={(e) => setFormData({ ...formData, universityId: e.target.value })}
                      placeholder="e.g., STATE-UNIV-2024-001"
                      className="border-secondary/30 focus:border-secondary"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      This ID is provided by the state education department for verification purposes
                    </p>
                  </div>
                </div>

                {/* Institution Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Institution Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="universityName">University Name *</Label>
                    <Input
                      id="universityName"
                      value={formData.universityName}
                      onChange={(e) => setFormData({ ...formData, universityName: e.target.value })}
                      placeholder="e.g., State University of Technology"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="universityType">Institution Type *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, universityType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public University</SelectItem>
                          <SelectItem value="private">Private University</SelectItem>
                          <SelectItem value="community">Community College</SelectItem>
                          <SelectItem value="technical">Technical Institute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="establishedYear">Established Year *</Label>
                      <Input
                        id="establishedYear"
                        type="number"
                        value={formData.establishedYear}
                        onChange={(e) => setFormData({ ...formData, establishedYear: e.target.value })}
                        placeholder="e.g., 1965"
                        min="1800"
                        max="2024"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accreditation">Accreditation Body</Label>
                    <Input
                      id="accreditation"
                      value={formData.accreditation}
                      onChange={(e) => setFormData({ ...formData, accreditation: e.target.value })}
                      placeholder="e.g., Higher Learning Commission"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://university.edu"
                      />
                    </div>
                  </div>
                </div>

                {/* Administrator Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Administrator Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adminFirstName">Admin First Name *</Label>
                      <Input
                        id="adminFirstName"
                        value={formData.adminFirstName}
                        onChange={(e) => setFormData({ ...formData, adminFirstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminLastName">Admin Last Name *</Label>
                      <Input
                        id="adminLastName"
                        value={formData.adminLastName}
                        onChange={(e) => setFormData({ ...formData, adminLastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adminEmail">Admin Email Address *</Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      value={formData.adminEmail}
                      onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                      placeholder="admin@university.edu"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Additional Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="description">Institution Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief description of your institution, programs, and mission..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90"
                >
                  Register University
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-secondary hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
