"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogosProps {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    name: "Excel",
    src: "/logos/excel.png",
    alt: "Microsoft Excel",
    width: 120,
    height: 120,
  },
  {
    name: "QuickBooks",
    src: "/logos/quickbooks.png",
    alt: "QuickBooks",
    width: 140,
    height: 140,
  },
  {
    name: "Tableau",
    src: "/logos/tableau.png",
    alt: "Tableau",
    width: 140,
    height: 140,
  },
  {
    name: "PostgreSQL",
    src: "/logos/postgresql.png",
    alt: "PostgreSQL",
    width: 120,
    height: 120,
  },
  {
    name: "NotebookLM",
    src: "/logos/notebooklm.svg",
    alt: "NotebookLM",
    width: 140,
    height: 140,
  },
];

export function Logos({
  title = "Integrations & Tools",
  subtitle = "Seamlessly connect with the tools you already use",
  logos = defaultLogos,
  className,
}: LogosProps) {
  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Logos Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="group relative overflow-hidden rounded-xl bg-linear-to-br from-amber-100 via-amber-50 to-amber-100 dark:from-amber-950 dark:via-amber-900 dark:to-amber-800 p-8 shadow-md transition-all hover:shadow-xl hover:scale-105"
            >
              {/* Gradient overlay for extra depth */}
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Logo Container */}
              <div className="relative flex items-center justify-center h-24">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 120}
                  height={logo.height || 120}
                  className="object-contain w-auto h-auto max-h-full max-w-full transition-transform group-hover:scale-110"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            And many more integrations available
          </p>
        </div>
      </div>
    </section>
  );
}
