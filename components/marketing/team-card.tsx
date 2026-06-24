"use client";

import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  initials?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <Card className={cn("group transition-all hover:shadow-lg", className)}>
      <CardContent className="flex flex-col items-center text-center">
        {/* Avatar */}
        <Avatar className="h-24 w-24 mb-4">
          {member.image && <AvatarImage src={member.image} alt={member.name} />}
          <AvatarFallback className="text-xl font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
            {member.initials || member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-3">
          {member.role}
        </p>

        {/* Bio */}
        {member.bio && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {member.bio}
          </p>
        )}

        {/* Social Links */}
        {(member.email || member.linkedin || member.twitter) && (
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 w-full justify-center">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-amber-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-amber-700 dark:hover:text-white"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-amber-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-amber-700 dark:hover:text-white"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-amber-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-amber-700 dark:hover:text-white"
                aria-label={`${member.name} on Twitter`}
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
