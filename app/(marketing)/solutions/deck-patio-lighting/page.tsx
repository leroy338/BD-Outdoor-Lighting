import { Banner } from "@/components/marketing/banner";
import { Hero } from "@/components/marketing/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck & Patio Lighting | BD Outdoor Lighting",
  description:
    "Professional deck and patio lighting — step lights, railing lights, post caps, and ambient string lighting. BD Outdoor Lighting makes your outdoor living space glow.",
};

export default function DeckPatioLightingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Deck & Patio Lighting"
        subtitle="Warm, inviting lighting that turns your deck and patio into the perfect place to gather after dark."
      />

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Outdoor Living Lighting"
          title="Your Outdoor Living Space, Reimagined"
          content="Your deck and patio are where memories are made — so why let them go dark at sunset? Our deck and patio lighting designs blend safety and ambiance with step lights, railing accents, post caps, and overhead string lighting. The result is a warm, usable outdoor room you'll enjoy long into the evening."
          image="/home/IMG_1433.JPEG"
          imageAlt="Patio and seat-wall lighting glowing in the evening"
          imageLocation="right"
          mobileImageLocation="top"
          list={[
            "Recessed step and stair lighting for safety",
            "Railing and baluster accent lighting",
            "Illuminated post caps and column lights",
            "Overhead string and bistro lighting",
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
              Lighting for Every Gathering
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From safe footing to cozy ambiance — we light your outdoor living space from every angle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Step & Stair Lights",
                description:
                  "Recessed fixtures that wash light across every step and riser, keeping your deck and patio safe to navigate after dark.",
              },
              {
                title: "Railing Lighting",
                description:
                  "Subtle accent lights integrated into railings and balusters that define the edges of your space with a warm glow.",
              },
              {
                title: "Post Caps & Column Lights",
                description:
                  "Illuminated post caps and column-mounted fixtures that add both height and ambiance to your deck's perimeter.",
              },
              {
                title: "String & Bistro Lights",
                description:
                  "Overhead string lighting that creates a cozy, café-style atmosphere perfect for dinners and entertaining.",
              },
              {
                title: "Hardscape Lighting",
                description:
                  "Fixtures tucked into retaining walls, seat walls, and pillars to highlight your patio's hardscape features.",
              },
              {
                title: "Smart Controls",
                description:
                  "Dim, schedule, and zone your deck and patio lighting from your phone to set the perfect mood for any occasion.",
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
          title="Seamlessly Integrated, Beautifully Built"
          content="We design lighting that works with the structure of your deck and patio — integrating fixtures into steps, railings, and overhead structures with concealed wiring. Whether your deck is brand new or already built, we install clean, durable lighting that feels like it was always part of the design."
          image="/home/IMG_1437.JPEG"
          imageAlt="Covered porch with illuminated columns and accent lighting at dusk"
          imageLocation="left"
          mobileImageLocation="top"
          list={[
            "Free on-site design consultation and demo",
            "Custom plan for new or existing decks and patios",
            "Professional-grade, weatherproof LED fixtures",
            "Concealed, integrated wiring and tidy installation",
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
            Ready to Enjoy Your Deck After Dark?
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
