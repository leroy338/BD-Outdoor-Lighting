"use client";

import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  initials?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Broke Bros completely transformed our backyard. The patio and retaining wall they built look incredible — neighbors keep asking who did the work. Couldn't be happier.",
    author: "Amanda Torres",
    role: "Homeowner",
    company: "Cedar Hills",
    initials: "AT",
    rating: 5,
  },
  {
    quote: "We hired them for a full lawn overhaul and garden bed installation. Professional, on time, and the results blew us away. Our yard has never looked this good.",
    author: "Marcus Johnson",
    role: "Homeowner",
    company: "Riverside District",
    initials: "MJ",
    rating: 5,
  },
  {
    quote: "The deck they built for us is absolutely stunning. They listened to exactly what we wanted and delivered beyond our expectations. The craftsmanship is top-notch.",
    author: "Lisa & Tom Garrett",
    role: "Homeowners",
    company: "Maplewood Estates",
    initials: "LG",
    rating: 5,
  },
];

export function Testimonials({
  title,
  subtitle,
  testimonials = defaultTestimonials,
  className,
}: TestimonialsProps) {
  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative transition-all hover:shadow-xl"
            >
              <CardContent className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-amber-700 dark:text-amber-400 opacity-50" />
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating Stars */}
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonial.rating!
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300 dark:text-gray-600"
                        )}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Avatar className="h-12 w-12">
                    {testimonial.avatar && (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    )}
                    <AvatarFallback className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 font-semibold">
                      {testimonial.initials || 
                        testimonial.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
