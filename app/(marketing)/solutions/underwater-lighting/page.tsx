import { Banner } from "@/components/marketing/banner";
import { Hero } from "@/components/marketing/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Underwater Lighting | BD Outdoor Lighting",
  description:
    "Professional underwater lighting for pools, ponds, and fountains. BD Outdoor Lighting turns your water features into dazzling nighttime focal points.",
};

export default function UnderwaterLightingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Underwater Lighting"
        subtitle="Pool, pond, and fountain lighting that transforms your water features into dazzling nighttime focal points."
      />

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Pool, Pond & Fountain Lighting"
          title="Water Features That Come Alive at Night"
          content="Water and light are a stunning combination. Our underwater lighting designs illuminate pools, ponds, fountains, and water features with submersible, color-rich LED fixtures rated for full submersion. From a serene glow to a vibrant color show, we turn your water features into the centerpiece of your nighttime landscape."
          image="/home/IMG_1439.JPEG"
          imageAlt="BD Outdoor Lighting nighttime installation"
          imageLocation="right"
          mobileImageLocation="top"
          list={[
            "Pool and spa underwater LED lighting",
            "Pond and water garden illumination",
            "Fountain and waterfall accent lighting",
            "Color-changing and programmable LED systems",
            "Fully submersible, low-voltage fixtures",
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
              Lighting Beneath the Surface
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From tranquil glows to vibrant color shows — we light your water features safely and beautifully.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pool & Spa Lighting",
                description:
                  "Submersible LED fixtures that make your pool and spa glow from within, creating a resort-style atmosphere at night.",
              },
              {
                title: "Pond & Water Garden",
                description:
                  "Soft, submerged lighting that brings koi ponds and water gardens to life while highlighting plants and stone.",
              },
              {
                title: "Fountain Lighting",
                description:
                  "Accent fixtures aimed at moving water that catch every ripple and spray for a mesmerizing nighttime display.",
              },
              {
                title: "Waterfall Lighting",
                description:
                  "Strategically placed lights that illuminate cascading water, turning waterfalls into glowing focal points.",
              },
              {
                title: "Color-Changing LED",
                description:
                  "Programmable, full-color LED systems that let you shift the mood from calm whites to vibrant, dynamic color shows.",
              },
              {
                title: "Smart Controls",
                description:
                  "Control color, brightness, and scheduling for all your water features right from your phone.",
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
          title="Safe, Sealed, and Stunning"
          content="Underwater lighting demands precision and safety. We use only fully submersible, low-voltage fixtures rated for continuous underwater use, with sealed, code-compliant wiring. From new water features to existing pools and ponds, we install lighting that's as safe as it is breathtaking."
          image="/home/IMG_1429.JPEG"
          imageAlt="BD Outdoor Lighting nighttime installation"
          imageLocation="left"
          mobileImageLocation="top"
          list={[
            "Free on-site design consultation and demo",
            "Custom plan for pools, ponds, and water features",
            "Fully submersible, low-voltage LED fixtures",
            "Sealed, code-compliant wiring and safe installation",
            "Maintenance and warranty plans available",
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
            Ready to Make a Splash After Dark?
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
