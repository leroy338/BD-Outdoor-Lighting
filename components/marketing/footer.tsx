"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Exterior Lighting", href: "/solutions/exterior-lighting" },
      { label: "Landscape Lighting", href: "/solutions/landscape-lighting" },
      { label: "Deck & Patio Lighting", href: "/solutions/deck-patio-lighting" },
      { label: "Underwater Lighting", href: "/solutions/underwater-lighting" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Support", href: "/resources/support" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
};

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    } catch {
      setError("Something went wrong. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Left: Branding */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/bdoutdoors-logo.png"
                alt="BD Outdoor Lighting Logo"
                width={40}
                height={40}
                className="rounded-lg transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                BD Outdoor Lighting
              </span>
            </Link>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-sm">
              Professional outdoor lighting design, installation, and maintenance — bringing exterior, landscape, deck, patio, and underwater lighting to properties across the region.
            </p>
          </div>

          {/* Right: Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: Newsletter Signup */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="mx-auto max-w-md text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Get lighting inspiration, project spotlights, and exclusive offers delivered to your inbox.
            </p>
            
            {!isSubmitted ? (
              <>
                <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                {error && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}
              </>
            ) : (
              <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  ✓ Thanks for subscribing! Check your email.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BD Outdoor Lighting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
