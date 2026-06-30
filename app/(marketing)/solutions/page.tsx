import { Banner } from "@/components/marketing/banner";
import type { Metadata } from "next";
import { Lightbulb, Trees, Home, Waves, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | BD Outdoor Lighting",
  description:
    "Exterior lighting, landscape lighting, deck and patio lighting, and underwater lighting. Browse everything BD Outdoor Lighting has to offer.",
};

const solutions = [
  {
    icon: Lightbulb,
    title: "Exterior Lighting",
    description:
      "Architectural and facade lighting — uplighting, wall washing, soffit, and security lighting that makes your home shine after dark.",
    href: "/solutions/exterior-lighting",
    image: "/Edited/residential-front.png",
    tags: ["Uplighting", "Facade Wash", "Soffit Lighting", "Security"],
  },
  {
    icon: Trees,
    title: "Landscape Lighting",
    description:
      "Path lights, garden accents, tree uplighting, and moonlighting designed to highlight the best features of your yard.",
    href: "/solutions/landscape-lighting",
    image: "/Edited/apartment-poolside.png",
    tags: ["Path Lighting", "Tree Uplighting", "Garden Accents", "Moonlighting"],
  },
  {
    icon: Home,
    title: "Deck & Patio Lighting",
    description:
      "Warm, inviting lighting for outdoor living — step lights, railing lights, post caps, and ambient string lighting.",
    href: "/solutions/deck-patio-lighting",
    image: "/Edited/apartment-firepit.png",
    tags: ["Step Lights", "Railing Lights", "Post Caps", "String Lights"],
  },
  {
    icon: Waves,
    title: "Underwater Lighting",
    description:
      "Pool, pond, and fountain lighting that turns water features into dazzling nighttime focal points.",
    href: "/solutions/underwater-lighting",
    image: "/Edited/underwater-lighting.png",
    tags: ["Pool Lighting", "Pond Lighting", "Fountains", "Color-Changing LED"],
  },
];

export default function SolutionsPage() {
  const isOdd = solutions.length % 2 !== 0;

  return (
    <div className="min-h-screen">
      <Banner
        title="Our Services"
        subtitle="Everything your property needs to shine after dark — from architectural lighting to dazzling water features."
      />

      {/* Solutions Grid */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Browse Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click any service to learn more about what's included, how we work, and how to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const isLastOdd = isOdd && index === solutions.length - 1;
            return (
              <Link
                key={solution.title}
                href={solution.href}
                className={`group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-2xl hover:-translate-y-1 ${
                  isLastOdd ? "sm:col-span-2 sm:max-w-[calc(50%-16px)] sm:mx-auto w-full" : ""
                }`}
              >
                {/* Background Image */}
                <div className="relative h-72 w-full">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

                  {/* Content on top of image */}
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    {/* Top: icon + title */}
                    <div>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-700/80 backdrop-blur-sm">
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {solution.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-200">
                        {solution.description}
                      </p>
                    </div>

                    {/* Bottom: tags + arrow */}
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-amber-300 group-hover:gap-2 transition-all whitespace-nowrap">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-linear-to-br from-amber-600 to-amber-800 p-8 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-50">
            We offer free consultations. Tell us about your space and we'll help you figure out the best plan of action.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-amber-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/solutions/consultation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-amber-700"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
