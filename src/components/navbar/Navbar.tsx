"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { logoutUser } from "@/services/auth.service";
import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const { user, loading } = useAuth();

    async function handleLogout() {
        await logoutUser();
        router.push("/login");
        router.refresh();
    }

    if (loading) return null;

    const navLinkStyle = (path: string) =>
        `transition-colors duration-200 ${
            pathname === path
                ? "text-blue-500 font-semibold"
                : "text-muted-foreground hover:text-foreground"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl font-bold tracking-tight">
                        CodeReview AI
                    </h1>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    {user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className={navLinkStyle("/dashboard")}
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/analyzer"
                                className={navLinkStyle("/analyzer")}
                            >
                                Analyzer
                            </Link>

                            <Link
                                href="/history"
                                className={navLinkStyle("/history")}
                            >
                                History
                            </Link>

                            <Link
                                href="/profile"
                                className={navLinkStyle("/profile")}
                            >
                                Profile
                            </Link>

                            <ThemeToggle />

                            <Button
                                variant="outline"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className={navLinkStyle("/login")}
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className={navLinkStyle("/register")}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
