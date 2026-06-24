import { Banner } from "@/components/marketing/banner";
import { Hero } from "@/components/marketing/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Lighting | BD Outdoor Lighting",
  description:
    "Professional landscape lighting — path lights, tree uplighting, garden accents, and moonlighting. BD Outdoor Lighting highlights the best features of your yard.",
};

export default function LandscapeLightingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Landscape Lighting"
        subtitle="Path lights, garden accents, and tree uplighting designed to bring your yard to life after dark."
      />

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Path, Garden & Accent Lighting"
          title="Your Landscape, After Dark"
          content="Beautiful landscaping shouldn't disappear at sunset. Our landscape lighting designs guide guests along pathways, highlight specimen trees and garden beds, and create soft, layered ambiance throughout your yard. We place every fixture with intention to extend your enjoyment of your outdoor space well into the evening."
          image="/home/IMG_1432.JPEG"
          imageAlt="Path lighting guiding along an illuminated walkway through the yard at night"
          imageLocation="right"
          mobileImageLocation="top"
          list={[
            "Path and walkway lighting for safe navigation",
            "Tree uplighting and dramatic silhouetting",
            "Garden bed and shrub accent lighting",
            "Moonlighting from tree canopies",
            "Energy-efficient LED fixtures and smart controls",
          ]}
          primaryButton={{
            label: "Get a Free Quote",
            link: "/get-started",
            variant: "default",
          }}
          secondaryButton={{
            label: "See All Services",
            link: "/solutions",
            variant: "outline",
          }}
        />
      </section>

      {/* What We Offer Grid */}
      <section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Lighting That Highlights Nature
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From practical pathways to dramatic focal points — we light your landscape in layers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Path Lighting",
                description:
                  "Low-level fixtures that line walkways, driveways, and steps for safe, welcoming passage across your property.",
              },
              {
                title: "Tree Uplighting",
                description:
                  "Dramatic ground-mounted lights that wash up trunks and into canopies, turning mature trees into living sculptures.",
              },
              {
                title: "Garden Accents",
                description:
                  "Targeted spotlighting that highlights flower beds, ornamental grasses, and specimen plants throughout your landscape.",
              },
              {
                title: "Moonlighting",
                description:
                  "Soft fixtures mounted high in trees cast dappled, natural-looking light that mimics a full moon across your yard.",
              },
              {
                title: "Water & Feature Lighting",
                description:
                  "Accent lighting for statues, boulders, fountains, and other landscape features that deserve to be seen at night.",
              },
              {
                title: "Smart Controls",
                description:
                  "Schedule, dim, and zone your landscape lighting from your phone with timers and astronomical clocks.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-amber-600 to-amber-800">
                  <span className="text-xl font-bold text-white">
                    {service.title.charAt(0)}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Our Process"
          title="Designed Around Your Landscape"
          content="We walk your property after dark to understand its shape, plantings, and focal points, then design a layered lighting plan that feels natural and intentional. Our weatherproof fixtures and buried low-voltage wiring keep everything clean and durable, season after season."
          image="/home/IMG_1428.JPEG"
          imageAlt="Accent lighting illuminating garden beds along a walkway at night"
          imageLocation="left"
          mobileImageLocation="top"
          list={[
            "Free on-site evening design demo",
            "Custom, layered landscape lighting plan",
            "Professional-grade, weatherproof LED fixtures",
            "Low-voltage, concealed wiring and tidy installation",
            "Seasonal adjustments and maintenance plans",
          ]}
          primaryButton={{
            label: "Schedule a Consultation",
            link: "/get-started",
            variant: "default",
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-linear-to-br from-amber-600 to-amber-800 p-8 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Light Up Your Landscape?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-50">
            Contact us today for a free, no-obligation design consultation and estimate.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-amber-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-amber-700"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
