import { Banner } from "@/components/marketing/banner";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight, Lightbulb, Trees, Home, Waves, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | BD Outdoor Lighting",
  description:
    "Outdoor lighting design tips, maintenance guides, smart-lighting technology, and seasonal advice from the BD Outdoor Lighting team. Learn how to make your property shine after dark.",
};

export default function BlogPage() {
  const categories = [
    { name: "All Posts", count: 22, active: true },
    { name: "Design Tips", count: 8 },
    { name: "Maintenance", count: 5 },
    { name: "Technology", count: 5 },
    { name: "Seasonal", count: 4 },
  ];

  const featuredPost = {
    title: "Landscape Lighting 101: How to Light Your Home Like a Pro",
    excerpt:
      "Great outdoor lighting is about layers, not floodlights. Here's a step-by-step guide to designing a lighting plan — from uplighting and path lights to moonlighting — so your property looks intentional, inviting, and dramatic after dark.",
    category: "Design Tips",
    date: "March 10, 2026",
    readTime: "7 min read",
    author: "BD Outdoor Lighting",
    slug: "landscape-lighting-101",
  };

  const blogPosts = [
    {
      title: "Warm vs. Cool: Choosing the Right Color Temperature",
      excerpt:
        "Color temperature can make or break an outdoor lighting design. We explain the difference between warm and cool white, and which Kelvin range works best for homes, plants, and hardscapes.",
      category: "Design Tips",
      date: "March 5, 2026",
      readTime: "5 min read",
      author: "BD Outdoor Lighting",
      icon: Lightbulb,
      slug: "color-temperature-guide",
    },
    {
      title: "5 Ways Uplighting Transforms Your Home's Curb Appeal",
      excerpt:
        "Uplighting adds depth, drama, and value to any property. Here are five techniques we use to highlight architecture, columns, and stonework so your home stands out after sunset.",
      category: "Design Tips",
      date: "March 1, 2026",
      readTime: "6 min read",
      author: "BD Outdoor Lighting",
      icon: Home,
      slug: "uplighting-curb-appeal",
    },
    {
      title: "LED vs. Halogen: Why We Install All-LED Fixtures",
      excerpt:
        "LED fixtures last longer, use a fraction of the energy, and run cooler than halogen. We break down the real-world cost savings and why we trust LED for every install.",
      category: "Technology",
      date: "February 24, 2026",
      readTime: "4 min read",
      author: "BD Outdoor Lighting",
      icon: Sparkles,
      slug: "led-vs-halogen",
    },
    {
      title: "How to Keep Your Outdoor Lights Looking Great Year-Round",
      excerpt:
        "A little upkeep goes a long way. Learn how to clean fixtures, adjust aim, replace bulbs, and spot wiring issues before they leave your property in the dark.",
      category: "Maintenance",
      date: "February 18, 2026",
      readTime: "6 min read",
      author: "BD Outdoor Lighting",
      icon: Lightbulb,
      slug: "outdoor-lighting-maintenance",
    },
    {
      title: "Path Lighting Mistakes That Make Your Yard Look Worse",
      excerpt:
        "Evenly spaced lights like a runway? That's the most common path lighting mistake. Here's how to space, aim, and layer path fixtures for a natural, elegant look.",
      category: "Design Tips",
      date: "February 12, 2026",
      readTime: "7 min read",
      author: "BD Outdoor Lighting",
      icon: Trees,
      slug: "path-lighting-mistakes",
    },
    {
      title: "Smart Lighting: Control Your Whole Yard From Your Phone",
      excerpt:
        "Timers, zones, dimming, and color changes — all from an app. We cover what smart outdoor lighting can do and how to set up a system that works the way you live.",
      category: "Technology",
      date: "February 6, 2026",
      readTime: "4 min read",
      author: "BD Outdoor Lighting",
      icon: Sparkles,
      slug: "smart-outdoor-lighting",
    },
    {
      title: "Winterizing Your Outdoor Lighting System",
      excerpt:
        "Cold weather, snow, and shorter days change how your lighting performs. Here's how to adjust timers, protect fixtures, and keep your system running through winter.",
      category: "Seasonal",
      date: "January 30, 2026",
      readTime: "5 min read",
      author: "BD Outdoor Lighting",
      icon: Lightbulb,
      slug: "winterizing-outdoor-lighting",
    },
    {
      title: "Pool & Water Feature Lighting: What You Need to Know",
      excerpt:
        "Underwater lighting demands special fixtures and careful wiring. We explain submersible LED options, safety requirements, and how to make pools, ponds, and fountains glow.",
      category: "Design Tips",
      date: "January 22, 2026",
      readTime: "8 min read",
      author: "BD Outdoor Lighting",
      icon: Waves,
      slug: "water-feature-lighting",
    },
    {
      title: "How Much Does Outdoor Lighting Cost? A Real Breakdown",
      excerpt:
        "From a few accent lights to a full property design, pricing varies widely. We walk through what drives the cost of an outdoor lighting project and how to budget for it.",
      category: "Design Tips",
      date: "January 14, 2026",
      readTime: "9 min read",
      author: "BD Outdoor Lighting",
      icon: Lightbulb,
      slug: "outdoor-lighting-cost",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="BD Outdoor Lighting Blog"
        subtitle="Lighting design tips, maintenance guides, smart-lighting ideas, and seasonal advice from our team"
      />

      {/* Categories Filter */}
      <section className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category.active
                    ? "bg-linear-to-br from-amber-600 to-amber-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-900/20 px-3 py-1 text-sm font-medium text-amber-700 dark:text-amber-300">
            Featured Post
          </span>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Featured Image Placeholder */}
            <div className="relative h-64 lg:h-full bg-linear-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <Lightbulb className="h-24 w-24 text-white opacity-40" />
            </div>

            {/* Featured Content */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-amber-50 dark:bg-amber-900/20 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="text-gray-500 dark:text-gray-400">By</p>
                  <p className="font-medium text-gray-900 dark:text-white">{featuredPost.author}</p>
                </div>

                <Link
                  href={`/resources/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-linear-to-br from-amber-600 to-amber-800 px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Practical advice from our team of outdoor lighting professionals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-amber-600 to-amber-800">
                  <post.icon className="h-6 w-6 text-white" />
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="mb-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    By {post.author}
                  </p>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="text-sm font-medium text-amber-700 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-base font-semibold text-gray-900 dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-linear-to-br from-amber-600 to-amber-800 p-8 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get Lighting Tips in Your Inbox
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-50">
            Subscribe for outdoor lighting inspiration, maintenance reminders, and exclusive offers from our team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-amber-700 transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-amber-100">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
