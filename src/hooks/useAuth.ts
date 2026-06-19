"use client";

import { useEffect, useState } from "react";

import {
    getCurrentUser,
} from "@/services/auth.service";

import { User } from "@/types/user.types";

export function useAuth() {

    const [user, setUser] =
        useState<User | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        async function fetchUser() {

            try {

                const response =
                    await getCurrentUser();

                setUser(response.user);

            } catch {

                setUser(null);

            } finally {

                setLoading(false);

            }
        }

        fetchUser();

    }, []);

    return {
        user,
        loading,
    };
}