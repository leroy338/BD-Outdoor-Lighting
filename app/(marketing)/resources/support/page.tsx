import { Banner } from "@/components/marketing/banner";
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | BD Outdoor Lighting",
  description: "Get in touch with BD Outdoor Lighting. Call or email us and we'll be happy to help.",
};

const PHONE_DISPLAY = "336-649-4549";
const PHONE_LINK = "+13366494549";
const EMAIL = "support@bdoutdoorlighting.com";

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Banner
        title="Support"
        subtitle="Have a question? We're happy to help."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Contact BD Outdoor Lighting
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Give us a call or send an email and we&apos;ll get back to you as soon as we can.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <a
            href={`tel:${PHONE_LINK}`}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-amber-600 to-amber-800">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Call Us
            </h3>
            <p className="text-lg font-medium text-amber-700 dark:text-amber-400 group-hover:underline">
              {PHONE_DISPLAY}
            </p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-amber-600 to-amber-800">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Email Us
            </h3>
            <p className="text-lg font-medium text-amber-700 dark:text-amber-400 group-hover:underline break-all">
              {EMAIL}
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
