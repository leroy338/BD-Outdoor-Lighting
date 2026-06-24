"use client";

import * as React from "react";
import { Clock, Mail, ArrowRight } from "lucide-react";
import { Topbar } from "./topbar";

interface ComingSoonProps {
  title?: string;
  description?: string;
  showEmailSignup?: boolean;
}

export function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned!",
  showEmailSignup = true,
}: ComingSoonProps) {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <Topbar />
      
      <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-amber-500 opacity-25 blur-2xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-amber-600 to-amber-800 shadow-lg">
                <Clock className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            {description}
          </p>

          {/* Divider */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <div className="mx-4 h-1.5 w-1.5 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          {/* Email Signup */}
          {showEmailSignup && (
            <div className="mx-auto max-w-md">
              {!isSubmitted ? (
                <>
                  <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                    Get notified when we launch
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-6 py-3 font-medium text-white transition-colors hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600/20 dark:bg-amber-600 dark:hover:bg-amber-700"
                    >
                      Notify Me
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                    We'll never share your email with anyone else.
                  </p>
                </>
              ) : (
                <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                    ✓ Thanks! We'll notify you when we launch.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              In the meantime, feel free to explore our other pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
