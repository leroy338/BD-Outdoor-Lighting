"use client";

import { Quote } from "@/components/marketing/quote";
import { Topbar } from "@/components/marketing/topbar";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    console.log("Quote request submitted:", data);
    // Here you would typically send the data to your API
    // For now, we'll just log it and redirect
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <>
      <Topbar />
      <Quote 
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}
