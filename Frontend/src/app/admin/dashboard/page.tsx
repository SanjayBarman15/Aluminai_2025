"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RouteGuard } from "@/components/route-guard"
import {
  Shield,
  Building2,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { AdminLayout } from "@/components/admin-layout"

export default function AdminDashboard() {
  // Mock data for state-level overview
  const stats = {
    totalUniversities: 47,
    totalAlumni: 125847,
    activeUsers: 89234,
    systemUptime: 99.8,
  }

  const pendingApprovals = [
    {
      id: 1,
      type: "University Registration",
      name: "State Technical University",
      submittedBy: "Dr. Sarah Johnson",
      submittedDate: "2 days ago",
      status: "pending",
    },
    {
      id: 2,
      type: "Policy Update",
      name: "Data Privacy Guidelines v2.1",
      submittedBy: "Legal Department",
      submittedDate: "1 week ago",
      status: "review",
    },
    {
      id: 3,
      type: "University Registration",
      name: "Metropolitan College",
      submittedBy: "Prof. Michael Chen",
      submittedDate: "3 days ago",
      status: "pending",
    },
  ]

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "High Server Load",
      message: "Database server experiencing 85% load",
      time: "15 minutes ago",
    },
    {
      id: 2,
      type: "info",
      title: "Scheduled Maintenance",
      message: "System maintenance scheduled for Dec 20, 2024",
      time: "2 hours ago",
    },
    {
      id: 3,
      type: "success",
      title: "Backup Completed",
      message: "Daily backup completed successfully",
      time: "6 hours ago",
    },
  ]

  const topUniversities = [
    { name: "State University", alumni: 15234, engagement: 78, growth: 12 },
    { name: "Tech Institute", alumni: 12847, engagement: 82, growth: 18 },
    { name: "Metropolitan College", alumni: 9876, engagement: 65, growth: 8 },
    { name: "Engineering University", alumni: 8543, engagement: 71, growth: 15 },
    { name: "Business School", alumni: 7234, engagement: 69, growth: 10 },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "university_approved",
      message: "New university 'Tech Institute' approved and activated",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "policy_updated",
      message: "Privacy policy updated across all institutions",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "report_generated",
      message: "Monthly state report generated and distributed",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "maintenance",
      message: "System maintenance completed successfully",
      time: "3 days ago",
    },
  ]

  return (
    <RouteGuard allowedUserTypes={["state"]}>
      <AdminLayout>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">State Administration Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage the state-wide alumni network</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/admin/reports">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Link>
              </Button>
              <Button asChild>
                <Link href="/admin/analytics">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
            </div>
          </div>

          {/* System Status Alert */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">System Status: Operational</p>
                  <p className="text-sm text-green-600">
                    All services running normally • Uptime: {stats.systemUptime}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Universities</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUniversities}</div>
                <p className="text-xs text-muted-foreground">Registered institutions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalAlumni.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across all institutions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.systemUptime}%</div>
                <p className="text-xs text-muted-foreground">Uptime this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Pending Approvals
                </CardTitle>
                <CardDescription>Items requiring your attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <Badge variant={item.status === "pending" ? "destructive" : "secondary"}>{item.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                      <p className="text-xs text-muted-foreground">
                        By {item.submittedBy} • {item.submittedDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin/approvals">View All Approvals</Link>
                </Button>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  System Alerts
                </CardTitle>
                <CardDescription>Recent system notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        alert.type === "warning"
                          ? "bg-yellow-500"
                          : alert.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{alert.title}</p>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin/system">View System Status</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Top Universities */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Universities</CardTitle>
              <CardDescription>Universities ranked by alumni engagement and growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUniversities.map((university, index) => (
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

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest administrative actions and system events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full">
                View Activity Log
              </Button>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </RouteGuard>
  )
}
