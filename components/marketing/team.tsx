"use client";

import * as React from "react";
import { TeamCard, type TeamMember } from "./team-card";
import { cn } from "@/lib/utils";

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

const defaultMembers: TeamMember[] = [
  {
    name: "Austin Cheek",
    role: "Owner & Lead Lighting Designer",
    bio: "10+ years designing and installing outdoor lighting. Austin brings creative vision and hands-on expertise to every project, big or small.",
    initials: "AC",
    email: "austin@bdoutdoorlighting.com",
  },
  {
    name: "Mike Blackman",
    role: "Installation Lead",
    bio: "Meticulous installer with a passion for clean, durable work. Mike has wired and placed fixtures on hundreds of properties across the region.",
    initials: "MB",
    email: "mike@bdoutdoorlighting.com",
  },
  {
    name: "Kevin Jenkins",
    role: "Director of IT & Smart Lighting Lead",
    bio: "Kevin leads our smart-lighting and technology work. With a degree in Computer Science, he designs the app-controlled systems that bring our installs to life.",
    initials: "KJ",
    email: "kevin@bdoutdoorlighting.com",
  },
];

export function Team({
  title = "Meet Our Team",
  subtitle = "A passionate team of outdoor lighting professionals dedicated to making your property shine after dark.",
  members = defaultMembers,
  className,
}: TeamProps) {
  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-5xl mx-auto">
          {members.map((member) => (
            <TeamCard key={member.email || member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
