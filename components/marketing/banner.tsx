"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Banner({ title, subtitle, className }: BannerProps) {
  const lightBars = [
    { top: "9%", height: 5, width: "58%", side: "left", opacity: 0.7 },
    { top: "21%", height: 11, width: "34%", side: "right", opacity: 0.8 },
    { top: "34%", height: 4, width: "46%", side: "left", opacity: 0.6 },
    { top: "47%", height: 16, width: "64%", side: "right", opacity: 0.75 },
    { top: "60%", height: 6, width: "28%", side: "left", opacity: 0.7 },
    { top: "72%", height: 9, width: "50%", side: "right", opacity: 0.8 },
    { top: "84%", height: 5, width: "40%", side: "left", opacity: 0.65 },
  ] as const;

  return (
    <section className={cn("relative overflow-hidden bg-linear-to-br from-amber-700 to-amber-900", className)}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-600 via-amber-700 to-amber-900 opacity-90" />

      {/* Horizontal bars of light (varying sizes, from each side) */}
      <div className="absolute inset-0 blur-[1px]">
        {lightBars.map((bar, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              top: bar.top,
              height: `${bar.height}px`,
              width: bar.width,
              ...(bar.side === "left" ? { left: 0 } : { right: 0 }),
              backgroundImage: `linear-gradient(to ${
                bar.side === "left" ? "right" : "left"
              }, rgba(255, 248, 224, ${bar.opacity}), rgba(255, 244, 214, ${
                bar.opacity * 0.4
              }) 55%, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* White gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-xl text-amber-50 sm:text-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white/5 to-transparent" />
    </section>
  );
}
