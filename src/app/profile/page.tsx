"use client";

import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {

  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Profile
      </h1>

      <div className="mt-6 space-y-4">

        <p>
          Name:
          {" "}
          {user?.name}
        </p>

        <p>
          Email:
          {" "}
          {user?.email}
        </p>

      </div>

    </div>

  );
}