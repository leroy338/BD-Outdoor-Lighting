import { Banner } from "@/components/marketing/banner";
import { Hero } from "@/components/marketing/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BD Outdoor Lighting",
  description:
    "BD Outdoor Lighting designs and installs professional outdoor lighting across the Triad. Learn our story and what we stand for.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="About BD Outdoor Lighting"
        subtitle="A passion for design, a love of craftsmanship, and a mission to make properties shine after dark."
      />

      {/* Origin Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Our Story"
          title="Built on a Love of Great Lighting"
          content="BD Outdoor Lighting started with a simple belief: a beautiful home shouldn't disappear when the sun goes down. What began as a few accent lights for friends and neighbors quickly grew into something real. We found out fast that we were good at this, that we genuinely loved seeing a property transform at night, and that people kept calling us back — and bringing their neighbors with them."
          image="/home/IMG_1439.JPEG"
          imageAlt="BD Outdoor Lighting installation illuminating a home at night"
          imageLocation="right"
          mobileImageLocation="top"
          list={[
            "Started by lighting homes for friends and neighbors",
            "Grew entirely through word of mouth",
            "Built our reputation on honest work and fair prices",
            "Now serving residential and commercial clients across the region",
          ]}
          primaryButton={{
            label: "See Our Work",
            link: "/solutions",
            variant: "default",
          }}
          secondaryButton={{
            label: "Get a Free Quote",
            link: "/get-started",
            variant: "outline",
          }}
        />
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              How We Work
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What We Believe In
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not a big corporation. We're a team of people who care about great design, quality fixtures, and treating clients right.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Honest Work",
                description:
                  "We show up when we say we will, do what we promised, and charge what we quoted. No surprises, no runaround.",
              },
              {
                title: "Quality That Lasts",
                description:
                  "We use professional-grade, weatherproof fixtures and clean, concealed wiring — built to look great and perform for years.",
              },
              {
                title: "Design First",
                description:
                  "Lighting is an art. We design every project around your home's architecture and landscape, so the result feels intentional, not bolted on.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-amber-600 to-amber-800">
                  <span className="text-xl font-bold text-white">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Got Here */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero
          caption="Where We Are Now"
          title="Lighting Up Properties Across the Triad"
          content="What started with a handful of accent lights has grown into a full outdoor lighting operation. We design and install exterior, landscape, deck and patio, and underwater lighting — and every project is still approached the same way: like it's for a friend. Because most of the time, it is. We're still the same people who started this for the love of it, just with more experience and a bigger toolkit."
          image="/home/IMG_1437.JPEG"
          imageAlt="Home with warm uplighting and an illuminated tree at dusk"
          imageLocation="left"
          mobileImageLocation="top"
          list={[
            "Exterior, landscape, deck & patio, and underwater lighting",
            "Professional-grade, weatherproof LED fixtures",
            "Trusted by homeowners and property managers across the region",
            "Still answering our own phones",
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-linear-to-br from-amber-600 to-amber-800 p-8 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-50">
            Whether it's a few accent lights or a full property lighting design, we'd love to talk about your project. Reach out and let's make something great.
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
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
