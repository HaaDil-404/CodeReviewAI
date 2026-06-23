
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bug, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* Background Blur Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold md:text-8xl"
          >
            CodeReview{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl"
          >
            Your AI Senior Software Engineer that reviews code,
            detects bugs and improves code quality instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/analyzer"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Start Reviewing
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:bg-zinc-900"
            >
              Dashboard
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-32">

        <h2 className="mb-16 text-center text-4xl font-bold">
          Why CodeReview AI?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl"
          >
            <Bug className="mb-5 h-10 w-10 text-red-400" />

            <h3 className="mb-4 text-2xl font-bold">
              Detect Bugs
            </h3>

            <p className="text-zinc-400">
              Find critical, medium and low severity issues in your code.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl"
          >
            <Zap className="mb-5 h-10 w-10 text-yellow-400" />

            <h3 className="mb-4 text-2xl font-bold">
              Instant Analysis
            </h3>

            <p className="text-zinc-400">
              Get AI-powered feedback in seconds.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl"
          >
            <ShieldCheck className="mb-5 h-10 w-10 text-green-400" />

            <h3 className="mb-4 text-2xl font-bold">
              Improve Quality
            </h3>

            <p className="text-zinc-400">
              Receive suggestions like having a senior engineer beside you.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-20">

        <div className="mx-auto grid max-w-6xl gap-12 px-6 text-center md:grid-cols-3">

          <div>
            <h2 className="text-5xl font-bold text-blue-400">
              10K+
            </h2>

            <p className="mt-3 text-zinc-400">
              Lines Reviewed
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-400">
              500+
            </h2>

            <p className="mt-3 text-zinc-400">
              Bugs Detected
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-400">
              99%
            </h2>

            <p className="mt-3 text-zinc-400">
              Developer Satisfaction
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 text-center">

        <h2 className="text-5xl font-bold">
          Start Writing Better Code Today
        </h2>

        <p className="mt-6 text-zinc-400">
          Let AI review your code before production.
        </p>

        <Link
          href="/analyzer"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
        >
          Try CodeReview AI
        </Link>

      </section>

    </main>
  );
}

