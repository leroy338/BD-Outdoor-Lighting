"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FinanceChart } from "@/components/charts/finance-chart";

interface ButtonProps {
  label: string;
  link: string;
  variant?: "default" | "secondary" | "outline";
}

interface ChartProps {
  type?: "line" | "bar" | "pie" | "doughnut";
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      borderWidth?: number;
      fill?: boolean;
      tension?: number;
    }[];
  };
  title?: string;
  height?: number;
  showLegend?: boolean;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  chart?: ChartProps;
  imageLocation?: "left" | "right";
  mobileImageLocation?: "top" | "bottom";
  caption?: string;
  list?: string[];
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  content,
  image,
  imageAlt = "Hero image",
  chart,
  imageLocation = "right",
  mobileImageLocation = "top",
  caption,
  list,
  primaryButton,
  secondaryButton,
  className,
}: HeroProps) {
  const contentSection = (
    <div className="flex flex-col justify-center">
      {/* Caption */}
      {caption && (
        <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          {caption}
        </p>
      )}

      {/* Title */}
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
          {subtitle}
        </p>
      )}

      {/* Content */}
      {content && (
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          {content}
        </p>
      )}

      {/* List */}
      {list && list.length > 0 && (
        <ul className="mt-6 space-y-3">
          {list.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="shrink-0">
                <Check className="h-6 w-6 text-amber-700 dark:text-amber-400" />
              </div>
              <span className="ml-3 text-base text-gray-700 dark:text-gray-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Buttons */}
      {(primaryButton || secondaryButton) && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          {primaryButton && (
            <Link
              href={primaryButton.link}
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2",
                primaryButton.variant === "secondary"
                  ? "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                  : primaryButton.variant === "outline"
                  ? "border-2 border-amber-700 bg-white dark:bg-black text-amber-800 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 hover:text-amber-900 dark:hover:text-amber-300"
                  : "bg-linear-to-br from-amber-600 to-amber-800 text-white shadow-lg hover:shadow-xl focus-visible:outline-amber-700"
              )}
            >
              {primaryButton.label}
            </Link>
          )}

          {secondaryButton && (
            <Link
              href={secondaryButton.link}
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2",
                secondaryButton.variant === "default"
                  ? "bg-linear-to-br from-amber-600 to-amber-800 text-white shadow-lg hover:shadow-xl focus-visible:outline-amber-700"
                  : secondaryButton.variant === "outline"
                  ? "border-2 border-amber-700 bg-white dark:bg-black text-amber-800 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 hover:text-amber-900 dark:hover:text-amber-300"
                  : "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
              )}
            >
              {secondaryButton.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );

  const imageSection = image ? (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl shadow-2xl lg:aspect-auto lg:h-full lg:min-h-[500px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  ) : chart ? (
    <div className="w-full">
      <FinanceChart
        type={chart.type}
        data={chart.data}
        title={chart.title}
        height={chart.height || 400}
        showLegend={chart.showLegend !== false}
      />
    </div>
  ) : null;

  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16 items-center",
            !image && !chart && "md:grid-cols-1"
          )}
        >
          {/* Mobile Image (top) */}
          {imageSection && mobileImageLocation === "top" && (
            <div className="md:hidden">
              {imageSection}
            </div>
          )}

          {/* Mobile Content */}
          <div className="md:hidden">
            {contentSection}
          </div>

          {/* Mobile Image (bottom) */}
          {imageSection && mobileImageLocation === "bottom" && (
            <div className="md:hidden">
              {imageSection}
            </div>
          )}

          {/* Desktop Content Section */}
          <div
            className={cn(
              "hidden md:block",
              imageLocation === "left" && "md:order-2",
              !image && !chart && "md:col-span-2 max-w-4xl mx-auto text-center"
            )}
          >
            {contentSection}
          </div>

          {/* Desktop Image Section */}
          {imageSection && (
            <div 
              className={cn(
                "hidden md:block",
                imageLocation === "left" && "md:order-1"
              )}
            >
              {imageSection}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
