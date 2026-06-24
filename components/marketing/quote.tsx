"use client";

import * as React from "react";
import { X, Check, ArrowRight, ArrowLeft, Building2, Mail, Phone, FileText, Calendar } from "lucide-react";
import { useToast } from "@/lib/toast-context";
import { FIELD_LIMITS, PROJECT_TYPES, TIMELINES } from "@/lib/quote-options";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-.\s\d]+$/;

interface QuoteFormData {
  // Page 1: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Page 2: Project Details
  projectType: string;
  purpose: string;
  timeline: string;
  
  additionalRequirements: string;
}

interface QuoteSubmissionPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  purpose: string;
  timeline: string;
  additionalRequirements: string;
}

interface QuoteProps {
  onClose?: () => void;
  onSubmit?: (data: QuoteFormData) => void;
}

export function Quote({ onClose, onSubmit }: QuoteProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { showToast } = useToast();
  const [formData, setFormData] = React.useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    purpose: "",
    timeline: "",
    additionalRequirements: "",
  });

  const totalPages = 2;

  const updateFormData = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validatePage = (page: number): boolean => {
    switch (page) {
      case 1: {
        const phoneDigits = formData.phone.replace(/\D/g, "");
        return !!(
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          EMAIL_PATTERN.test(formData.email.trim()) &&
          PHONE_PATTERN.test(formData.phone.trim()) &&
          phoneDigits.length >= 7 &&
          phoneDigits.length <= 15
        );
      }
      case 2:
        return !!(
          formData.projectType &&
          formData.purpose.trim() &&
          formData.timeline
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validatePage(currentPage)) {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else {
        setShowReviewModal(true);
      }
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const payload: QuoteSubmissionPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        purpose: formData.purpose,
        timeline: formData.timeline,
        additionalRequirements: formData.additionalRequirements,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      if (onSubmit) {
        onSubmit(formData);
      }

      setShowReviewModal(false);
      showToast("Quote request submitted successfully! We'll get back to you within 24 hours.", "success");

      if (onClose) {
        onClose();
      }
    } catch {
      showToast("We couldn't submit your quote request right now. Please try again shortly.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = PROJECT_TYPES;
  const timelines = TIMELINES;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-6 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Request a Quote
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Tell us about your project and we&apos;ll provide a detailed quote
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between">
              {[1, 2].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                        step < currentPage
                          ? "bg-linear-to-br from-amber-600 to-amber-800 text-white"
                          : step === currentPage
                          ? "bg-linear-to-br from-amber-600 to-amber-800 text-white ring-4 ring-amber-100 dark:ring-amber-900/30"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step < currentPage ? <Check className="h-5 w-5" /> : step}
                    </div>
                    <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                      {step === 1 && "Contact Info"}
                      {step === 2 && "Project Details"}
                    </span>
                  </div>
                  {step < totalPages && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded transition-colors ${
                        step < currentPage
                          ? "bg-linear-to-r from-amber-600 to-amber-800"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {/* Page 1: Company Information */}
            {currentPage === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                  Contact Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      maxLength={FIELD_LIMITS.firstName}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      maxLength={FIELD_LIMITS.lastName}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        maxLength={FIELD_LIMITS.email}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 pl-10 pr-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                        placeholder="john@acme.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        maxLength={FIELD_LIMITS.phone}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 pl-10 pr-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: Project Details */}
            {currentPage === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                  Project Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => updateFormData("projectType", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Purpose / Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.purpose}
                    onChange={(e) => updateFormData("purpose", e.target.value)}
                    maxLength={FIELD_LIMITS.purpose}
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Please describe your project needs, goals, and any specific requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Desired Timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateFormData("timeline", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.additionalRequirements}
                    onChange={(e) => updateFormData("additionalRequirements", e.target.value)}
                    maxLength={FIELD_LIMITS.additionalRequirements}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Any specific requirements, preferences, or questions you'd like to share..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentPage === 1}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                currentPage === 1
                  ? "opacity-0 pointer-events-none"
                  : "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!validatePage(currentPage)}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all ${
                validatePage(currentPage)
                  ? "bg-linear-to-br from-amber-600 to-amber-800 hover:scale-105 hover:shadow-lg"
                  : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              }`}
            >
              {currentPage === totalPages ? "Review" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Review Your Quote Request
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Please review your information before submitting
              </p>

              <div className="space-y-6">
                {/* Company Information */}
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Contact Information
                  </h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Name:</dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{`${formData.firstName} ${formData.lastName}`.trim()}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Email:</dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{formData.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Phone:</dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{formData.phone}</dd>
                    </div>
                  </dl>
                </div>

                {/* Project Details */}
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Project Details
                  </h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Project Type:</dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{formData.projectType}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Timeline:</dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{formData.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600 dark:text-gray-400 mb-1">Purpose:</dt>
                      <dd className="text-sm text-gray-900 dark:text-white">{formData.purpose}</dd>
                    </div>
                  </dl>
                </div>

                {formData.additionalRequirements && (
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Additional Notes
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white">{formData.additionalRequirements}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  Edit Information
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 rounded-lg bg-linear-to-br from-amber-600 to-amber-800 px-6 py-3 text-sm font-semibold text-white hover:scale-105 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
