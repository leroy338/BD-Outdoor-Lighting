"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "default" | "outline";
}

interface HeaderProps {
  image: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  className?: string;
}

export function Header({
  image,
  imageAlt = "Logo",
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
}: HeaderProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-white dark:bg-black",
        className
      )}
    >
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-600/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text and buttons */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl lg:mx-0">
              {subtitle}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
                {primaryButton && (
                  <Button variant={primaryButton.variant || "default"} asChild>
                    <Link href={primaryButton.href}>{primaryButton.text}</Link>
                  </Button>
                )}

                {secondaryButton && (
                  <Button
                    variant={secondaryButton.variant || "outline"}
                    asChild
                  >
                    <Link href={secondaryButton.href}>
                      {secondaryButton.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right: Logo in a glowing lightbox */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-amber-300/40 via-amber-200/20 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-80 dark:from-amber-500/30" />

              {/* Lightbox frame */}
              <div className="relative rounded-3xl border border-gray-200/80 bg-white/70 p-8 shadow-[0_0_60px_-15px_rgba(251,191,36,0.5)] backdrop-blur-sm transition-shadow duration-500 group-hover:shadow-[0_0_80px_-10px_rgba(251,191,36,0.65)] dark:border-white/10 dark:bg-white/5 sm:p-10">
                <div className="relative aspect-square w-64 sm:w-72 lg:w-80">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 16rem, 20rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
