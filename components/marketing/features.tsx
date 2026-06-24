"use client";

import * as React from "react";
import Link from "next/link";
import { Lightbulb, Trees, Home, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const services: Service[] = [
  {
    title: "Exterior Lighting",
    description: "Architectural and facade lighting — uplighting, wall washing, soffit, and security lighting that makes your home shine after dark.",
    icon: <Lightbulb className="h-8 w-8" />,
    href: "/solutions/exterior-lighting",
  },
  {
    title: "Landscape Lighting",
    description: "Path lights, tree uplighting, garden accents, and moonlighting designed to highlight the best features of your yard.",
    icon: <Trees className="h-8 w-8" />,
    href: "/solutions/landscape-lighting",
  },
  {
    title: "Deck & Patio Lighting",
    description: "Warm, inviting lighting for outdoor living — step lights, railing lights, post caps, and ambient string lighting.",
    icon: <Home className="h-8 w-8" />,
    href: "/solutions/deck-patio-lighting",
  },
  {
    title: "Underwater Lighting",
    description: "Pool, pond, and fountain lighting that turns your water features into dazzling nighttime focal points.",
    icon: <Waves className="h-8 w-8" />,
    href: "/solutions/underwater-lighting",
  },
];

export function Features({
  title = "What We Do",
  subtitle = "From architectural accents to dazzling water features — we design and install lighting that transforms your property.",
  className,
}: FeaturesProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black py-24 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block w-full rounded-2xl border border-amber-500/20 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.45)] sm:w-72 lg:w-64 xl:w-56"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-amber-500/10 p-3 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-400">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
