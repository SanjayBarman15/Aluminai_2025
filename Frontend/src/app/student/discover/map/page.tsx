"use client";

import { StudentLayout } from "@/components/student-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { MapPin } from "lucide-react";

export default function DiscoverMapPage() {
  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Discover on Map
            </h1>
            <p className="text-muted-foreground">
              See where alumni are located around the world
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/student/discover">Back to List</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              Alumni Locations • Default: Chandigarh University
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="Chandigarh University Map"
                  src="https://www.google.com/maps?q=Chandigarh%20University&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
              Google Maps embedded view centered on Chandigarh University.
              Replace with a full Google Maps or Mapbox integration and plot
              real alumni coordinates for production.
            </p>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
