"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    logoutUser,
} from "@/services/auth.service";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";

export default function Navbar() {

    const router = useRouter();

    const {
        user,
        loading,
    } = useAuth();

    async function handleLogout() {

        await logoutUser();

        router.push("/login");

        router.refresh();
    }

    if (loading) {
        return null;
    }

    return (

        <nav className="flex items-center justify-between border-b p-5">

            <Link href="/">
                <h1 className="text-xl font-bold">
                    CodeReview AI
                </h1>
            </Link>

            <div className="flex gap-4">

                {user ? (

                    <>

                        <Link href="/dashboard">
                            Dashboard
                        </Link>

                        <Link href="/profile">
                            Profile
                        </Link>

                        <Button
                            variant="outline"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>

                    </>

                ) : (

                    <>

                        <Link href="/login">
                            Login
                        </Link>

                        <Link href="/register">
                            Register
                        </Link>

                    </>

                )}

            </div>

        </nav>

    );
}