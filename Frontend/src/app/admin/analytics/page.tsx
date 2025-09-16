"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Users, Building2, Download, MapPin, Briefcase } from "lucide-react"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminAnalytics() {
  // Mock analytics data
  const overviewStats = {
    totalAlumni: 125847,
    alumniGrowth: 12.5,
    activeUsers: 89234,
    userGrowth: 8.3,
    totalUniversities: 47,
    universityGrowth: 6.4,
    avgEngagement: 74.2,
    engagementGrowth: 4.1,
  }

  const regionData = [
    { region: "Central", universities: 12, alumni: 45234, engagement: 78 },
    { region: "Northern", universities: 10, alumni: 38567, engagement: 82 },
    { region: "Southern", universities: 9, alumni: 22145, engagement: 65 },
    { region: "Eastern", universities: 8, alumni: 12456, engagement: 71 },
    { region: "Western", universities: 8, alumni: 7445, engagement: 69 },
  ]

  const industryData = [
    { industry: "Technology", count: 38945, percentage: 31, growth: 15.2 },
    { industry: "Healthcare", count: 25169, percentage: 20, growth: 8.7 },
    { industry: "Finance", count: 18877, percentage: 15, growth: 12.1 },
    { industry: "Education", count: 15101, percentage: 12, growth: 5.3 },
    { industry: "Manufacturing", count: 12585, percentage: 10, growth: 3.8 },
    { industry: "Other", count: 15170, percentage: 12, growth: 7.2 },
  ]

  const monthlyGrowth = [
    { month: "Jan", alumni: 118234, users: 82145 },
    { month: "Feb", alumni: 119567, users: 83234 },
    { month: "Mar", alumni: 121045, users: 84567 },
    { month: "Apr", alumni: 122234, users: 85789 },
    { month: "May", alumni: 123567, users: 86934 },
    { month: "Jun", alumni: 125847, users: 89234 },
  ]

  const topPerformingUniversities = [
    { name: "Tech Institute", alumni: 12847, engagement: 82, growth: 18 },
    { name: "State University", alumni: 15234, engagement: 78, growth: 12 },
    { name: "Engineering University", alumni: 8543, engagement: 71, growth: 15 },
    { name: "Medical College", alumni: 6789, engagement: 85, growth: 22 },
    { name: "Business School", alumni: 7234, engagement: 69, growth: 10 },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">State Analytics</h1>
            <p className="text-muted-foreground">Comprehensive insights into the state alumni network</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="6months">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.totalAlumni.toLocaleString()}</div>
              <p className="text-xs text-green-600">+{overviewStats.alumniGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.activeUsers.toLocaleString()}</div>
              <p className="text-xs text-green-600">+{overviewStats.userGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Universities</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.totalUniversities}</div>
              <p className="text-xs text-green-600">+{overviewStats.universityGrowth}% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewStats.avgEngagement}%</div>
              <p className="text-xs text-green-600">+{overviewStats.engagementGrowth}% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regional Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Regional Distribution
              </CardTitle>
              <CardDescription>Alumni and universities by region</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {regionData.map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-foreground">{region.region}</span>
                      <span className="text-sm text-muted-foreground ml-2">{region.universities} universities</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{region.alumni.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">{region.engagement}% engagement</p>
                    </div>
                  </div>
                  <Progress value={(region.alumni / 125847) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Industry Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Industry Distribution
              </CardTitle>
              <CardDescription>Alumni by industry sector</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {industryData.map((industry) => (
                <div key={industry.industry} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{industry.industry}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {industry.count.toLocaleString()} ({industry.percentage}%)
                      </span>
                      <Badge variant="outline" className="text-xs">
                        +{industry.growth}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={industry.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Growth Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Growth Trends
            </CardTitle>
            <CardDescription>Alumni registration and user activity over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4">
                {monthlyGrowth.map((month) => (
                  <div key={month.month} className="text-center">
                    <div className="bg-muted rounded-lg p-4 mb-2">
                      <div className="text-lg font-bold text-foreground">{month.alumni.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Alumni</div>
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-4">
                      <div className="text-lg font-bold text-foreground">{month.users.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Active</div>
                    </div>
                    <div className="text-sm font-medium text-foreground mt-2">{month.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Universities */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Universities</CardTitle>
            <CardDescription>Universities ranked by engagement and growth metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingUniversities.map((university, index) => (
                <div
                  key={university.name}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{university.name}</p>
                      <p className="text-sm text-muted-foreground">{university.alumni.toLocaleString()} alumni</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-foreground">{university.engagement}%</p>
                      <p className="text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-green-600">+{university.growth}%</p>
                      <p className="text-muted-foreground">Growth</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
