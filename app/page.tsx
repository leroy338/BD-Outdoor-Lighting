
import { Header } from "@/components/marketing/header";
import { Features } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";
import { Banner } from "@/components/marketing/banner";
import { Topbar } from "@/components/marketing/topbar";
import { Footer } from "@/components/marketing/footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BD Outdoor Lighting",
  image: "https://bdoutdoorlighting.com/non-text-logo.png",
  url: "https://bdoutdoorlighting.com",
  telephone: "+1-336-649-4549",
  email: "support@bdoutdoorlighting.com",
  description:
    "Professional outdoor lighting design, installation, and maintenance serving Kernersville, NC and the surrounding Triad, including Winston-Salem and High Point.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kernersville",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Kernersville, NC" },
    { "@type": "City", name: "Winston-Salem, NC" },
    { "@type": "City", name: "High Point, NC" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Topbar />
      <div className="min-h-screen bg-white dark:bg-black pt-16">

        {/* Hero Header */}
        <Header
          image="/bdoutdoors-logo.png"
          imageAlt="BD Outdoor Lighting logo"
          title="Light Up Your Life"
          subtitle="Architectural, landscape, and accent lighting design — we bring your outdoor spaces to life after dark."
          primaryButton={{
            text: "Get a Free Quote",
            href: "/get-started",
            variant: "default",
          }}
          secondaryButton={{
            text: "Our Services",
            href: "/solutions",
            variant: "outline",
          }}
        />

        {/* Services Section */}
        <Features
          title="What We Do"
          subtitle="From landscape lighting to architectural accents — we design and install lighting that transforms your property."
        />

        {/* Who We Are Banner */}
        <Banner
          title="Lighting that turns your property into a nighttime showpiece"
          subtitle="We started BD Outdoor Lighting because we love seeing spaces come alive after sunset. The same care and craftsmanship we put into our own designs, we put into every project."
        />

        {/* Who We Are Section */}
        <Hero
          title="Locally Owned. Lighting Obsessed."
          caption="Who We Are"
          content="BD Outdoor Lighting was founded on a passion for design and a commitment to honest, high-quality work. We started small and grew through word of mouth — because when you do great work, clients come back and bring their neighbors. Today we light homes and properties across the region with the same dedication that built our reputation."
          image="/home/IMG_1437.JPEG"
          imageAlt="Home facade with warm uplighting and an illuminated tree at dusk"
          imageLocation="right"
          mobileImageLocation="top"
          primaryButton={{
            label: "Meet the Team",
            link: "/about",
            variant: "default",
          }}
          secondaryButton={{
            label: "See Our Work",
            link: "/solutions",
            variant: "outline",
          }}
        />


        {/* Lighting Design Section */}
        <Hero
          title="Lighting Designed Around Your Space"
          caption="Lighting Design & Consulting"
          content="Our lighting designers work with you to create warm, inviting, and dramatic outdoor environments — from subtle path lighting to bold architectural uplighting. We use professional-grade, energy-efficient fixtures built to withstand the elements, so your property looks stunning night after night with minimal upkeep."
          image="/home/IMG_1433.JPEG"
          imageAlt="Colorful landscape lighting illuminating garden beds and walkway"
          imageLocation="left"
          mobileImageLocation="top"
          className="bg-amber-50 dark:bg-amber-950"
          list={[
            "Custom landscape and path lighting design",
            "Architectural and facade uplighting",
            "Deck, patio, and outdoor living lighting",
            "Energy-efficient LED fixtures and smart controls",
            "Ongoing maintenance plans available",
          ]}
          primaryButton={{
            label: "Design My Lighting",
            link: "/solutions/lighting-design",
            variant: "default",
          }}
        />

        {/* CTA Section */}
        <Hero
          title="Ready to Light Up Your Outdoor Space?"
          subtitle="Get a free, no-obligation consultation and estimate."
          image="/home/IMG_1439.JPEG"
          imageAlt="Finished outdoor lighting installation on a home at night"
          imageLocation="right"
          mobileImageLocation="top"
          primaryButton={{
            label: "Get a Free Quote",
            link: "/get-started",
            variant: "default",
          }}
          secondaryButton={{
            label: "Call Us",
            link: "/resources/support",
            variant: "outline",
          }}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
