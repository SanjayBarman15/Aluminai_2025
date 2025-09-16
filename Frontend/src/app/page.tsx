import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building2, Network, BarChart3, Lock, UserCheck } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Alumni Portal</h1>
                <p className="text-sm text-muted-foreground">Official State-Level Platform</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Connect. <span className="text-primary">Network.</span> <span className="text-secondary">Grow.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            The official state-level alumni portal connecting students with successful graduates, helping universities
            manage alumni relationships, and enabling state oversight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Link href="/register">Join the Network</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Choose Your Path</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Students & Alumni</CardTitle>
                <CardDescription className="text-base">
                  Connect with successful graduates, explore career opportunities, and build meaningful professional
                  relationships within your alumni network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/signup/student">Join as Student</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-secondary/50 transition-colors bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardHeader>
                <Building2 className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Universities</CardTitle>
                <CardDescription className="text-base">
                  Manage alumni relationships, track graduate success, and strengthen institutional connections with
                  comprehensive analytics and tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
                  <Link href="/signup/university">Register Institution</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Powerful Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <Network className="h-8 w-8 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Smart Networking</h4>
              </div>
              <p className="text-muted-foreground">
                AI-powered suggestions connect students with alumni based on career goals, industry interests, and
                professional aspirations.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-secondary" />
                <h4 className="text-xl font-semibold text-foreground">Comprehensive Analytics</h4>
              </div>
              <p className="text-muted-foreground">
                Universities and state administrators get detailed insights into alumni engagement, career progression,
                and network growth.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <Lock className="h-8 w-8 text-accent" />
                <h4 className="text-xl font-semibold text-foreground">Secure & Compliant</h4>
              </div>
              <p className="text-muted-foreground">
                Built with state-level security standards, ensuring data privacy and regulatory compliance for all
                users.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <UserCheck className="h-8 w-8 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Multi-Role Management</h4>
              </div>
              <p className="text-muted-foreground">
                Tailored experiences for students, university administrators, and state-level oversight with appropriate
                access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-r from-primary/5 to-secondary/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="font-semibold text-foreground">Alumni Portal</span>
          </div>
          <p className="text-sm text-muted-foreground">Official State-Level Alumni Management Platform</p>
        </div>
      </footer>
    </div>
  )
}
