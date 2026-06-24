import { Banner } from "@/components/marketing/banner";
import { Hero } from "@/components/marketing/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Lighting | BD Outdoor Lighting",
  description:
    "Professional architectural and facade lighting — uplighting, wall washing, soffit, and security lighting. BD Outdoor Lighting makes your home shine after dark.",
};

export default function ExteriorLightingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Exterior Lighting"
        subtitle="Architectural lighting that brings out the best of your home's design — long after the sun goes down."
      />

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Architectural & Facade Lighting"
          title="Your Home, Beautifully Illuminated"
          content="From dramatic uplighting on columns and stonework to soft wall washing across your facade, our exterior lighting designs add depth, curb appeal, and security to your property. We use professional-grade, weather-resistant fixtures placed with intention — so every angle of your home looks its best after dark."
          image="/home/IMG_1429.JPEG"
          imageAlt="Warm wall washing and uplighting across a brick home facade at night"
          imageLocation="right"
          mobileImageLocation="top"
          list={[
            "Architectural uplighting and wall washing",
            "Soffit and downlighting for clean, even coverage",
            "Entryway, column, and garage accent lighting",
            "Security and motion-activated lighting",
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
              Lighting for Every Detail
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From subtle accents to bold statements — we light your home's architecture with precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Uplighting",
                description:
                  "Ground-mounted fixtures that cast light upward across columns, stonework, and architectural features for dramatic depth and texture.",
              },
              {
                title: "Wall Washing",
                description:
                  "Soft, even light spread across flat facades and walls to highlight materials and give your home a warm, polished glow.",
              },
              {
                title: "Soffit & Downlighting",
                description:
                  "Recessed fixtures tucked into eaves and soffits deliver clean, top-down illumination that mimics natural light.",
              },
              {
                title: "Entryway Lighting",
                description:
                  "Welcoming, well-lit entrances and doorways that improve both curb appeal and safe navigation to your front door.",
              },
              {
                title: "Security Lighting",
                description:
                  "Strategically placed and motion-activated lighting that deters intruders and keeps dark corners of your property safe.",
              },
              {
                title: "Smart Controls",
                description:
                  "Schedule, dim, and control your exterior lighting from your phone — with timers, zones, and astronomical clocks.",
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
          title="Designed, Installed, and Built to Last"
          content="Every project starts with a custom lighting design tailored to your home's architecture. We use only professional-grade, weatherproof fixtures and bury wiring cleanly out of sight — so the only thing you notice is beautiful, reliable light night after night."
          image="/home/IMG_1428.JPEG"
          imageAlt="Illuminated home facade and walkway with accent uplighting at dusk"
          imageLocation="left"
          mobileImageLocation="top"
          list={[
            "Free on-site design consultation and demo",
            "Custom lighting plan tailored to your home",
            "Professional-grade, weatherproof LED fixtures",
            "Clean, concealed wiring and tidy installation",
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
            Ready to Light Up Your Home?
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
