"use client";

import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-lg font-medium">Loading Profile...</div>
      </div>
    );
  }

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="mx-auto max-w-5xl p-8">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account information.
        </p>
      </div>

      {/* Main Profile Card */}
      <Card className="border bg-background/70 shadow-lg backdrop-blur-xl">
        <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-500 text-4xl font-bold text-white shadow-lg">
              {initials}
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">
              {user?.name}
            </h2>

            <p className="text-muted-foreground">
              {user?.email}
            </p>

            <p className="text-sm text-muted-foreground">
              Member of CodeReview AI
            </p>
          </div>

        </CardContent>
      </Card>

      {/* Details Section */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg">
              {user?.name}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg">
              {user?.email}
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

